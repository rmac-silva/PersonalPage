import ProjectTemplate from './ProjectTemplate';
import './BlazyBot.css';
export default function DnDYonder() {


    const projectData = {
        title: "DND Yonder",
        subtitle: "A D&D 5e Sheet Management Tool",
        tags: ["Web Application", "React", "FastAPI", "D&D", "Character Sheet"],
        githubUrl: "https://github.com/rmac-silva/dnd-yonder",
        liveUrl: "https://dndyonder.blazy.uk", // Optional

        // Add custom styles for <p> elements


        sections: [
            {
                title: "Overview",
                content: (
                    <>
                        <p>
                            This project was born out of a personal conflict I had for many years while playing D&D. Every single time we played, I would download my sheet to my laptop,
                            play an entire session, and then forget to re-upload the changed sheet. This would make me lose my character progress, forcing me to make stuff up or remember what it was I did two months ago.
                        </p>
                        <p>
                            So the main idea was just creating a web app, where the sheets would just always be there, stored. And by hosting it online (and free of course), I no longer had to worry about transferring files between devices.
                            And it also helped my friends as well, who suffered from the same issue.
                        </p>
                        <p>
                            Finally this project served as a great way to practice React JSX, FastAPI and web development in general. As it had been 
                            a bit since I last coded a web app, especially with React, so this was a great way to get back into it.
                        </p>
                    </>
                ),
                
            },
            {
                title: "Community Driven Database",
                content: (
                    <>
                        <p>
                            In websites that offer sheet management, they usually simplify the task of creating character sheets through a 
                            form that the user has to fill (selecting a race, class, etc...). 
                            This meant however that the website had to have these options pre-programmed into the app, all D&D races and classes, 
                            with their information hard coded into the backend or database.
                        </p>
                        <p>
                            An alternative approach I took with DnD Yonder is giving this "work" to the users of the app itself. Meaning that if you 
                            go to create a new character like a Barbarian, and it's not in the database, you, the player, can create the Barbarian class 
                            yourself, filling in all the information that defines the class.
                            This way, the database grows organically with the users, and I don't have to pre-program every single piece of information in D&D.
                        </p>
                    </>
                ),
                
            },
            {
                title: "Managing & Correction of Database Entries",
                content: (
                    <>
                        <p>
                            This whole idea of having a community driven database is not all sunshine and rainbows however.
                            Currently the system is designed to be used by a couple of my friends (however anyone can sign up and create a sheet).
                            People <b>will</b> make mistakes, no matter how well automated and constrained I made the system and forms for creating stuff.
                        </p>
                        <p>
                            This led to a need to manage what entries already exist, and correct mistakes that users make. For this I created 
                            an "Admin" page where I can see all the entries that exist in the database, and delete or edit them as needed.
                            Additionally, any addition is logged in the system, so I can see who added what and when, making it easier to reach out to users if needed.
                        </p>
                        <p>
                            This whole system of course relies on trust and the fact that there's 6 of us using this system. If this were used by a large community of people I would require
                            a more complete authentication (the system currently doesn't even use passwords). I would probably also add 
                            a voting system, where users can report incorrect entries, flagging the entry for editing. Or alternatively having community edits (<i>like a wikipedia page</i>).
                            But alas this is just a small project for me and my friends (<i>and possibly not entirely legal</i>), so this system suffices for now (you can however try it out!).
                        </p>
                    </>
                ),
                
            },
            {
                title: "Automation",
                content: (
                    <>
                        <p>
                            People are lazy (<i>at least my friends</i>), if I told them they had to go into the D&D sourcebook or wiki page, copy and paste information
                            they would tell me to pound sand. So I had to make it as easy as possible for them to add new entries to the database.
                        </p>
                        <p>
                            For this I created a system that automatically fetches information from D&D related websites, such as Wikidot (<i>and this is where it might get illegal?</i>).
                            Whenever you're creating a class or item (weapon, backpack, armor, etc...), you can just input the name of the item you're creating, hit the "Fetch from Wikidot" button, 
                            and automatically the information is filled in for you. You can then tweak or add missing information the scraper could not fill in.
                        </p>
                        <p>
                            This doesn't remove the human element, as some information is really hard to scrape (especially races) due to how certain pages are built.
                            The scraper itself is also available on GitHub (<i>soon™</i>) if you need it for any other project D&D related.
                        </p>
                    </>
                ),
                
            },
            {
                title: "The WikiDot Scraper",
                content: (
                    <>
                        <p>
                            This section will be just mostly details of the actual interesting part of this project (<i>for me</i>). I'm not trying to 
                            devalue the frontend and other backend work, it still took a few weeks but I just really enjoyed working on the scraper component of the website.
                        </p>
                        <p> 
                            The scraper is built using Python's BeautifulSoup4 library, which is great for parsing HTML documents. It all started with understanding how the WikiDot
                            page was structured, with every single entry (in classes) having a div with a specific ID, <code>toc-0</code> that would then increase into <code>toc-1</code>, <code>toc-2</code>, etc...
                        </p>
                        <p>
                            By segmenting the page into these sections I could create class features, that had a title and description of their content.
                            Some sections however were a bit more complex, in this case Subclass selection (it contained tables) and the initial sheet information (<i>which for those unfamiliar is stuff like starting HP, what armors you can use etc...</i>).                        
                        </p>
                        <p>
                            For these and with some python "jank" I was able to, in the case of the tables, extract the table headers, figure out how many rows and columns the table had. 
                            Then pass that information to the frontend where I built my own table component, that would render the information. Thinking back maybe I could've just scraped and sent the entire HTML table, but it made more sense to format it into 
                            another usable structure.
                        </p>
                        <p>
                            For the initial information section I used regex to extract specific information from the text (<i>also my first time properly using regex</i>), which was honestly 
                            quite easier than I expected (<i>props to the online regex editors</i>). With this information I once again cleaned them up a bit in python, and sent them to the frontend.
                        </p>
                        <p>
                            At the end of all this I had a way to parse basically all the information of any given DnD class from wikidot, collecting HP info, what weapons and armors they could use and
                            class features and what level they appeared at.
                        </p>
                        <p>
                            For items it was a bit more straightforward, WikiDot has a separate website for items with a much more dense and simple structure.
                            It was just a matter of identifying the structure for weapons, armors and other miscellaneous items, and extracting the information basically directly from
                            each field in the table.
                        </p>
                    </>
                ),
                
            },
        ],

        technologies: [
            "FastAPI (Python)",
            "React",
            "Javascript",
            "Sqlite3",
            "TailwindCSS + MUI",
            "Regex",
        ],

        // Optional: additional custom links
        links: [

        ]
    };

    return <ProjectTemplate projectData={projectData} />;
}