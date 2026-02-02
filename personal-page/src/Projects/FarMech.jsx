import ProjectTemplate from './ProjectTemplate';
import './BlazyBot.css';
export default function FarMech() {


    const projectData = {
        title: "Far-Mech [WIP]",
        subtitle: "This game serves as an overall learning platform for me to experiment with Unity. It is also that dream project that will most likely never see the light of day due to scope creep. The game is a hybrid between having your cozy farm with piloting a giant mech to help with chores or defend against creatures.",
        tags: ["Unity", "C#", "Learning", "Farming", "Mechs"],
        githubUrl: "https://github.com/rmac-silva/FarmingMechGame",

        // Add custom styles for <p> elements


        sections: [
            {
                title: "Overview",
                content: (
                    <>
                        <p>
                            This is my life-long "dream game", heavily inspired by an episode of Death Love & robots where the main characters defend their farms with these huge mechs, 
                            mowing through hordes of creatures. The game is a hybrid between having your cozy farm with piloting a giant mech to help with chores or defend against said creatures.
                        </p>
                        <p>
                            The game is still very much a work in progress, and serves as my main Unity learning platform. As such the game is not planned to be considered done anytime soon.
                            I am mostly taking it by parts, getting the farming system implemented and generic enough to easily expand upon. Then working on the enemy pathfinding (this is the current focus), moving onto
                            other aspects like learning more Photon Fusion, and the actual mechs.
                        </p>
                    </>
                ),
                
            },
            {
                title: "Farming System",
                content: (
                    <>
                        <p>
                            Starting with the basics, I wanted players to be able to farm something! So I first implemented a basic farming system, players planted seed, watered them, and harvested them for the actual crop.
                            This was a good exercise in how to setup proper data structures for the plants, managing their different growth phases, creating scriptable objects to represent different plants.
                            This component also involved a lot of separate systems, a money system to track player funds, to buy seeds and sell crops. An inventory system to manage seeds and crops that the player owns.
                            And finally a simple shop UI to allow players to perform the aforementioned actions.
                        </p>
                        <p>
                            With the basic system in place I later expanded it, mostly in terms of architecture, splitting the components more into separate modular scripts that are easier to manage.
                            I also added a day/night cycle, meaning plants now grow only during the daytime, and not at night.
                        </p>
                        <p>
                            <p className='font-bold text-2xl'>Future Plans</p>
                            Eventually I'd like to have different terrains affect the plant growth, have plants with more special properties like growing in the dark, or not needing to be replanted 
                            once they are harvested. But for now, and to prevent scope creep, this basic system will suffice.
                        </p>
                    </>
                ),
                
            },
            {
                title: "PCG Terrain (Scrapped)",
                content: (
                    <>
                        <p>
                            Originally I was going to develop a pcg terrain system using perlin noise, and pre-defined blocks to represent heights and different "biomes" (grass, rock, snowy rock).
                            However after a long time of experimentation and perfecting this pcg, I eventually scrapped it, mostly due to its appearance not being up to my standards, additionally I wanted to try
                            and keep the enemy pathfinding simple (Unity's Navmesh), which was proving difficult with the uneven terrain.
                        </p>
                    </>
                ),
                
            },
            {
                title: "WIP",
                content: (
                    <>
                        <p>
                            This section will get updates soon.
                        </p>
                    </>
                ),
                
            },
            
        ],

        technologies: [
            "Python",
            "Computer Vision",
            "Mediapipe",
            "World of Warcraft",
        ],

        // Optional: additional custom links
        links: [

        ]
    };

    return <ProjectTemplate projectData={projectData} />;
}