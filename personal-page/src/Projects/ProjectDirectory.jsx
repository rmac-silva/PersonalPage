import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardMedia, Chip, Box } from '@mui/material';
import Breadcrum from '../Navigation/Breadcrum';
import LightSwitch from '../Icons/LightSwitch';
import Links from '../Navigation/Links';

const projects = [
    {
        id: 'blazy-bot',
        title: 'Blazy Bot',
        subtitle: 'A Complete RPG Inside Discord',
        description: 'A Discord bot featuring a complete RPG system with turn-based combat, inventory, monsters, interactive events, weapon upgrading and many more features.',
        tags: ['Discord Bot', 'Python', 'RPG', 'Game Development'],
        image: '/projects/blazy-bot/FinishedFightPanel.png', // Project thumbnail
        link: '/projects/blazy-bot',
    },
    {
        id: 'dnd-yonder',
        title: 'DND Yonder',
        subtitle: 'A D&D 5e Sheet Management Tool',
        description: 'A "community" driven D&D 5e character sheet management web application. Allowing users to contribute to the database of items, spells, classes etc... so they can later use that information in their own sheets. The main goal is to contribute passively, by filling in information when it\'s missing.',
        tags: ['WebApp', 'React', 'FastAPI (Py)', 'D&D', 'Regex', 'Web Scraping'],
        image: '/projects/dnd-yonder/DnDYonderHome.png',
        video: '/projects/dnd-yonder/Overview.mp4', 
        link: '/projects/dnd-yonder',
    },
    {
        id: 'mythras-point-buy',
        title: 'Mythras Point Buy',
        subtitle: 'A Mythras Character Creation Tool',
        description: 'A tool to help create Mythras characters using their point buy system. It allows the player to create characters easily without having to keep track of all the different points. It also allows for custom rulesets, allowing players to add custom skills, save and export them.',
        tags: ['QT', 'C++', 'Mythras', 'Frontend', 'Application'],
        image: '/projects/mythras-point-buy/Overview.png',
        video: '/projects/mythras-point-buy/Overview.mp4', 
        link: '/projects/mythras-point-buy',
    },
    {
        id: 'roguelike202-jam',
        title: 'Roguelike202 - Itch.io/Minijam202',
        subtitle: 'My submission to the Itch.io Minijam 202 for January 2026.',
        description: 'The theme was Power-up with the limitation being \'Extremely Overpowered\'. As such I developed a small roguelike RPG focused on breaking the game and getting the player stats as high as possible through flat and multiplicative stat buffs and items.',
        tags: ["Unity", "C#", "Roguelike", "Game Jam"],
        image: '/projects/roguelike202-jam/Roguelike202Home.png',
        video: '/projects/roguelike202-jam/Overview.mp4',
        link: '/projects/roguelike202',
    },
    {
        id: 'diggin-game',
        title: 'Metal Detecting With Granny!',
        subtitle: 'A gamejam submission that turned into a longer project than anticipated. Mostly due to the storms that hit Portugal during the early months of the year.',
        description: "This project was originally a one week gamejam, where I collaborated with another teammate to develop a game for Brackey's game jam. The theme was strange places and as such we ended up setting up the player in a beach where strange items are hidden beneath the sands. To add to the 'strangeness' the player has to dance to dig said items up and escape off the island.",
        tags: ["Unity", "C#", "Exploration", "GameJam"],
        image: '/projects/brackeys/GameCover.png',
        video: '/projects/brackeys/GameOverview.mp4',
        link: '/projects/brackeys-jam',
    },
    {
        id: 'sts2-mod',
        title: 'Slay The Spire 2 - Relic Tracker Mod',
        subtitle: 'A mod for the newly released Slay The Spire 2, that shows detailed stats on the relics you have collected.',
        description: "This mod was developed for Slay The Spire 2, which was developed using Godot, specifically the C# version. For example if a relic deals 3 damage to all enemies, it can track overall damage dealt.",
        tags: ["Godot", "C#", "Modding", "Harmony"],
        image: '/projects/sts2mod/Overview.png',
        video: '/projects/sts2mod/Overview.mp4',
        link: '/projects/sts2mod',
    },
    {
        id: 'thesis-project',
        title: 'Thesis Project',
        subtitle: 'My thesis project, involving a conversational agent helping you modify the game parameters through dialog and conversation.',
        description: 'This was the project associated with my thesis dissertation. It involved a Unity game where users had to dodge sawblades. Within the game, a conversational agent (LLM) would help users modify game parameters through dialog and conversation, making the game more difficult or easier. This project involved three main components: the Unity game, the conversational agent and a research interface to monitor and control the conversational agent\'s actions and behaviors.',
        tags: ['Unity', 'C#', 'Python', 'NiceGUI', 'Conversational AI', 'Multi-Modal'],
        image: '/projects/thesis/ThesisHome.png',
        video: '/projects/thesis/Overview.mp4',
        link: '/projects/thesis',
    },
    {
        id: 'portfolio-builders-1',
        title: 'Village Alchemist',
        subtitle: 'A gamejam submission that got delayed due to the storms in Portugal. Also my first game using the Godot game engine and GDScript.',
        description: 'The theme for the weekly jam was secret ingredient, and the idea surged of having a game where you can brew potions with diverse effects, helping townsfolk with their problems. The game is a 2D pixel art game set in your alchemist shop. NPCs approach you and you give them potions. The game is mostly based around mixing potions that fit the problem of the NPC that shows up in your shop, where correctly brewed potions can have positive outcomes and if you get the potion wrong, even villagers may die.',
        tags: ["Godot", "GDScript", "Cozy", "Story Driven","Game Jam"],
        image: '/projects/village-alchemist/VillageAlchemistHome.png', // Project thumbnail
        link: '/projects/village-alchemist',
    },
    {
        id: 'wow-body-tracker',
        title: 'WoW Body Tracker',
        subtitle: 'A python application that uses computer vision to track your body movements, allowing you to play World of Warcraft using your body as a controller.',
        description: 'This was just a small side-project I made to experiment with computer vision, inspired heavily by The Link, a released application on Steam.',
        tags: ['Python', 'Computer Vision', 'Mediapipe', 'World of Warcraft'],
        image: '/projects/wow-tracking/WowIcon.png', // Project thumbnail
        link: '/projects/wow-body-tracker',
    },
    {
        id: 'excel-wrapper',
        title: 'Python GoogleSheets Wrapper',
        subtitle: 'A python wrapper for Google Sheets API',
        description: 'This wrapper simplifies interactions with Google Sheets API, allowing users (mostly me) to easily read, write, and manipulate spreadsheet data using Python.',
        tags: ['Python', 'Google Sheets', 'API', 'Wrapper'],
        image: '/projects/google-sheets-wrapper/Google-sheets.png', // Project thumbnail
        link: '/projects/google-sheets-wrapper',
    },
    // Add more projects here as they are created
];

const ProjectDirectory = () => {
    const [isDark, setIsDark] = useState(false);

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

    const colors = isDark ? {
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
        cardBg: 'rgba(30, 30, 46, 0.85)',
        textPrimary: '#ffffff',
        textSecondary: '#ebebeb',
        cardHoverBg: 'rgba(40, 40, 56, 0.95)',
    } : {
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
        cardBg: 'rgba(255, 255, 255, 0.85)',
        textPrimary: '#0c0c0c',
        textSecondary: '#242424',
        cardHoverBg: 'rgba(255, 255, 255, 0.95)',
    };

    return (
        <>
            <Breadcrum segments={["Projects"]} />
            
            <div 
                className="relative min-h-screen w-screen overflow-auto flex flex-col"
                style={{
                    background: colors.background,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backdropFilter: 'blur(10px)',
                }}
            >
                <div className="flex-1 w-screen flex items-start justify-center py-12 md:py-16 lg:py-20 mt-12 md:mt-0">
                    <div className="w-[95%] md:w-[90%] lg:w-[85%] max-w-[1200px] mx-auto pb-8">
                        <h1 style={{
                            fontSize: '3.5rem',
                            fontWeight: 'bold',
                            color: colors.textPrimary,
                            marginBottom: '1rem',
                            textAlign: 'center',
                            textShadow: isDark ? '2px 2px 8px rgba(0,0,0,0.5)' : '2px 2px 8px rgba(0,0,0,0.2)',
                        }}>
                            Past & Ongoing Projects
                        </h1>
                
                <p className='font-semibold!' style={{
                    fontSize: '1.8rem',
                    color: colors.textSecondary,
                    textAlign: 'center',
                    marginBottom: '3rem',
                }}>
                    A collection of my work and experiments
                </p>

                <Box sx={{
                    display: 'grid',
                    gridTemplateColumns: {
                        xs: '1fr',
                        sm: 'repeat(2, 1fr)',
                        md: 'repeat(3, 1fr)',
                    },
                    gap: 3,
                }}>
                    {projects.map((project) => (
                        <Card
                            key={project.id}
                            onClick={() => window.location.href = project.link}
                            sx={{
                                cursor: 'pointer',
                                background: colors.cardBg,
                                backdropFilter: 'blur(10px)',
                                transition: 'all 0.3s ease',
                                border: isDark ? '1px solid rgba(255,255,255,0.1)' : '1px solid rgba(0,0,0,0.1)',
                                '&:hover': {
                                    transform: 'translateY(-8px)',
                                    background: colors.cardHoverBg,
                                    boxShadow: isDark 
                                        ? '0 12px 24px rgba(0,0,0,0.5)' 
                                        : '0 12px 24px rgba(0,0,0,0.2)',
                                },
                            }}
                        >
                            {project.video ? (
                                <CardMedia
                                    component="video"
                                    height="200"
                                    image={project.video}
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    sx={{
                                        objectFit: 'cover',
                                        filter: 'brightness(0.9)',
                                        height: '200px',
                                        pointerEvents: 'none',
                                    }}
                                />
                            ) : (
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={project.image}
                                    alt={project.title}
                                    sx={{
                                        objectFit: 'cover',
                                        filter: 'brightness(0.9)',
                                    }}
                                />
                            )}
                            <CardContent>
                                <h2 style={{
                                    fontSize: '1.5rem',
                                    fontWeight: 'bold',
                                    color: colors.textPrimary,
                                    marginBottom: '0.5rem',
                                }}>
                                    {project.title}
                                </h2>
                                
                                <p style={{
                                    fontSize: '0.95rem',
                                    color: colors.textSecondary,
                                    fontWeight: '600',
                                    marginBottom: '0.75rem',
                                }}>
                                    {project.subtitle}
                                </p>

                                <p style={{
                                    fontSize: '0.9rem',
                                    color: colors.textSecondary,
                                    marginBottom: '1rem',
                                    lineHeight: '1.5',
                                }}>
                                    {project.description}
                                </p>

                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                    {project.tags.map((tag, index) => (
                                        <Chip
                                            key={index}
                                            label={tag}
                                            size="small"
                                            sx={{
                                                background: isDark 
                                                    ? 'rgba(100, 100, 150, 0.3)' 
                                                    : 'rgba(150, 100, 200, 0.2)',
                                                color: colors.textPrimary,
                                                fontSize: '0.75rem',
                                            }}
                                        />
                                    ))}
                                </Box>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
                    </div>
                </div>

                <div className="mt-auto w-full">
                    <Links isDark={isDark}/>
                </div>
                <LightSwitch />
            </div>
        </>
    );
};

export default ProjectDirectory;