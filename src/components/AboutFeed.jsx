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
                    <div className="skill python">Python</div>
                    <div className="skill rd">Java</div>
                    <div className="skill ylw">Javascript</div>
                    <div className="skill org">HTML</div>
                    <div className="skill lt_grn">CSS</div>
                    <div className="skill skbl">C/C++</div>
                    <div className="skill skbl">SQL</div>
                </div>
                <div className="about-skills-container skills-platforms">
                    <div className="skill">Android Development</div>
                    <div className="skill">Web Development</div>
                    <div className="skill">Game Development</div>
                    <br/>
                    <div className="skill">Web Scraping</div>
                    <div className="skill">Automtation</div>
                </div>
            </center>
        </div>
    );
}
 
export default AboutFeed;