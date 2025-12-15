
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
export default function Homepage() {
    return (
        <div className="relative min-h-screen bg-white overflow-hidden text-slate-900 font-sans">
            <style>{`
        @keyframes float {
          0% { transform: translateY(0) translateX(0) scale(1); }
          50% { transform: translateY(-28px) translateX(12px) scale(0.3); }
          100% { transform: translateY(0) translateX(0) scale(1); }
        }
        .animate-float { animation: float 20s ease-in-out infinite; }
      `}</style>

            <div className="absolute -left-[6%] top-[85%] w-70 h-70 rounded-full bg-[#fa9e60] opacity-25 blur-[18px] animate-float pointer-events-none" />
            <div className="absolute left-[88%] -top-[10%] w-90 h-90 rounded-full bg-[#fa9e60] opacity-22 blur-[18px] animate-float pointer-events-none" />
            <div className="absolute -right-[6%] top-[45%] w-55 h-55 rounded-full bg-[#f6763b] opacity-19 blur-[18px] animate-float pointer-events-none" style={{ animationDuration: "12s", animationDelay: "1s" }} />
            <div className="absolute left-[10%] -bottom-[6%] w-35 h-35 rounded-full bg-[#fdb593] opacity-18 blur-[18px] animate-float pointer-events-none" style={{ animationDuration: "9s", animationDelay: "0.5s" }} />
            <div className="absolute right-[20%] bottom-[10%] w-20 h-20 rounded-full bg-[#fa9860] opacity-24 blur-[12px] animate-float pointer-events-none" style={{ animationDuration: "11s", animationDelay: "2s" }} />

            <main className="w-full px-6 md:px-12 lg:px-24 py-20">
                <h6 className="leading-relaxed mb-6 text-6xl">
                    Hi there!
                </h6>

                <h6 className="text-6xl  leading-relaxed whitespace-pre-wrap">
                    I'm{' '}
                    <a
                        href="/about"
                        className="font-extrabold underline decoration-0 text-black! hover:text-[#f59338]!"
                        aria-label="Go to about page"
                    >
                        Ricardo
                    </a>
                    , a developer from Portugal with interests in game development, networking and fullstack applications. You can check out my{' '}
                    <a
                        href="/projects"
                        className="font-extrabold underline decoration-0 text-black! hover:text-[#f59338]!"
                        aria-label="Go to about page"
                    >

                        past projects
                    </a>
                    {' '}that I've worked on, from simple scripts to a complete{' '}
                    <a
                        href="/projects/blazy-bot"
                        className="font-extrabold underline decoration-0 text-black! hover:text-[#f59338]!"
                        aria-label="Go to about page"
                    >
                        RPG inside Discord
                    </a>!
                </h6>
                <div className="flex flex-row flex-wrap mt-15 text-4xl space-x-20">

                    <div className="flex flex-row leading-relaxed whitespace-pre-wrap">
                        Github{'   '}
                        <a
                            href="https://github.com/rmac-silva/"
                            className="font-extrabold underline decoration-0 text-neutral-800! hover:text-[#f59338]!"
                            aria-label="Go to my github page"
                        >
                            rmac-silva
                        </a>
                        <ArrowOutwardIcon className="ml-1 mt-1" style={{ fontSize: '2rem' }} />
                    </div>
                    <div className="flex flex-row leading-relaxed whitespace-pre-wrap">
                        LinkedIn{'   '}
                        <a
                            href="https://github.com/rmac-silva/"
                            className="font-extrabold underline decoration-0 text-neutral-800! hover:text-[#f59338]!"
                            aria-label="Go to my linkedin page"
                        >
                            @rmac-silva
                        </a>
                        <ArrowOutwardIcon className="ml-1 mt-1" style={{ fontSize: '2rem' }} />
                    </div>
                    <div className="flex flex-row leading-relaxed whitespace-pre-wrap">
                        Leave a tip{'   '}
                        <a
                            href="https://ko-fi.com/rmacsilva"
                            className="font-extrabold underline decoration-0 text-neutral-800! hover:text-[#f59338]!"
                            aria-label="Go to my Ko-fi page"
                        >
                            ko-fi/rmac-silva
                        </a>
                        <ArrowOutwardIcon className="ml-1 mt-1" style={{ fontSize: '2rem' }} />
                    </div>
                    <div className="flex flex-row leading-relaxed whitespace-pre-wrap">
                        Discord{'   '}
                        <a
                            href="https://discord.com/users/249619725682868224"
                            className="font-extrabold underline decoration-0 text-neutral-800! hover:text-[#f59338]!"
                            aria-label="Contact me on Discord"
                        >
                            @gilbio
                        </a>
                        <ArrowOutwardIcon className="ml-1 mt-1" style={{ fontSize: '2rem' }} />
                    </div>


                </div>
            </main>
        </div>
    );
}

