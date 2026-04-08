import ProjectTemplate from './ProjectTemplate';
import './BlazyBot.css';
import { useState, useEffect } from 'react';

export default function StS2Mod() {
    const [isDark, setIsDark] = useState(false);

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

    const projectData = {
        title: "Slay The Spire 2 - Relic Tracker Mod",
        subtitle: "A mod for the newly released Slay The Spire 2, that shows detailed stats on the relics you have collected.",
        tags: ["Godot", "C#", "Modding", "Harmony"],
        githubUrl: "https://github.com/rmac-silva/RelicTracker",

        // Add custom styles for <p> elements


        sections: [
            {
                title: "Overview",
                content: (
                    <>
                        The mod was developed shortly after the release of Slay The Spire 2, with the goal of recreating the mod from the prequel game.
                        The goal of the mod was to provide more insight into the usefulness of relics, as well as serve as a learning project on how
                        to patch games using <b>Harmony</b>.
                        For example, if a relic like 'Strike Dummy' increases the damage of all Strike cards by 3, the mod can then track the overall damage
                        increased by said relic, from the moment you pick it up. This allows players to have a fun and informative insight into their relics, at least I like
                        to believe statistics are fun in games. The mod is still in development as the game features 270~ relics, with diverging behaviors.
                    </>
                ),
                images: [
                    {
                        url: '/projects/sts2mod/Overview.png',
                        title: 'The mod in action, showing the stats tracked for the relic "Mercury Hourglass"'
                    }
                ],
                videos: [
                    {
                        url: '/projects/sts2mod/Overview.mp4',
                        title: 'Overview of the mod in action, showing the stats tracked multiple relics.'
                    }
                ]

            },
            {
                title: "Implementation",
                content: (
                    <>
                        <p className='text-2xl font-bold mt-6'>Patching the Hover Tooltip</p>
                        The first step of the implementation was to patch the hover tooltip of relics, which is where I display the stats. This was done by creating a Harmony postfix patch on the function that creates the tooltip.
                        It proved difficult to <i>HoverTip</i> class which is responsible for showing the tooltips. It contains a description text that I needed to modify. I ended up doing this through reflection, manually setting the field to my custom text.

                        <p className='text-2xl font-bold'>Custom Relic Patching</p>
                        So relics with custom behaviors like dealing 3 damage to all enemies, upgrading powers or skills when obtained, require manual Harmony patches.
                        This means that based on the functions called by each relic, I have to create custom patches and additional scripts and logic to track their specific stats.

                        <p className='text-2xl font-bold mt-6'>General Relic Patching</p>
                        For relics that have more standard behaviors like granting you 1 Dexterity at the start of each combat, I created a system where I can simply
                        specify the name of the relic, and a custom text to display. For example, 'Oddly Smooth Stone' triggers at the start of each combat to provide you with 1 extra Dexterity.
                        I can then simply create an entry in my dictionary such as:<br></br>
                        <code
                            className='p-2 rounded text-sm font-semibold text-left w-full block overflow-x-auto'
                            style={{
                                backgroundColor: isDark ? '#1a1a1a' : '#f5f5f5',
                                color: isDark ? '#ffffff' : '#000000'
                            }}
                        >
                            {`{ "ODDLY_SMOOTH_STONE" : new RelicLabelInfo("Gained [blue]{0}[/blue] [gold]Dexterity[/gold].", 1)}`}
                        </code>
                        The second argument of the RelicLabelInfo is just a multiplier for the stat, as some relics give 10 block at the start of combat, so I can just do <i>Times Triggered * Multiplier</i> to display the correct value.
                    </>
                ),
                images: [
                    {
                        url: '/projects/sts2mod/Detailed.png',
                        title: 'An example of the simpler generic relic patch, showcasing the simple "Times Triggered" stat'
                    }
                ],
                // videos: [
                //     {
                //         url: '/projects/sts2mod/Implementation.mp4',
                //         title: 'Overview of the mod in action, showing the stats tracked multiple relics.'
                //     }
                // ]
            }

        ],



        // Optional: additional custom links
        links: [{
            label: "Nexus Mods Page",
            url: "https://www.nexusmods.com/slaythespire2/mods/130",
        }

        ]
    };

    return <ProjectTemplate projectData={projectData} />;
}