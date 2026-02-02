import ProjectTemplate from './ProjectTemplate';
import './BlazyBot.css';
export default function VillageAlchemist() {


    const projectData = {
        title: "The Village Alchemist [WIP]",
        subtitle: "My currently work in progress submission to the Itch.io Portfolio Jam.",
        tags: ["Godot", "GDScript", "Cozy", "Story Driven", "Game Jam"],
        githubUrl: "https://github.com/rmac-silva/PortfolioBuilders52",

        // Add custom styles for <p> elements


        sections: [
            {
                title: "Overview",
                content: (
                    <>
                        <p>
                            This is my current work in progress submission to the Itch.io Portfolio Jam.
                            The game is a cozy, story-driven experience developed using Godot and GDScript.
                            Players are put in the role of a newly appointed village alchemist, tasked with brewing potions to help townsfolk with their problems.
                            The potions can have diverse effects, which can either help or worsen the situation, impacting relationships and reputation in the village.
                        </p>
                        <p>
                            NPCs will walk into your shop with various requests, from people who fell down a well to people who just want to regrow their hair. Your task is
                            to use your workshop and available ingredients to brew potions that can address these issues. However you have to be precise in your brewing,
                            as potions can have unintended consequences if they have harmful effects.
                        </p>
                        <p>
                            The game features pixel art graphics, a dynamic potion crafting system, different outcomes for each NPC request (based on the potion brewed),
                            and a reputation system that tracks the player's standing in the village (which may bring shady characters later on, or more noble requests).
                        </p>
                        <p>
                            The game was developed as part of the Itch.io Portfolio Jam, with the theme of "secret ingredient". The game engine this time around was Godot,
                            which was a great learning experience for me as I had only used Unity before. As per usual all the artwork was designed through blockbench, using Trello
                            to keep track of tasks and features to implement, audio files needed or visual assets that were needed.
                        </p>
                    </>
                ),

            },
            {
                title: "WIP",
                content: (
                    <>
                        <p>
                            More will be written as this game is developed! As I rather finish everything before documenting it here, as features may change or be cut. This jam
                            submission was delayed mostly due to the weather storm that ocurred in Portugal that destroyed part of the region of Leiria.
                        </p>
                    </>
                ),

            },

        ],

        technologies: [
            "Godot",
            "GDScript",
            "Blockbench",
            "Trello",
            "Game Development",
            "Game Jam",
        ],

        // Optional: additional custom links
        links: [

        ]
    };

    return <ProjectTemplate projectData={projectData} />;
}