import { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Breadcrum from "../Navigation/Breadcrum";
import LightSwitch from "../Icons/LightSwitch";
import Links from "../Navigation/Links";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import CloseIcon from '@mui/icons-material/Close';

export default function ProjectTemplate({ projectData }) {
    const [isDark, setIsDark] = useState(false);
    const [lightboxImage, setLightboxImage] = useState(null);

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

    // Close lightbox on escape key
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape') {
                setLightboxImage(null);
            }
        };

        if (lightboxImage) {
            document.addEventListener('keydown', handleEscape);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.body.style.overflow = 'auto';
        };
    }, [lightboxImage]);

    // Theme colors
    const lightColors = {
        paperBg: 'rgba(255, 255, 255, 0.8)',
        textPrimary: '#1a1a1a',
        textSecondary: '#333333',
        background: '#f5f5f5',
    };

    const darkColors = {
        paperBg: 'rgba(56, 56, 56, 0.9)',
        textPrimary: '#ffffff',
        textSecondary: '#e0e0e0',
        background: '#1a1a1a',
    };

    const colors = isDark ? darkColors : lightColors;

    return (
        <>
            <Breadcrum segments={["Projects", projectData.title]} />
            
            {/* Lightbox Modal */}
            {lightboxImage && (
                <div 
                    className="fixed inset-0 z-[10000] flex items-center justify-center p-4"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.9)' }}
                    onClick={() => setLightboxImage(null)}
                >
                    <button
                        className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors"
                        onClick={() => setLightboxImage(null)}
                        aria-label="Close"
                    >
                        <CloseIcon style={{ fontSize: '2rem', color: 'white' }} />
                    </button>
                    <img 
                        src={lightboxImage}
                        alt="Full size preview"
                        className="max-w-full max-h-full object-contain"
                        onClick={(e) => e.stopPropagation()}
                    />
                </div>
            )}

            <div 
                className="relative min-h-screen w-screen overflow-auto"
                style={{ backgroundColor: colors.background }}
            >
                <div className="min-h-screen w-screen flex items-start justify-center py-20">
                    <div className="p-10 rounded-lg w-[85%] max-w-full mx-4">
                        {/* Header Section */}
                        <Paper elevation={3} className="p-8 rounded-lg mb-6" style={{ backgroundColor: colors.paperBg }}>
                            <h1 className="text-5xl font-extrabold mb-4" style={{ color: colors.textPrimary }}>
                                {projectData.title}
                            </h1>
                            
                            {projectData.subtitle && (
                                <h2 className="text-2xl mb-4" style={{ color: colors.textSecondary }}>
                                    {projectData.subtitle}
                                </h2>
                            )}

                            {/* Tags */}
                            {projectData.tags && projectData.tags.length > 0 && (
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {projectData.tags.map((tag, index) => (
                                        <span 
                                            key={index}
                                            className="px-3 py-1 rounded-full text-sm font-semibold"
                                            style={{ 
                                                backgroundColor: isDark ? 'rgba(100, 100, 255, 0.3)' : 'rgba(100, 100, 255, 0.2)',
                                                color: colors.textPrimary
                                            }}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {/* Project Links */}
                            {(projectData.githubUrl || projectData.liveUrl || projectData.links) && (
                                <div className="flex flex-wrap gap-4 mt-6">
                                    {projectData.githubUrl && (
                                        <a
                                            href={projectData.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all hover:-translate-y-1"
                                            style={{ 
                                                backgroundColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                                                color: colors.textPrimary
                                            }}
                                        >
                                            GitHub <ArrowOutwardIcon />
                                        </a>
                                    )}
                                    {projectData.liveUrl && (
                                        <a
                                            href={projectData.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all hover:-translate-y-1"
                                            style={{ 
                                                backgroundColor: isDark ? 'rgba(100, 200, 100, 0.2)' : 'rgba(100, 200, 100, 0.3)',
                                                color: colors.textPrimary
                                            }}
                                        >
                                            Live Demo <ArrowOutwardIcon />
                                        </a>
                                    )}
                                    {projectData.links && projectData.links.map((link, index) => (
                                        <a
                                            key={index}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all hover:-translate-y-1"
                                            style={{ 
                                                backgroundColor: isDark ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
                                                color: colors.textPrimary
                                            }}
                                        >
                                            {link.label} <ArrowOutwardIcon />
                                        </a>
                                    ))}
                                </div>
                            )}
                        </Paper>

                        {/* Main Image */}
                        {projectData.mainImage && (
                            <Paper elevation={3} className="p-4 rounded-lg mb-6 max-w-md mx-auto" style={{ backgroundColor: colors.paperBg }}>
                                <div 
                                    className="overflow-hidden rounded-lg cursor-pointer transition-transform hover:scale-105" 
                                    style={{ height: '300px' }}
                                    onClick={() => setLightboxImage(projectData.mainImage)}
                                >
                                    <img 
                                        src={projectData.mainImage} 
                                        alt={`${projectData.title} preview`}
                                        className="w-full h-full object-cover rounded-lg"
                                    />
                                </div>
                            </Paper>
                        )}

                        {/* Description Sections */}
                        {projectData.sections && projectData.sections.map((section, index) => (
                            <Paper 
                                key={index}
                                elevation={3} 
                                className="p-8 rounded-lg mb-6" 
                                style={{ backgroundColor: colors.paperBg }}
                            >
                                {section.title && (
                                    <h2 className="text-3xl font-bold mb-4" style={{ color: colors.textPrimary }}>
                                        {section.title}
                                    </h2>
                                )}
                                
                                <div className="text-xl leading-8" style={{ color: colors.textSecondary }}>
                                    {section.content}
                                </div>

                                {/* Section Images */}
                                {section.images && section.images.length > 0 && (
                                    <div className={`grid gap-4 mt-6 ${section.images.length === 1 ? 'grid-cols-1 max-w-md mx-auto' : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-4'}`}>
                                        {section.images.map((img, imgIndex) => (
                                            <div 
                                                key={imgIndex}
                                                className="rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-105"
                                                style={{ height: '250px' }}
                                                onClick={() => setLightboxImage(img)}
                                            >
                                                <img 
                                                    src={img} 
                                                    alt={`${section.title || 'Section'} image ${imgIndex + 1}`}
                                                    className="w-full h-full object-cover rounded-lg"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </Paper>
                        ))}

                        {/* Technologies Used */}
                        {projectData.technologies && projectData.technologies.length > 0 && (
                            <Paper elevation={3} className="p-8 rounded-lg mb-6" style={{ backgroundColor: colors.paperBg }}>
                                <h2 className="text-3xl font-bold mb-4" style={{ color: colors.textPrimary }}>
                                    Technologies Used
                                </h2>
                                <div className="flex flex-wrap gap-3">
                                    {projectData.technologies.map((tech, index) => (
                                        <span 
                                            key={index}
                                            className="px-4 py-2 rounded-lg text-lg font-semibold"
                                            style={{ 
                                                backgroundColor: isDark ? 'rgba(255, 200, 100, 0.2)' : 'rgba(255, 200, 100, 0.3)',
                                                color: colors.textPrimary
                                            }}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </Paper>
                        )}
                    </div>
                </div>

                <div className="px-10 pb-10">
                    <Links isDark={isDark} />
                </div>
                <LightSwitch />
            </div>
        </>
    );
}