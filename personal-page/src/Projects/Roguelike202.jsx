import ProjectTemplate from './ProjectTemplate';
import './BlazyBot.css';
export default function Roguelike202() {


    const projectData = {
        title: "Roguelike202 - Itch.io/Minijam202",
        subtitle: "My submission to the Itch.io Minijam 202 for January 2026. The theme was Power-up with the limitation being 'Extremely Overpowered'. As such I developed a small roguelike RPG focused on breaking the game and getting the player stats as high as possible through flat and multiplicative stat buffs and items.",
        tags: ["Unity", "C#", "Roguelike", "Game Jam"],
        githubUrl: "",
        liveUrl: "https://gilbio.itch.io/roguelike202",

        // Add custom styles for <p> elements


        sections: [
            {
                title: "Game",
                content: (
                    <>
                        <div className='justify-center flex'>
                            <iframe src="https://itch.io/embed-upload/16183755?color=333333" allowFullScreen="" width="980" height="640"><a href="https://gilbio.itch.io/roguelike202">Play Roguelike202 on itch.io</a></iframe>
                        </div>
                        <div className='flex flex-col justify-center items-center mt-4 mb-4'>

                        </div>
                        <div className='justify-center flex font-semibold text-2xl'>Controls<br></br>
                        </div>
                        <div className='justify-center flex'>

                            <ul className='list-disc ml-6'>
                                <li>WASD / Arrow Keys: Move</li>
                                <li>Spacebar / Enter: Attack</li>
                                <li>E: Interact with Shrines and Shop</li>
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
                            This was my submission to the 72hr Itch.io Minijam 202. Since the theme was power-up I went with
                            the idea of a roguelike RPG with the goal of exploring a 'dungeon' getting as powerful as possible.
                        </p>
                        <p>
                            The core loop is simple, move around the dungeon, exploring rooms. Each room may contain enemies, points of interest (PoI)
                            that can heal you, duplicate your stats, shops that sell items... With each floor descended (through the hatch)
                            the enemies get stronger, so your goal is to outscale the player through items and stat buffs.
                        </p>
                        <p>
                            The game was built in Unity with C#. All art assets were created by me and some friends using Blockbench.
                            The music was created by a friend using Beepbox as a simple loop that to be honest either gets annoying really
                            fast and or gets stuck in your head forever.
                        </p>
                    </>
                ),
                images: [
                    "/projects/roguelike202-jam/Roguelike202Gameplay1.png",
                    "/projects/roguelike202-jam/Roguelike202Gameplay2.png",
                    "/projects/roguelike202-jam/Roguelike202Gameplay3.png",
                ]
            },
            {
                title: "Implementation Details",
                content: (
                    <>
                        <p>
                            <p className='font-bold text-2xl'>Terrain Generation</p>
                            The dungeon is generated using a 4x4 grid of rooms. We first assign a starting room 
                            (where the player spawns) and we start from there.
                        </p>
                        <p>
                            The start tile has a 100% chance to generate the first adjacent room, then 75% to generate a second connecting, then 50% then 25%.
                            This ensures the dungeon is likely to spread outward from the start tile (since it will have two connections).
                            Then it enters a recursive loop, where for each newly created room it attempts to create a new adjacent room according to its own internal rules.
                        </p>
                        <p>
                            When the recursive loop ends the generation stops we need to generate the rooms (we have 
                            probabilities for each room type, with minimums and maximums of each type).
                            However we need to ensure there are enough rooms generated to satisfy the minimums (eg. at least 1 shop, at least 1 PoI, at least 2 enemy rooms).
                            If the minimums are not satisfied we create more rooms until they are.
                        </p>
                        <p>
                            We do this by randomly selecting a tile and restarting the recursive function from there. It will 
                            then restart the process, checking the adjacent tiles and trying to create new rooms until the minimums are satisfied.
                        </p>
                        <p>
                            <p className='font-bold text-2xl'>Tile Attribution</p>
                            Having generated the map, now we need to assign tiles to each room. Each tile type (enemy, shop, shrines) have a preset chance 
                            which can be quickly modified through the Unity inspector for balancing purposes.
                            We randomly select a tile type according to these probabilities and assign it to the room.
                            Then its the room itself (the prefab) that handles its own initialization and further randomization.
                        </p>
                    </>
                ),
            },
            {
                title: "Takeaways",
                content: (
                    <>
                        <p>
                            <p className='font-bold text-2xl'>The Good</p>
                            A 72hr period is a very short time for game development, however I was quite happy how the project turned out. The core 
                            gameplay loop turned out challenging but still playable, with enough variety that you can experience some different runs.
                            The procedural generation worked well, and was parameterizable enough that it made game balancing easier.
                            The items were also configured in a way that it was easy to add new stuff and tweak existing ones.
                        </p>
                        <p>
                            <p className='font-bold text-2xl'>The Bad</p>
                            I definitely underestimated how long the project would take (as always) and I ended up struggling to implement the later features properly.
                            This led to some questionable code quality that I am not proud of, but given the time constraints I had to make do.
                            Additionally I would have liked to have more time reserved for UI and overall feedback to the player. I found it became quite hard 
                            for players to understand what items did what, what equipment they had and overall how stat changes were performed. An interesting idea would be having a log,
                            showing all the calculations done to achieve the final value, or a tooltip explaining the calculations! This would ensure transparency and feedback.
                        </p>
                        <p>
                            Overall I am happy with how the project turned out, and had a great time doing it!
                        </p>
                    </>
                ),
            }

        ],

        technologies: [
            "Unity",
            "C#",
            "Blockbench",
            "Roguelike",
            "Game Jam",
        ],

        // Optional: additional custom links
        links: [

        ]
    };

    return <ProjectTemplate projectData={projectData} />;
}