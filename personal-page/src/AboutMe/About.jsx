import { useEffect, useRef, useState } from "react";
import Paper from "@mui/material/Paper";
import Breadcrum from "../Navigation/Breadcrum";
import LightSwitch from "../Icons/LightSwitch";
import Links from "../Navigation/Links";
/**
 * Hover-driven background switcher.
 *
 * Images expected in public/aboutme/ (e.g. Default_1.jpg, Spain_1.jpg, ...)
 */

const CATEGORIES = {
    Default: [
        "/aboutme/Default_1.jpg",
        "/aboutme/Default_2.jpg",
        "/aboutme/Default_3.jpg",
        "/aboutme/Default_4.jpg",
        "/aboutme/Default_5.jpg",
        "/aboutme/Default_6.jpg",
    ],
    Dresden: ["/aboutme/Dresden_1.jpg", "/aboutme/Dresden_2.jpg", "/aboutme/Dresden_3.jpg"],
    Origami: ["/aboutme/Origami_1.jpg", "/aboutme/Origami_2.jpg", "/aboutme/Origami_3.jpg"],
    Prague: ["/aboutme/Prague_1.jpg", "/aboutme/Prague_2.jpg", "/aboutme/Prague_3.jpg"],
    Rome: ["/aboutme/Rome_1.jpg", "/aboutme/Rome_2.jpg", "/aboutme/Rome_3.jpg"],
    Spain: ["/aboutme/Spain_1.jpg", "/aboutme/Spain_2.jpg", "/aboutme/Spain_3.jpg"],
    UK: ["/aboutme/UK_1.jpg", "/aboutme/UK_2.jpg", "/aboutme/UK_3.jpg"],
    Switzerland: ["/aboutme/Switzerland_1.jpg", "/aboutme/Switzerland_2.jpg", "/aboutme/Switzerland_3.jpg"],
};

const mapWordToCategory = {
    Spain: "Spain",
    Italy: "Rome",
    "the UK": "UK",
    Germany: "Dresden",
    "Czech Republic": "Prague",
    origami: "Origami",
    Origami: "Origami",
    Switzerland: "Switzerland",
    Portugal: "Default", // map Portugal hover to Default images
};

const CYCLE_MS = 10000;
const FADE_MS = 2000;

function HoverWord({ text, onHover }) {
    const category = mapWordToCategory[text] ?? null;
    if (!category) return <span>{text}</span>;
    return (
        <span
            onMouseEnter={() => onHover(category)}
            className="font-semibold"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") onHover(category);
            }}
        >
            {text}
        </span>
    );
}

export default function About() {
    const [visibleLayer, setVisibleLayer] = useState(0);
    const [layerUrls, setLayerUrls] = useState(["", ""]);
    const [isDark, setIsDark] = useState(false);
    const cycleRef = useRef(null);
    const indexRef = useRef(0);
    const currentCategoryRef = useRef(null);
    const prefersReducedMotion = useRef(false);
    const loadRequestRef = useRef(0);

    // Listen for theme changes
    useEffect(() => {
        const checkTheme = () => {
            const theme = document.documentElement.getAttribute('data-theme');
            setIsDark(theme === 'dark');
        };

        checkTheme();

        const observer = new MutationObserver(checkTheme);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        //Shuffle the image arrays to avoid always starting from the same image
        Object.keys(CATEGORIES).forEach((key) => {
            const arr = CATEGORIES[key];
            for (let i = arr.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        });
    }, []);

    useEffect(() => {
        prefersReducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        // preload all images
        Object.values(CATEGORIES)
            .flat()
            .forEach((src) => {
                const img = new Image();
                img.src = src;
            });

        // start Default cycle on mount
        startCycleFor("Default");

        return () => {
            clearInterval(cycleRef.current);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Preload the target image and only swap layers after it has loaded.
    function showUrl(url) {
        const other = 1 - visibleLayer;
        if (prefersReducedMotion.current) {
            setLayerUrls((prev) => {
                const next = [...prev];
                next[other] = url;
                return next;
            });
            setVisibleLayer(other);
            return;
        }

        const thisLoadId = ++loadRequestRef.current;
        const img = new Image();
        img.src = url;
        img.onload = () => {
            if (loadRequestRef.current !== thisLoadId) return;
            setLayerUrls((prev) => {
                const next = [...prev];
                next[other] = url;
                return next;
            });
            requestAnimationFrame(() => {
                setVisibleLayer(other);
            });
        };
        img.onerror = () => {
            if (loadRequestRef.current !== thisLoadId) return;
            setLayerUrls((prev) => {
                const next = [...prev];
                next[other] = url;
                return next;
            });
            requestAnimationFrame(() => {
                setVisibleLayer(other);
            });
        };
    }

    // Cycle runner: preload -> show -> wait -> advance
    function startCycleFor(categoryKey) {
        const imgs = CATEGORIES[categoryKey];
        if (!imgs || imgs.length === 0) return;
        clearTimeout(cycleRef.current);
        currentCategoryRef.current = categoryKey;
        indexRef.current = 0;

        const run = async () => {
            if (currentCategoryRef.current !== categoryKey) return;

            const url = imgs[indexRef.current];

            // preload with short timeout fallback
            await new Promise((resolve) => {
                let resolved = false;
                const img = new Image();
                img.src = url;
                img.onload = () => {
                    if (resolved) return;
                    resolved = true;
                    resolve();
                };
                img.onerror = () => {
                    if (resolved) return;
                    resolved = true;
                    resolve();
                };
                setTimeout(() => {
                    if (resolved) return;
                    resolved = true;
                    resolve();
                }, 1000);
            });

            showUrl(url);

            indexRef.current = (indexRef.current + 1) % imgs.length;
            cycleRef.current = setTimeout(() => {
                run();
            }, CYCLE_MS);
        };

        run();
    }

    // Theme colors
    const lightColors = {
        paperBg: 'rgba(255, 255, 255, 0.7)',
        textPrimary: '#1a1a1a',
        textSecondary: '#333333',
        linkHover: '#3874f5',
    };

    const darkColors = {
        paperBg: 'rgba(30, 30, 30, 0.85)',
        textPrimary: '#ffffff',
        textSecondary: '#e0e0e0',
        linkHover: '#a8d5ff',
    };

    const colors = isDark ? darkColors : lightColors;

    return (
        <>
            <Breadcrum segments={["About Me"]}>
            </Breadcrum>
            <div className="relative min-h-screen w-full overflow-hidden bg-center bg-cover">
                {/* background layers (double buffer) */}
                <div
                    aria-hidden
                    className="pointer-events-none fixed inset-0 -z-10 transition-opacity"
                    style={{
                        backgroundImage: layerUrls[0] ? `url("${layerUrls[0]}")` : undefined,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        opacity: layerUrls[0] ? (visibleLayer === 0 ? 1 : 0) : 0,
                        transition: `opacity ${FADE_MS}ms ease`,
                        filter: layerUrls[0] ? "blur(6px) saturate(0.95) brightness(0.95)" : undefined,
                    }}
                />
                <div
                    aria-hidden
                    className="pointer-events-none fixed inset-0 -z-10 transition-opacity"
                    style={{
                        backgroundImage: layerUrls[1] ? `url("${layerUrls[1]}")` : undefined,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        opacity: layerUrls[1] ? (visibleLayer === 1 ? 1 : 0) : 0,
                        transition: `opacity ${FADE_MS}ms ease`,
                        filter: layerUrls[1] ? "blur(6px) saturate(0.95) brightness(0.95)" : undefined,
                    }}
                />

                {/* Page content (keeps original structure) */}
                <div className="min-h-screen w-screen bg-center bg-cover flex items-start justify-center" style={{ backgroundImage: "url('/images/about-bg.jpg')" }}>
                    <div className="p-10 rounded-lg !w-[80%] mt-10 mx-4">
                        <Paper elevation={3} className="p-8 rounded-lg" style={{ backgroundColor: colors.paperBg }}>
                            <h1 className="!text-4xl !md:text-4xl font-extrabold mb-4" style={{ color: colors.textPrimary }}>About Me</h1>

                            <div className="text-2xl leading-8" style={{ color: colors.textSecondary }}>
                                <p className="mb-3">
                                    Hi! My name is Ricardo Silva and I'm a software engineer with a Master's Degree in Computer Science from NOVA FCT in Portugal, currently looking for employment (<i>clearly not as a designer</i>).
                                </p>

                                <p className="mb-3">
                                    I was born and raised in Lisbon,{" "}
                                    <HoverWord text="Portugal" onHover={startCycleFor} /> where I also completed my primary and secondary education. I enjoy travelling, having had the opportunity to visit{" "}
                                    <HoverWord text="Spain" onHover={startCycleFor} />, <HoverWord text="Italy" onHover={startCycleFor} />, <HoverWord text="the UK" onHover={startCycleFor} />, <HoverWord text="Germany" onHover={startCycleFor} />, <HoverWord text="Switzerland" onHover={startCycleFor} /> and the <HoverWord text="Czech Republic" onHover={startCycleFor} /> so far.
                                </p>

                                <p className="mb-3">
                                    I'm a big fan of video games, board games and tabletop RPGs, but I also like going outside the house (<i>sometimes a foreign concept for us software developers</i>). In the summer I like playing beach volleyball and swimming (be it in the pool, lake or sea!). During the colder months I like practicing indoor volleyball, table tennis, folding <HoverWord text="origami" onHover={startCycleFor} /> figurines and overall just staying at home, either playing games or just hanging out with friends.
                                </p>
                            </div>
                        </Paper>

                        <Paper elevation={3} className="p-8 mt-6 text-2xl rounded-lg" style={{ backgroundColor: colors.paperBg }}>
                            <h1 className="!text-3xl mt-8 !md:text-3xl font-extrabold mb-4" style={{ color: colors.textPrimary }}>Why Software Development?</h1>
                            <p className="mb-3" style={{ color: colors.textSecondary }}>
                                I grew up playing games since I was a kid. At around 8 years old I would watch my brother play World of Warcraft for hours and I loved every second of it. This childhood interest for games and computers in general led me to pursue software development as my final career choice (<i>with some guidance along the way too</i>).
                            </p>
                            <p className="mb-3" style={{ color: colors.textSecondary }}>
                                Much like my love for games, I quickly gained a passion for coding during my time in university. It allowed me to think of ridiculous ideas for games or projects with my friends, creating absurd scenarios that I would then try ( <i>and sometimes fail</i> ) to implement. Or seeing a cool project someone else made and thinking "I want to make that".
                            </p>
                        </Paper>

                        <Paper elevation={3} className="p-8 mt-6 text-2xl rounded-lg" style={{ backgroundColor: colors.paperBg }}>
                            <h1 className="!text-3xl mt-8 !md:text-3xl font-extrabold mb-4" style={{ color: colors.textPrimary }}>So... What Now?</h1>
                            <p className="mb-3" style={{ color: colors.textSecondary }}>
                                Having finished university I'm now looking for job opportunities that will allow me to grow as a developer, allowing me to learn new skills and experiment with new technologies no matter the field.
                            </p>
                            <p className="mb-3" style={{ color: colors.textSecondary }}>
                                Meanwhile I've kept myself busy by working on personal projects, learning things I did not get the chance to learn during my time in university. This includes trying to finish projects I started but never got to finish, and finally setting up a domain to host my own projects (<i>including this page</i>).
                            </p>
                            <p className="mb-3 font-semibold" style={{ color: colors.textPrimary }}>Thank you for taking the time to read a bit about me! If you'd like to get in touch, feel free to reach out through my links below.</p>
                        </Paper>

                        {/* <div className="mt-12 flex gap-6">
                            <a href="https://github.com/rmac-silva/" target="_blank" rel="noopener noreferrer" className="text-2xl p-3 rounded-4xl underline" style={{ backgroundColor: colors.paperBg, color: colors.textSecondary }}>GitHub</a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="text-2xl p-3 rounded-4xl underline" style={{ backgroundColor: colors.paperBg, color: colors.textSecondary }}>LinkedIn</a>
                            <a href="https://ko-fi.com/rmacsilva" target="_blank" rel="noopener noreferrer" className="text-2xl p-3 rounded-4xl underline" style={{ backgroundColor: colors.paperBg, color: colors.textSecondary }}>KoFi</a>
                            <a href="https://discord.com/users/249619725682868224" target="_blank" rel="noopener noreferrer" className="text-2xl p-3 rounded-4xl underline" style={{ backgroundColor: colors.paperBg, color: colors.textSecondary }}>Discord</a>
                        </div> */}


                    </div>
                </div>
                <div className="px-10 mb-10 -mt-10">
                    <Links isDark={true} />
                </div>
                <LightSwitch ></LightSwitch>
            </div>
        </>
    );
}