const AboutFeed = (props) => {
    return (  
        <div className="about-feed">
            <center>
                 <h2 className="about-header">About Me</h2>
                 <br/>
                 <p className="about-description">Hello there! My name is Manoj Neupane and I am a 18 year old guy who loves programming.
                    I enjoy creating applications and websites. I am from Nepal.
                </p>
                <p className="about-description" style={{fontSize:18}}>I created this website from scratch with <big>React</big> for front-end and <big>Python Flask</big> for backend. 
                </p>
                <h4 className="about-skills-header">My skills</h4>
                <div className="about-skills-container skills-programming-languages">
                    <div className="skill python"><a href="https://www.python.org/" target="_blank" >Python</a></div>
                    <div className="skill rd"><a href="https://www.java.com/en/" target="_blank">Java</a></div>
                    <div className="skill ylw"><a href="https://www.google.com/search?q=javascript" target="_blank">Javascript</a></div>
                    <div className="skill org"><a href="https://www.google.com/search?q=html" target="_blank">HTML</a></div>
                    <div className="skill lt_grn"><a href="https://www.google.com/search?q=css" target="_blank">CSS</a></div>
                    <div className="skill skbl"><a href="https://www.google.com/search?q=C%2FC%2B%2B" target="_blank">C/C++</a></div>
                    <div className="skill skbl"><a href="https://www.google.com/search?q=SQL" target="_blank">SQL</a></div>
                </div>
                <div className="about-skills-container skills-platforms">
                    <div className="skill"><a href="https://developer.android.com/" target="_blank">Android Development</a></div>
                    <div className="skill"><a href="https://www.google.com/search?q=web+development" target="_blank">Web Development</a></div>
                    <div className="skill"><a href="https://www.google.com/search?q=game+development" target="_blank">Game Development</a></div>
                    <br/>
                    <div className="skill"><a href="https://www.google.com/search?q=web+scrapping" target="_blank">Web Scraping</a></div>
                    <div className="skill"><a href="https://www.google.com/search?q=automation" target="_blank">Automtation</a></div>
                </div>
            </center>
        </div>
    );
}
 
export default AboutFeed;
