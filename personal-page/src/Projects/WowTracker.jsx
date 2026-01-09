import ProjectTemplate from './ProjectTemplate';
import './BlazyBot.css';
export default function ThesisProject() {


    const projectData = {
        title: "WoW Body Tracker",
        subtitle: "A python application that uses computer vision to track your body movements, allowing you to play World of Warcraft using your body as a controller.",
        tags: ["Python", "Computer Vision", "Mediapipe", "World of Warcraft"],
        githubUrl: "https://github.com/rmac-silva/WoWBodyTracking",

        // Add custom styles for <p> elements


        sections: [
            {
                title: "Overview",
                content: (
                    <>
                        <p>
                            This was just a small side-project I made to experiment with computer vision, inspired heavily by <a href='https://store.steampowered.com/app/1285430/The_Link/' className='border-b-2'>The Link</a>, a released application on Steam that allows 
                            you to map poses to key inputs. My own version was much more straightforward with no UI, just the OpenCV window showing the webcam and a couple of 
                            shortcuts for saving poses.
                        </p>
                        <p>
                            The poses would then be saved as a JSON file containing the coordinates of the key body landmarks detected by Mediapipe and the corresponding key input the user 
                            could define. During runtime, the application would continuously check the webcam feed for poses matching the saved ones, and when a match was found, it would simulate the key press using the
                        </p>
                        <p>
                            <h1 className='font-semibold text-3xl pb-2'>Issues</h1>
                            As I mentioned this was a really quick side-project, mostly to test out the MediaPipe library since I was looking for better options for my own thesis (that also used computer vision).
                            As such I quickly found out that pose matching is quite awful, if you have two poses that are similar you'll constantly get mis-inputs or false positives, forcing 
                            the user to configure each pose with the accuracy threshold and test it out multiple times.
                            Finally the lack of UI made it very unintuitive to use, as you had to remember all the keyboard shortcuts to save poses, start/stop the tracking.
                        </p>
                        <p>
                            <h1 className='font-semibold text-3xl pb-2'>Successes?</h1>
                            Overall this project worked fine, allowing me to play around and more importantly learn new stuff. I was able to get the script to track the user's 
                            feet, allowing you to walk in real life to move your character forward in WoW.
                            It also worked quite well with few poses (around 2-3) or if they were distinct enough (around 4-5).
                            It served it's purpose to learn a bit of OpenCV and more importantly how MediaPipe was organized.
                            Sadly I don't have any images, but I will maybe one day record a video of it slightly working.
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