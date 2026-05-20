import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';
import LightSwitch from '../Icons/LightSwitch';
import Links from '../Navigation/Links';
import HomepageOld from './HomepageOld';

export default function Homepage() {
    const[isUnlit, setIsUnlit] = useState(false);
    const[isLight, setIsLight] = useState(false);
    const [isDark, setIsDark] = useState(true);
    const[oldMode, setOldMode] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [hoveredLink, setHoveredLink] = useState(null);

    const css = `@keyframes rotate {
                     0% {
                    transform: rotate(0deg);
                }
                100% {
                    transform: rotate(360deg);
                }
            }
            .out-top {
                animation: rotate 90s linear infinite;
                transform-origin: 13px 25px;
            }
            .in-top {
                animation: rotate 80s linear infinite;
                transform-origin: 13px 25px;
            }
            .out-bottom {
                animation: rotate 50s linear infinite;
                transform-origin: 87px 87px;
                transform: scale(0.5);
            }
            .in-bottom {
                animation: rotate 50s linear infinite;
                transform-origin: 70px 82px;
                transform: scale(0.5);
            }
        `;

    const unlitMode = {
        background: '#2b2b2b',
        textDefault: '#0c0c0c',
        textHover: '#e2914e',
        paperBg: 'transparent',
        svgPath1: '#6b3fa0',
        svgPath2: '#8b5fbf',
        svgPath3: '#9d6b2f',
        svgPath4: '#b8895f',
    }

    // Light mode colors
    const lightMode = {
        background: '#ececec',
        textDefault: '#000000',
        textHover: '#2c2c2c',
        paperBg: 'transparent',
        svgPath1: '#c49ef3',
        svgPath2: '#dcaff7',
        svgPath3: '#eeb58f',
        svgPath4: '#f8ceb6',
    };

    // Dark mode colors
    const darkMode = {
        background: '#000000',
        textDefault: '#ffffff',
        textHover: '#ffcfa8',
        paperBg: 'transparent',
        svgPath1: '#6b3fa0',
        svgPath2: '#8b5fbf',
        svgPath3: '#9d6b2f',
        svgPath4: '#b8895f',
    };

    function GetLightState() {
        if (isDark) {
            return darkMode;
        } else if(isUnlit) {
            return unlitMode;
        } else if(isLight) {
            return lightMode;
        }
    }

    function OldModeCallback() {
        setOldMode(true);
    }

    function BreakLampCallback() {
        console.log("Lamp broken callback triggered!");
        setIsUnlit(true);
        setIsLight(false);
        setIsDark(false);
    }

    const colors = GetLightState();

    const linkStyle = (linkId) => ({
        fontWeight: 700,
        display: 'inline-block',
        textDecorationThickness: '0px',
        fontSize: '110%',
        color: hoveredLink === linkId ? colors.textHover : colors.textDefault,
        transform: hoveredLink === linkId ? 'translateY(-4px)' : 'translateY(0)',
        transition: 'all 0.2s ease',
    });

    // Listen for theme changes
    useEffect(() => {
        const checkTheme = () => {
            const theme = document.documentElement.getAttribute('data-theme');
            setIsDark(theme === 'dark');
            setIsLight(theme === 'light');
        };

        checkTheme();

        const observer = new MutationObserver(checkTheme);
        observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

        return () => observer.disconnect();
    }, []);

    // Track mouse movement for spotlight effect
    useEffect(() => {
        const handleMouseMove = (e) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const spotlightRadius = 200; // Adjust size of the spotlight circle

    return (
        <>
            {!oldMode && (
                <div 
                    className="relative min-h-[100dvh] w-full font-sans overflow-x-hidden flex flex-col"
                    style={{ backgroundColor: colors.background }}
                >
                    {/* Animated SVG background placed behind content */}
                    <div className='transition-all fixed duration-500 ease-in-out overflow-hidden top-0 left-0 w-full h-full'>
                        <svg preserveAspectRatio="xMidYMid slice" className='absolute z-0 w-full h-full' viewBox="10 10 80 80">
                            <defs>
                                <style type="text/css" >
                                    {css}
                                </style>
                            </defs>
                            <path fill={colors.svgPath1} className="out-top" d="M37-5C25.1-14.7,5.7-19.1-9.2-10-28.5,1.8-32.7,31.1-19.8,49c15.5,21.5,52.6,22,67.2,2.3C59.4,35,53.7,8.5,37-5Z" />
                            <path fill={colors.svgPath2} className="in-top" d="M20.6,4.1C11.6,1.5-1.9,2.5-8,11.2-16.3,23.1-8.2,45.6,7.4,50S42.1,38.9,41,24.5C40.2,14.1,29.4,6.6,20.6,4.1Z" />
                            <path fill={colors.svgPath3} className="out-bottom" d="M105.9,48.6c-12.4-8.2-29.3-4.8-39.4.8-23.4,12.8-37.7,51.9-19.1,74.1s63.9,15.3,76-5.6c7.6-13.3,1.8-31.1-2.3-43.8C117.6,63.3,114.7,54.3,105.9,48.6Z" />
                            <path fill={colors.svgPath4} className="in-bottom" d="M102,67.1c-9.6-6.1-22-3.1-29.5,2-15.4,10.7-19.6,37.5-7.6,47.8s35.9,3.9,44.5-12.5C115.5,92.6,113.9,74.6,102,67.1Z" />
                        </svg>
                    </div>

                    {/* Content container */}
                    <div className="relative z-10 w-full flex-1 flex flex-col">
                        <main className="w-full px-6 md:px-12 lg:px-24 py-20 flex flex-col items-start flex-1 pb-8">
                            <h6 className="leading-relaxed mb-6 text-3xl md:text-5xl lg:text-6xl transition-all duration-200 ease-in-out" style={{color: colors.textDefault}}>
                                Hi there!
                            </h6>

                            <h6 className="text-2xl md:text-4xl lg:text-5xl leading-relaxed whitespace-pre-wrap transition-all duration-200 ease-in-out" style={{color: colors.textDefault}}>
                                I'm{' '}
                                <a
                                    href="/about"
                                    style={linkStyle('about')}
                                    onMouseEnter={() => setHoveredLink('about')}
                                    onMouseLeave={() => setHoveredLink(null)}
                                    onTouchStart={() => setHoveredLink('about')}
                                    onTouchEnd={() => setHoveredLink(null)}
                                    aria-label="Go to about page"
                                >
                                    Ricardo
                                </a>
                                , a developer from Portugal with interests in game development, IoT and fullstack applications. You can check out my{' '}
                                <a
                                    href="/projects"
                                    style={linkStyle('projects')}
                                    onMouseEnter={() => setHoveredLink('projects')}
                                    onMouseLeave={() => setHoveredLink(null)}
                                    onTouchStart={() => setHoveredLink('projects')}
                                    onTouchEnd={() => setHoveredLink(null)}
                                    aria-label="Go to projects page"
                                >
                                    past projects
                                </a>
                                {' '}that I've worked on, a{' '}
                                <a
                                    href="/projects/dnd-yonder"
                                    style={linkStyle('dndyonder')}
                                    onMouseEnter={() => setHoveredLink('dndyonder')}
                                    onMouseLeave={() => setHoveredLink(null)}
                                    onTouchStart={() => setHoveredLink('dndyonder')}
                                    onTouchEnd={() => setHoveredLink(null)}
                                    aria-label="Go to D&D Sheet Manager project"
                                >
                                    D&D Sheet Manager
                                </a>, multiple{' '}
                                <a
                                    href="/projects/roguelike202"
                                    style={linkStyle('roguelike202')}
                                    onMouseEnter={() => setHoveredLink('roguelike202')}
                                    onMouseLeave={() => setHoveredLink(null)}
                                    onTouchStart={() => setHoveredLink('roguelike202')}
                                    onTouchEnd={() => setHoveredLink(null)}
                                    aria-label="Go to Roguelike 202 project"
                                >
                                    game jams
                                </a>
                                 ,{' '}
                                <a
                                    href="/projects/sts2mod"
                                    style={linkStyle('sts2mod')}
                                    onMouseEnter={() => setHoveredLink('sts2mod')}
                                    onMouseLeave={() => setHoveredLink(null)}
                                    onTouchStart={() => setHoveredLink('sts2mod')}
                                    onTouchEnd={() => setHoveredLink(null)}
                                    aria-label="Go to Slay The Spire 2 Mod project"
                                >
                                    game mods{' '}
                                </a>

                                 and even a complete{' '}
                                <a
                                    href="/projects/blazy-bot"
                                    style={linkStyle('blazy')}
                                    onMouseEnter={() => setHoveredLink('blazy')}
                                    onMouseLeave={() => setHoveredLink(null)}
                                    onTouchStart={() => setHoveredLink('blazy')}
                                    onTouchEnd={() => setHoveredLink(null)}
                                    aria-label="Go to Blazy Bot project"
                                >
                                    RPG inside Discord!
                                </a>
                            </h6>
                        </main>
                    </div>

                    <div className="mt-auto w-full z-10 relative">
                        <Links isDark={isDark} isUnlit={isUnlit}/>
                    </div>

                    {/* Spotlight mask using radial gradient */}
                    {isUnlit && (

                    <div
                        className="fixed inset-0 z-40 pointer-events-none"
                        style={{
                            background: `radial-gradient(circle ${spotlightRadius}px at ${mousePos.x}px ${mousePos.y}px, transparent 0%, rgba(0, 0, 0, 0.99) 100%)`,
                            transition: 'background 0.05s ease-out',
                        }}
                    />
                    )}

                    <LightSwitch breakCallback={BreakLampCallback} oldCallback={OldModeCallback} canBreak={true}></LightSwitch>
                </div>
            )}
            
            {oldMode && (
                <HomepageOld></HomepageOld>
            )}
        </>
    );
}

