import React from 'react';
import { useState, useEffect } from 'react';

export default function HomepageOld() {

    function GenerateRandomNumber() {
        // Generate a random number between 100000 and 999999
        return Math.floor(100 + Math.random() * 900);
    }

    const [visitorNr, setVisitorNr] = useState(GenerateRandomNumber());

    return (
        <div className="relative min-h-screen overflow-hidden" style={{
            backgroundColor: '#000033',
            backgroundImage: `
                radial-gradient(2px 2px at 20% 30%, white, transparent),
                radial-gradient(2px 2px at 60% 70%, white, transparent),
                radial-gradient(1px 1px at 50% 50%, white, transparent),
                radial-gradient(1px 1px at 80% 10%, white, transparent),
                radial-gradient(2px 2px at 90% 60%, white, transparent),
                radial-gradient(1px 1px at 33% 80%, white, transparent),
                radial-gradient(2px 2px at 15% 90%, white, transparent),
                radial-gradient(1px 1px at 70% 25%, white, transparent),
                radial-gradient(1px 1px at 40% 15%, white, transparent),
                radial-gradient(2px 2px at 25% 60%, white, transparent)
            `,
            backgroundSize: '200% 200%',
            fontFamily: '"Comic Sans MS", "Comic Sans", cursive'
        }}>
            {/* Animated rainbow border */}
            <div className="absolute top-4 left-4 right-4 bottom-4 pointer-events-none" style={{
                border: '5px solid',
                borderImage: 'linear-gradient(90deg, red, orange, yellow, lime, cyan, blue, magenta, red) 1',
                animation: 'rainbow 3s linear infinite'
            }} />

            <style>{`
                @keyframes rainbow {
                    0% { filter: hue-rotate(0deg); }
                    100% { filter: hue-rotate(360deg); }
                }
                @keyframes blink {
                    0%, 50%, 100% { opacity: 1; }
                    25%, 75% { opacity: 0; }
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-20px); }
                }
            `}</style>

            <main className="relative z-10 w-full px-8 py-12 text-center">
                {/* Under construction GIF style header */}
                <div className="mb-8 animate-pulse">
                    <h1 style={{
                        fontSize: '72px',
                        color: '#FFD700',
                        textShadow: '3px 3px #FF00FF, 6px 6px #00FFFF',
                        fontWeight: 'bold',
                        letterSpacing: '3px',
                        animation: 'float 2s ease-in-out infinite'
                    }}>
                        🌟 WELCOME TO MY WEBSITE 🌟
                    </h1>
                </div>

                {/* Blinking text */}
                <div className="mb-8" style={{ animation: 'blink 1.5s infinite' }}>
                    <p style={{
                        fontSize: '24px',
                        color: '#00FF00',
                        fontWeight: 'bold',
                        textShadow: '2px 2px #000000'
                    }}>
                        ⚠️ UNDER CONSTRUCTION ⚠️
                    </p>
                </div>

                {/* Main content box */}
                <div className="max-w-4xl mx-auto mb-8 p-6" style={{
                    backgroundColor: '#FF00FF',
                    border: '5px solid #FFFF00',
                    boxShadow: '10px 10px 0px #00FFFF'
                }}>
                    <h2 style={{
                        fontSize: '48px',
                        color: '#FFFFFF',
                        textShadow: '3px 3px #000000',
                        marginBottom: '20px'
                    }}>
                         Hi there! 
                    </h2>
                    
                    <p style={{
                        fontSize: '28px',
                        color: '#FFFF00',
                        textShadow: '2px 2px #000000',
                        lineHeight: '1.6',
                        marginBottom: '15px'
                    }}>
                        I'm <span style={{ color: '#00FFFF', fontWeight: 'bold' }}>Ricardo</span>, 
                        a developer from <span style={{ color: '#FF6600', fontWeight: 'bold' }}>Portugal </span> 
                        with interests in game development, networking and fullstack applications!
                    </p>

                    <p style={{
                        fontSize: '24px',
                        color: '#00FF00',
                        textShadow: '2px 2px #000000',
                        marginTop: '20px'
                    }}>
                        Check out my projects below! 
                    </p>
                </div>

                {/* Visitor counter style */}
                <div className="mb-8 inline-block px-6 py-3" style={{
                    backgroundColor: '#000000',
                    border: '3px solid #00FF00',
                    color: '#00FF00',
                    fontSize: '20px',
                    fontFamily: 'monospace'
                }}>
                    👁️ You are visitor #{visitorNr} 👁️
                </div>

                {/* Animated buttons */}
                <div className="flex justify-center gap-6 flex-wrap">
                    <a href="/about" className="px-8 py-4 inline-block" style={{
                        backgroundColor: '#FF0000',
                        color: '#FFFF00',
                        border: '4px solid #FFFFFF',
                        fontSize: '24px',
                        fontWeight: 'bold',
                        textDecoration: 'none',
                        boxShadow: '5px 5px 0px #000000',
                        cursor: 'pointer'
                    }}>
                        📖 ABOUT ME 📖
                    </a>
                    
                    <a href="/projects" className="px-8 py-4 inline-block" style={{
                        backgroundColor: '#00FF00',
                        color: '#FF00FF',
                        border: '4px solid #FFFFFF',
                        fontSize: '24px',
                        fontWeight: 'bold',
                        textDecoration: 'none',
                        boxShadow: '5px 5px 0px #000000',
                        cursor: 'pointer'
                    }}>
                        💻 PROJECTS 💻
                    </a>
                    
                    <a href="/projects/blazy-bot" className="px-8 py-4 inline-block" style={{
                        backgroundColor: '#00FFFF',
                        color: '#FF0000',
                        border: '4px solid #FFFFFF',
                        fontSize: '24px',
                        fontWeight: 'bold',
                        textDecoration: 'none',
                        boxShadow: '5px 5px 0px #000000',
                        cursor: 'pointer'
                    }}>
                        🎲 BLAZY BOT 🎲
                    </a>
                </div>

                {/* Marquee text at bottom */}
                <div className="mt-12 overflow-hidden">
                    <div className="whitespace-nowrap animate-marquee" style={{
                        fontSize: '32px',
                        color: '#FFD700',
                        fontWeight: 'bold',
                        textShadow: '2px 2px #FF00FF'
                    }}>
                        ✨ BEST VIEWED IN NETSCAPE NAVIGATOR ✨ THIS SITE IS OPTIMIZED FOR 800x600 ✨ 
                        SIGN MY GUESTBOOK AND I'LL SIGN YOURS BACK ✨ HAPPY Y2K ✨ WEBSITE DESIGN IS MY PASSION
                    </div>
                </div>

                <style>{`
                    @keyframes marquee {
                        0% { transform: translateX(100%); }
                        100% { transform: translateX(-100%); }
                    }
                    .animate-marquee {
                        animation: marquee 20s linear infinite;
                    }
                `}</style>
            </main>
        </div>
    )
}