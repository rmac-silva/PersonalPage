import ProjectTemplate from './ProjectTemplate';
import './BlazyBot.css';
export default function MythrasPB() {


    const projectData = {
        title: "Mythras Point Buy",
        subtitle: "A Mythras Character Creation Tool",
        tags: ["Web Application", "React", "FastAPI", "Mythras", "Character Sheet"],
        githubUrl: "https://github.com/rmac-silva/MythrasPointBuy",

        // Add custom styles for <p> elements


        sections: [
            {
                title: "Overview",
                content: (
                    <>
                        <p>
                            Mythras Point Buy is a character creation tool for the Mythras RPG system. In Mythras characters are created through a point buy system, meaning players have a pool of 200 points to spend on skills and languages their character might now.
                        </p>
                        <p>
                            Doing this by hand got pretty confusing and tiresome, especially because Mythras splits the points into three different groups. And checking how many points you've spent on a specific skill got harder and harder as time goes by.
                        </p>
                        <p>
                            This got me to develop this tool, not only so I could help the small but excellent community of Mythras players, but also learn how to use something new (Qt) and get a bit of a refresher on a language I don't use that often (C++).
                        </p>
                    </>
                ),
                videos: [
                    {
                        url: "/projects/mythras-point-buy/Overview.mp4",
                        title: "Project Overview"
                    }
                ]

            },
            {
                title: "Details",
                content: (
                    <>
                        <p>
                            Without wanting to go into depth on how Mythras works, the requirements were pretty straightforward. The player needed 3 pools of points (Culture, Age and Profession), and they need to spend these points in succession, one after the other.
                        </p>
                        <p>
                            The player also needs to keep track of how many points they have left for each pool, and how many points (per pool) they have spent on each skill as these can change and be modified as the character gets developed throughout the process.
                        </p>
                        <p>
                            This resulted in a simple interface, with a quick toggle provided by Qt to switch between the pools. Players use a simple arrow to increase or decrease the points spent on each skill, and the interface keeps track of how many points they have left and how many they have spent on each skill.
                            I have also removed any restrictions like forcing the pools to stay positive, so people with custom rules can also use the tool (if they have 300 instead of 200 points).
                        </p>
                        <p>
                            Finally to support custom skills which vary between player professions I have added a simple system to export and import custom skills, allowing players to share their custom skill lists with each other.
                            This is done through a simple JSON file, which can be easily edited and shared. It is to note that this tool is not a complete solution for character creation, it just facilitates one of the many steps of the process.
                            I plan to do a full character sheet and creation in the future, riding off my other project, <a href="https://dev.blazy.uk/projects/dnd-yonder" target="_blank" rel="noopener noreferrer" className='font-semibold underline' >DnD Yonder</a>.
                        </p>
                        
                    </>
                ),
            },

        ],

        technologies: [
            "QT", "C++"
        ],

        // Optional: additional custom links
        links: [
            {
                label: "Download",
                url: "https://github.com/rmac-silva/MythrasPointBuy/releases/latest"
            }
        ]
    };

    return <ProjectTemplate projectData={projectData} />;
}