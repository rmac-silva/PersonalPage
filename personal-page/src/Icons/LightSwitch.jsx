import { useEffect, useState, useRef } from "react";
import "./LightSwitch.css";
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';

export default function LightSwitch() {
    const [pulling, setPulling] = useState(false);
    const [dark, setDark] = useState(null); // null = loading
    const audioRef = useRef(null);

    // Load saved theme on mount only
    useEffect(() => {
        const saved = localStorage.getItem('theme');
        setDark(saved === 'dark');
        document.documentElement.setAttribute('data-theme', saved === 'dark' ? 'dark' : 'light');
        
        // Initialize audio
        audioRef.current = new Audio('/sounds/light-switch-click.wav');
        audioRef.current.volume = 0.2; // Adjust volume (0.0 to 1.0)
    }, []);

    // Update document when dark changes (skip if null/loading)
    useEffect(() => {
        if (dark === null) return;
        localStorage.setItem('theme', dark ? 'dark' : 'light');
        document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
    }, [dark]);

    const handlePull = () => {
        if (pulling || dark === null) return;

        setPulling(true);

        // Play click sound
        if (audioRef.current) {
            audioRef.current.currentTime = 0; // Reset to start in case it's still playing
            audioRef.current.play().catch(err => {
                console.log('Audio play failed:', err);
            });
        }

        // toggle theme at bottom of pull
        setTimeout(() => {
            setDark(d => !d);
        }, 200);

        // reset animation state
        setTimeout(() => {
            setPulling(false);
        }, 400);
    };

    return (
        <div
            className={`switch ${pulling ? "pulling" : ""} ${dark ? "text-white" : "dark"}`}
            onClick={handlePull}
            aria-label="Toggle theme"
            role="button"
        >
            <div className="cord">
                {/* Render multiple dots for the cord */}
                {Array.from({ length: 10 }).map((_, i) => (
                    <div key={i} className="cord-dot" />
                ))}
            </div>
            <div className="knob">
                <LightbulbOutlinedIcon sx={{ fontSize: 20, color: 'currentColor' }} />
            </div>
        </div>
    );
}
