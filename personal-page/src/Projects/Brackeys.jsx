import ProjectTemplate from './ProjectTemplate';
import './BlazyBot.css';
export default function BrackeysJam() {


    const projectData = {
        title: "Metal Detecting With Granny!",
        subtitle: "A gamejam submission that turned into a longer project than anticipated. Mostly due to the storms that hit Portugal during the early months of the year.",
        tags: ["Unity", "C#", "Exploration", "GameJam"],
        githubUrl: "https://github.com/rmac-silva/BrackeysGameJam",

       


        sections: [
            {
                title: "Game",
                content: (
                    <>
                        <div className='justify-center flex'>
                            <iframe src="https://itch.io/embed-upload/17085871?color=333333" allowFullScreen="" width="1280" height="740"><a href="https://gilbio.itch.io/roguelike202">Play Roguelike202 on itch.io</a></iframe>
                        </div>
                        <div className='flex flex-col justify-center items-center mt-4 mb-4'>

                        </div>
                        <div className='justify-center flex font-semibold text-2xl'>Controls<br></br>
                        </div>
                        <div className='justify-center flex'>

                            <ul className='list-disc ml-6'>
                                <li>WASD / Arrow Keys: Move</li>
                                <li>F: Interact with Granny</li>
                                <li>E: Pickup Objects</li>
                            </ul>
                        </div>
                    </>
                ),
                
            },
            {
                title: "Overview",
                content: (
                    <>
                    <p>
                    This game was originally set to be a one week gamejam, the one hosted by the Brackeys youtube channel.
                    The theme for the jam was strange places, and after a night of brainstorming me and my teammate arrived on the idea of
                    a strange beach where the player had to dig up items from the sand, using a metal detector. 
                    </p>
                    <p>
                        To add to the "strangeness" we also came up with the idea of having the player dance to dig up the items, because at least to me that's unexpected and strange at least when compared to normal digging mechanics in games.
                        This led to a short game where the player is at a beach with his Grandmother. The goal of the game was to metal detect items across the beach, turning them in to Granny for money and to progress the game.
                        The end goal was to escape the beach by building a raft, which required the player to find specific items such as a mast with a sail, a propellor and a hull for said raft.
                    </p>
                    </>
                    
                ),
                images: [
                    
                ],
                videos: [
                    { 
                        url: "/projects/brackeys/GameOverview.mp4", 
                        title: "Game Overview" 
                    }
                ]
            },
            {
                title: "Technologies (Digging)",
                content: (
                    <>
                    <p>
                    Due to the original restricted time frame of the project (1 week) we split up the workload at the beginning of the project, I dealt with the digging and Grandmother logic.
                    <p className='font-bold text-2xl mt-4 -mb-2'>Metal Detector</p>
                    The metal detector worked by knowing the position of every single item buried in the beach, managed by a <b>Scriptable Object</b> that acted as a manager for said items.
                    The scanner would constantly show blips on the metal detector's screen, showing the nearest items around the player (within a limited range).
                    To make it less annoying we allowed the player to buy upgrades, making the metal detector scan faster.
                    <p className='font-semibold text-2xl mt-4 -mb-2'>Extensibility</p>
                    Lately I've started to make an effort to make component reusable and extensible, and I find it a good exercise to look back at projects developed seeing spots where I can improve.
                    Staying specific to the Metal Detector component, it should be extensible enough, assuming the new project uses the same Scriptable Object to manage the items that are supposed to be found. 
                    It also uses a separate Scriptable Object to manage the settings of the metal detector, allowing any other script to modify them just by passing it as a reference.
                    So in conclusion, since the metal detector relies on Scriptable Objects to function, it should be easily reusable in other projects.
                    </p>
                    </>
                    
                ),
                images: [
                    // "/projects/roguelike202-jam/Roguelike202Gameplay1.png",
                    // "/projects/roguelike202-jam/Roguelike202Gameplay2.png",
                    {
                        url: "/projects/brackeys/RadarScreen.png",
                        title: "Metal Detector Radar Screen"
                    }
                ],
                videos: [
                    { 
                        url: "/projects/brackeys/RadarExample.mp4", 
                        title: "Metal Detector Radar Example" 
                    }
                ]
            },
            {
                title: "Technologies (Granny)",
                content: (
                    <>
                    <p>
                    <p className='font-bold text-2xl mt-4 -mb-2'>Granny - Item Selling and Upgrades</p>
                    The goal of the Granny was to mainly act as a shop originally, but ended up being the character that provides the player with feedback on what he's supposed to do.
                    She's where the player has to return to whenever they dig up an item, giving the player some money in return as well as some dialogue that hints when the player has progressed.
                    Finally it's also where the player could buy upgrades, improving the speed at which they scan objects in the sand, allowing them to complete the dancing minigame faster or just walk faster overall.
                    </p>
                    <p className='font-bold text-2xl mt-4 -mb-2'>Item Selling</p>
                    Whenever the player approached Granny with an item, the trigger box around her would detect said item. Prompting the player to press 'F' to sell the item.
                    If I could do it again I wouldn't use a trigger to detect the items, as it led to a lot of edge cases. Instead I would pass the responsibility to the player component,
                    that would know if the player is holding an item and if he's looking at Granny, prompting the same press 'F' to sell.
                    The money rewarded for the item was predetermined in the item data (Scriptable Object). And the money was transferred using a reference to the player's 'Wallet' using once again a Scriptable Object.
                    <p className='font-bold text-2xl mt-4 -mb-2'>Upgrades</p>
                    The player upgrades were pretty linear, allowing the player to make the game progress faster, allowing them to improve the character and giving some satisfaction of progression.
                    The upgrades were also implemented using a Scriptable object, where each item had a reference to the Upgrade Manager (Scriptable Object) and would register itself on the event callbacks.
                    For example, the Metal Detector would listen to 'OnMetalDetectorUpgrade' and given the tier of upgrade would then change the scanning speed for example.
                    
                    </>
                    
                ),
                images: [
                    {
                        url: "/projects/brackeys/Granny.png",
                        title: "Granny Blockbench Model"
                    }
                ],
                videos: [
                    { 
                        url: "/projects/brackeys/GrannySelling.mp4", 
                        title: "Granny Item Selling Example" 
                    },
                    { 
                        url: "/projects/brackeys/PlayerShop.mp4", 
                        title: "Player Shop Example" 
                    }
                ]
            },
            {
                title: "Technologies (Digging)",
                content: (
                    <>
                    
                    <p className='font-bold text-2xl mt-4 -mb-2'>Digging - Dancing & Input Management</p>
                    I'd like to start by crediting my teammate to developing the system that allowed the player to hit the arrow keys / WASD keys to 
                    match the codes that appeared on-screen. That system worked pretty well, and was easy enough to modify to adapt to the game's needs.
                    <br></br>
                    The dancing minigame is the core gameplay loop, where the player has to match the codes presented to them using their WASD keys.
                    The main goal was to simply fill the bar, digging up the item. The bar would passively decrease at a constant rate, and as the player correctly completed codes, the bar would fill up.
                    The longer the code, the more points it provided as well, so it would be somewhat balanced.
                    <br></br>Each item had a specific depth, which modified the difficulty of the minigame as well, so different items could present different challenges.
                    <p className='font-bold text-2xl mt-4 -mb-2'>Digging - Sounds & Animation</p>
                    The background 'chorus' was composed os 3 repeating notes, created to provide a back track to the minigame. The player itself by pressing the arrow keys would 
                    trigger different sound effects, allowing the player to make the music themselves in a way.
                    <br></br>
                    The player also had simple animations depending on which direction of arrow was pressed, these were made goofy on purpose to fit the overall theme of the game which was supposed to be developed in a week.
                    </>
                    
                ),
                images: [
                    // {
                    //     url: "/projects/brackeys/Granny.png",
                    //     title: "Granny Blockbench Model"
                    // }
                ],
                videos: [
                    { 
                        url: "/projects/brackeys/MinigameExample.mp4", 
                        title: "Minigame Example" 
                    }
                ]
            },
            {
                title: "Technologies (Inspecting)",
                content: (
                    <>
                    
                    <p className='font-bold text-2xl mt-4 -mb-2'>Item Inspecting</p>
                    
                    When the player finished inspecting the item, I wanted a way to provide feedback as to what they actually dug up. 
                    As such, whenever the player finishes digging up an item, the object is placed in front of them, allowing them to inspect it (rotate it around).
                    To provide the context & feedback to the player I added a field to each item data (Scriptable Object) that contained a description of the item, which was then shown on the UI when inspecting.
                    <p className='font-semibold text-2xl mt-4 -mb-2'>Extensibility</p>
                    This component was developed with future projects in mind. As such it is highly configurable (which keybinds to use, where to place the item in front of the camera...), it relies on events, allowing other scripts
                    to perform actions when the player starts inspecting (animations, showing text, soundFX). This led to a reusable
                    component that I can hopefully expand on, mimicking the feel and functionality of similar systems like in the Resident Evil Games originally.
                    
                    </>
                    
                ),
                images: [
                    // {
                    //     url: "/projects/brackeys/Granny.png",
                    //     title: "Granny Blockbench Model"
                    // }
                ],
                videos: [
                    { 
                        url: "/projects/brackeys/ItemInspection.mp4", 
                        title: "Item Inspection Example" 
                    }
                ]
            },
            {
                title: "Assets (Blockbench)",
                content: (
                    <>
                    
                    <p className='font-bold text-2xl mt-4 -mb-2'>Model Showcase</p>
                    
                   This project took a lot of 3D modeled assets, which were the main reason as to why the project took so long to develop.
                   All models were made in Blockbench with the exception of the terrain (sand and ocean) which were made in Blender.
                    
                    </>
                    
                ),
                images: [
                    {
                        url: "/projects/brackeys/CanOfBeans.png",
                        title: "Can of Beans"
                    },
                    {
                        url: "/projects/brackeys/MetalFoot.png",
                        title: "Metal Foot"
                    },
                    {
                        url: "/projects/brackeys/MetalCrab.png",
                        title: "Metal Crab"
                    },
                    {
                        url: "/projects/brackeys/ParkBench.png",
                        title: "Park Bench"
                    },
                    {
                        url: "/projects/brackeys/MetalCrate.png",
                        title: "Metal Crate"
                    },
                    {
                        url: "/projects/brackeys/MetalScrew.png",
                        title: "Metal Screw"
                    },
                    {
                        url: "/projects/brackeys/MetalDetector.png",
                        title: "Metal Detector"
                    },
                    {
                        url: "/projects/brackeys/EpsteinFiles.png",
                        title: "Epstein Files"
                    },
                    {
                        url: "/projects/brackeys/PlayerModel.png",
                        title: "Player Model"
                    },
                    {
                        url: "/projects/brackeys/PostalBox.png",
                        title: "Postal Box"
                    },
                    {
                        url: "/projects/brackeys/ShipMast.png",
                        title: "Ship Mast"
                    },
                ],
                videos: [
                    
                ]
            }

        ],

        technologies: [
            "Unity",
            "C#",
            "Unity Particle System",
            "Unity Animation System",
            "Tween Animation"

        ],

        // Optional: additional custom links
        links: [

        ]
    };

    return <ProjectTemplate projectData={projectData} />;
}