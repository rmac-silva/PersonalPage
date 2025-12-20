import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardMedia, Chip, Box } from '@mui/material';
import Breadcrum from '../Navigation/Breadcrum';
import LightSwitch from '../Icons/LightSwitch';

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
        image: '/projects/dnd-yonder/DnDYonderHome.png', // Project thumbnail
        link: '/projects/dnd-yonder',
    },
    {
        id: 'thesis-project',
        title: 'Thesis Project',
        subtitle: 'My thesis project, involving a conversational agent helping you modify the game parameters through dialog and conversation.',
        description: 'This was the project associated with my thesis dissertation. It involved a Unity game where users had to dodge sawblades. Within the game, a conversational agent (AI) would help users modify game parameters through dialog and conversation, making the game more difficult or easier. This project involved three main components: the Unity game, the conversational agent and a research interface to monitor and control the conversational agent\'s actions and behaviors.',
        tags: ['WebApp', 'React', 'FastAPI (Py)', 'D&D', 'Regex', 'Web Scraping'],
        image: '/projects/dnd-yonder/DnDYonderHome.png', // Project thumbnail
        link: '/projects/dnd-yonder',
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
        <div style={{
            minHeight: '100vh',
            background: colors.background,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backdropFilter: 'blur(10px)',
        }}>
            <Breadcrum segments={["Projects"]} />
            
            <div style={{
                padding: '6rem 2rem 2rem',
                maxWidth: '1200px',
                margin: '0 auto',
            }}>
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

            <LightSwitch />
        </div>
    );
};

export default ProjectDirectory;