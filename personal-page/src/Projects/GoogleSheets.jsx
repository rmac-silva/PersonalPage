import ProjectTemplate from './ProjectTemplate';
import './BlazyBot.css';
export default function SheetsWrapper() {


    const projectData = {
        title: "Google Sheets Wrapper",
        subtitle: "A python wrapper around the Google Sheets API to simplify interactions with Google Sheets.",
        tags: ["Python", "Google Sheets", "API", "Wrapper"],
        githubUrl: "https://github.com/rmac-silva/API-Wrappers",

        // Add custom styles for <p> elements


        sections: [
            {
                title: "Overview",
                content: (
                    <>
                        <p>
                            This is just another small side-project I made to simplify my interactions with Google Sheets through Python.
                            I was developing a Telegram bot through python where I had to manipulate Google Sheets. So as I developed functions to faciliate this 
                            interaction I thought I might as well host it here in case I ever need to find it again. This also hopefully demonstrates that I'm always 
                            looking to explore new stuff, no matter how small.
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