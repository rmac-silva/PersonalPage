import ProjectTemplate from './ProjectTemplate';

export default function BlazyBot() {
    const projectData = {
        title: "Blazy Bot",
        subtitle: "A Complete RPG Inside Discord",
        tags: ["Discord Bot",  "Python","RPG", "Game Development",],
        githubUrl: "https://github.com/rmac-silva/blazy-bot",
        // liveUrl: "https://your-demo-url.com", // Optional
        
        
        sections: [
            {
                title: "Overview",
                content: (
                    <>
                        <p className="mb-3">
                            Blazy Bot is a discord bot I developed after needing a system for voting on who would win Eurovision that year between my friends. And somehow that shifted into a very hopeful conversation between myself and one of my friends (<i>who has a great mind for game design and an exceptional creativity</i>).
                            The idea was, "What if we had an idle game inside Discord, but make it an RPG where you can fight monsters and level up...".
                        </p>
                        <p className="mb-3">
                            And so there I went, fueled by this brand new idea I got started on learning how to use Discord's python library for making a bot, and after testing out a few things for a few days and learning the 
                            overall structure around discord's API, I started working on the core systems of the bot.
                        </p>
                        <p className="mb-3">
                            The bot in its current state allows you to go on delves with your character. It features three different zones you can explore, each with their own set of monsters and special events that can ocur during your exploration.
                            As you defeat monsters and complete events you earn experience which you can use to level up your character, increasing your stats (STR, DEX, INT, CON) which influence
                            not only your health and damage, but also the type of equipment you can use.
                        </p>
                    </>
                ),
                images: ["/projects/blazy-bot/EarlyDev.png","/projects/blazy-bot/EarlyInventory.png", "/projects/blazy-bot/EarlyStatsPanel.png"] // Optional
            },
            {
                title: "Combat",
                content: (
                    <>
                    <p>
                        This is where it all started. I developed a turn-based combat system where players would face off against monsters in a series of turns. 
                        Each turn the player attacked and then the monster, simple as that!
                    </p>
                    <p>
                        To select which monsters would appear I created a system that handled selecting the next opponent (which would then later include bosses and events).
                        This system allows a developer or designer to define which monsters appear for a given zone, and with which probabilities (all through editing a .csv).
                        This way, adding new monsters or tweaking existing ones is as simple as updating a spreadsheet.
                    </p>
                    </>
                ),
                images: [
                    "/projects/blazy-bot/FinishedFightPanel.png",
                    
                ]
            },
            {
                title: "Technical Challenges",
                content: (
                    <>
                        <p className="mb-3">
                            One of the biggest challenges was managing state across multiple servers and ensuring data consistency. We implemented a robust database system using MongoDB to handle player data, and built a caching layer to improve response times.
                        </p>
                        <p className="mb-3">
                            Another interesting challenge was designing combat mechanics that felt engaging despite being turn-based and text-only. We used Discord's reaction system and slash commands to create an interactive experience.
                        </p>
                    </>
                )
            }
        ],

        technologies: [
            "Python",
            "Discord.py (Lib)",
            "Sqlite3",
        ],

        // Optional: additional custom links
        links: [
            
        ]
    };

    return <ProjectTemplate projectData={projectData} />;
}