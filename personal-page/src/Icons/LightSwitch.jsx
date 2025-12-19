import { useEffect, useState, useRef } from "react";
import "./LightSwitch.css";
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';

export default function LightSwitch({breakCallback, oldCallback, canBreak=false}) {
    const [pulling, setPulling] = useState(false);
    const[numberOfClicks, setNumberOfClicks] = useState(0);
    const[isBroken, setIsBroken] = useState(false);
    const [dark, setDark] = useState(null); // null = loading
    const [replacementKnobVisible, setReplacementKnobVisible] = useState(false);
    const [flyingAway, setFlyingAway] = useState(false);
    const audioRef = useRef(null);
    const maxClicksBeforeBreak = 3;
    
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

    // Show replacement knob after 3 seconds
    useEffect(() => {
        if (!isBroken) return;

        const timer = setTimeout(() => {
            setReplacementKnobVisible(true);
            setIsBroken(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, [isBroken]);

    const toggleOldMode = () => {
        console.log('Old mode toggled!');
        setPulling(true);

        

        
        // Dummy function - add your logic here if needed
        // reset animation state
        setTimeout(() => {
            setPulling(false);
            setFlyingAway(true);
        }, 400);
        
        oldCallback();
    };

    const handlePull = () => {
        if (pulling || dark === null || isBroken || replacementKnobVisible) return;

        setPulling(true);
        setNumberOfClicks(n => n + 1);
        // Play click sound
        if (audioRef.current) {
            audioRef.current.currentTime = 0; // Reset to start in case it's still playing
            audioRef.current.play().catch(err => {
                console.log('Audio play failed:', err);
            });
        }

        //Check if next click will break the lamp
        if(numberOfClicks+2 >= maxClicksBeforeBreak && canBreak && !replacementKnobVisible) {
            audioRef.current = new Audio('/sounds/light-switch-click-break.wav');
            audioRef.current.volume = 0.2; // Adjust volume (0.0 to 1.0)
        }

        // check for breakage
        if (numberOfClicks + 1 >= maxClicksBeforeBreak && canBreak && !replacementKnobVisible) {
            setIsBroken(true);
            setDark(true); // force dark mode on
            breakLamp();
            return; // don't reset pulling state
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

    function breakLamp() {
        // Knob snaps off and falls after reaching lowest point (400ms into pull animation)
        setTimeout(() => {
            setPulling(false);
        }, 100);
        breakCallback();

        // Reset audio to normal click sound
        audioRef.current = new Audio('/sounds/light-switch-click.wav');
        audioRef.current.volume = 0.2; // Adjust volume (0.0 to 1.0)
    }

    return (
        <div
            className={`switch ${flyingAway ? "flying-away" : pulling && isBroken ? "breaking" : pulling ? "pulling" : ""} ${dark ? "text-white" : "dark"} ${isBroken ? "cursor-default!" : ""}`}
            onClick={handlePull}
            aria-label="Toggle theme"
            role="button"
        >
            <div className={`cord ${isBroken ? 'cord-broken' : ''}`}>
                {/* Render multiple dots for the cord */}
                {Array.from({ length: 10 }).map((_, i) => (
                    <div key={i} className="cord-dot" />
                ))}
            </div>
            {!replacementKnobVisible && 
            (
            <div className={`knob ${isBroken ? 'falling' : ''}`}>
                <LightbulbOutlinedIcon sx={{ fontSize: 20, color: 'currentColor' }} />
            </div>)}

            {/* Replacement knob that appears after 3 seconds */}
            {replacementKnobVisible && (
                <div 
                    className=" replacement-knob "
                    onClick={(e) => {
                        e.stopPropagation();
                        toggleOldMode();
                    }}
                    aria-label="Toggle old mode"
                    role="button"
                >
                    <QuestionMarkIcon sx={{ fontSize: 20, color: 'currentColor' }} />
                </div>
            )}
        </div>
    );
}
