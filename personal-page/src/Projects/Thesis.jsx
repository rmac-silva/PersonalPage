import ProjectTemplate from './ProjectTemplate';
import './BlazyBot.css';
export default function ThesisProject() {


    const projectData = {
        title: "Thesis Project",
        subtitle: "My thesis project, involving a conversational agent helping you modify the game parameters through dialog and conversation. A Unity plugin is available in the GitHub link below.",
        tags: ["Unity", "C#", "Python", "FastAPI", "Conversational AI", "Multi-Modal"],
        githubUrl: "https://github.com/rmac-silva/UnityWebInterface",

        // Add custom styles for <p> elements


        sections: [
            {
                title: "Overview",
                content: (
                    <>
                        <p>
                            This was the project associated with my thesis dissertation. It involved a Unity game where users had to dodge sawblades and pick up collectibles.
                            Within the game, a conversational agent (AI) would help users modify game parameters through dialog and conversation, making the game more difficult or easier.
                            Additionally I developed a research platform that ran in a separate webapp that would allow a researcher to monitor and control the conversational agent's actions and behaviors.
                        </p>
                        <p>
                            This project involved three main components: the Unity game, the conversational agent and a research interface to monitor and control the conversational agent's actions and behaviors. 
                        </p>
                    </>
                ),
                images: [
                    
                         "/projects/thesis/GesturePressOne.png",
                         "/projects/thesis/GameIntermission.png",
                         "/projects/thesis/GesturePressTwo.png",
                    
                ],
            },
            {
                title:"Unity Game",
                content:(
                    <>
                        <p>
                            The Unity game went through three main iterations. Initially the thesis consisted of a fitness assistant that would help users exercise, correcting
                            form and counting repetitions of exercises. This however was unstable and hard to track, and overall not very fun (or served much of a purpose).
                        </p>
                        <p>
                            The second iteration (that was also featured in the university's open day) was a game where the user had to punch a virtual boxing bag,
                            using MediaPipe to track the user's hand. The game measured how fast the user reacted and provided a score based on the reaction time.
                            This came to reinforce that pose matching was unstable across different users (mostly height differences).
                        </p>
                        <p>
                            The final iteration was the sawblade dodging game, where the user had to physically move around the room to dodge sawblades and pick up collectibles.
                            This allowed for a fun engaging experience while still promoting a bit of exercise by having the user crouch and lay down. 
                            The obstacles were also parameterized to allow for difficulty adjustments, specifically dynamic difficulty adjustments.
                        </p>
                        <p>
                            <h1 className='font-semibold text-3xl pb-2'>Sawblade Game</h1>
                            To make the game more engaging and interesting I had to design several patterns of sawblades that would challenge the user in different ways, forcing him 
                            to move to different positions on the screen. To achieve that I developed a Unity editor tool that would allow me to setup sawblade patterns in a flexible way, 
                            allowing me to specify the spawn points of sawblades and their travel directions (as well as other parameters).
                            <br></br>
                            This meant that each level could have different patterns and adding new ones was easy and fast. To complement the challenge I added
                            collectibles that would force the user to move a specific body part (knee, elbow, foot, hand...) to a point on the screen, making the user take risks 
                            to pick up the collectibles.
                        </p>
                        <p>
                            Overall the game turned out to be fun and engaging, and served quite well for the purpose of the thesis since all patterns of sawblades were parameterized and could 
                            be adjusted in terms of difficulty easily.
                            I just wish I had more time to add a fixed pattern, that would block a section of the screen for a fixed duration. I would also have liked to have balanced the 
                            game a bit more with more user testing, as most users found the game quite easy and had to max out the difficulty settings to find a challenge.
                        </p>
                    </>
                ),
                images: [
                    "/projects/thesis/ThesisHome.png",
                ]
            },
            {
                title:"Conversational Agent",
                content:(
                    <>
                        <p>
                            <h1 className='font-semibold text-3xl pb-2'>Placebo Effect</h1>
                        Part of this thesis was focused on testing whether users noticed if a conversational agent (tasked with customizing the game's difficulty) made ficticious changes while still 
                        providing feedback and explanations. This means that the user would ask to reduce the size of sawblades, the agent would confirm and reply "Sure thing, I've chenged the size of the sawblades to be smaller",
                        but in reality it would perform a random change (or no change at all). In the end our user study concluded that users did not notice these ficticious changes, when compared to agents that 
                        actually made the changes they requested.  
                        </p>
                        <p>
                            <h1 className='font-semibold text-3xl pb-2'>Proactivity</h1>
                        Another aspect of the conversational agent that was tested was proactivity. The agent would monitor the user's performance and make proactive suggestions to adjust the game's difficulty.
                        This was achieved by sending the user score and performance through an HTTP endpoint to the backend. There the agent (LLM) would analyze the performance and decide on changes to 
                        perform or suggestions to make. The agent would then proactivelly message the user in-game with suggestions to change the difficulty.
                        </p>
                        <p>
                            Overall the conversational agent was quite successful and provided a fun and easy way for users to modify the game's difficulty without requiring any menus or interfaces.
                            The proactivity as well helped users who were more passive (maybe they were shy or just didn't want to take initiative to change the difficulty) to have a more engaging 
                            experience and trying out different difficulty settings.
                            It also helped users discover modifications they wouldn't have thought of otherwise, simplifying the method and process of changing game parameters.
                        </p>
                    </>
                ),
                images: [
                    "/projects/thesis/GameIntermission.png",
                ]
            },
            {
                title:"Wizard of Oz",
                content:(
                    <>
                        <p>
                            <h1 className='font-semibold text-3xl pb-2'>Research Interface</h1>
                        The final component of this thesis project was the research interface, a webapp developed with NiceGUI in Python 
                        that would allow a researcher to monitor and control the conversational agent's actions and behaviors. This interface would connect to the Unity game through HTTP endpoints,
                        receiving real-time data about the user's performance and the agent's actions.
                        </p>
                        <p>
                            The inter face allowed the researcher to see the current state of the game, the user's score as well as a live webcam feed 
                            of the user playing the game. Additionally since LLMs are not reliable and can sometimes produce unexpected or undesired outputs, the interface allowed the researcher to
                            approve or reject the agent's proposed changes before they were sent to the game. This ensured that the agent's actions were always aligned with the research goals and 
                            provided a safety net against any potential issues with the LLM.
                        </p>
                        <p>
                            The implementation itself was quite straightforward although quite complex, the communication was based on a pattern of HTTP requests to exchange information 
                            about the game state, dialog between user and agent as well as sending messages and modifications over to Unity. This was all logged in log files 
                            for later analysis and studying the user behavior and conversation.
                        </p>
                    </>
                ),
                images: [
                    "/projects/thesis/WizardInterface.png",
                ]
            },
            
        ],

        technologies: [
            "Unity",
            "C#",
            "Python",
            "NiceGUI",
            "ChatGPT",
            "Claude",
            "Multi-Modal",
        ],

        // Optional: additional custom links
        links: [

        ]
    };

    return <ProjectTemplate projectData={projectData} />;
}