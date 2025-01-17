const AboutFeed = (props) => {
    let age = new Date().getFullYear()-2003;
    return (  
        <div className="about-feed">
            <center>
                 <h2 className="about-header">About Me</h2>
                 <br/>
                 <p className="about-description">Hello there! My name is Manoj Neupane and I am a {age} year old guy who loves programming.
                    I enjoy creating applications and websites. I am from Nepal.
                </p>
                <p className="about-description" style={{fontSize:18}}>I created this website from scratch with <big>React</big> for front-end and <big>Python Flask</big> for backend. 
                </p>
                <h4 className="about-skills-header">My skills</h4>
                <div className="about-skills-container skills-programming-languages">
                    <div className="skill python"><a href="https://www.python.org/" rel="noreferrer" target="_blank" >Python</a></div>
                    <div className="skill rd"><a href="https://www.java.com/en/" rel="noreferrer" target="_blank">Java</a></div>
                    <div className="skill ylw"><a href="https://www.google.com/search?q=javascript" rel="noreferrer" target="_blank">Javascript</a></div>
                    <div className="skill org"><a href="https://www.google.com/search?q=html" rel="noreferrer" target="_blank">HTML</a></div>
                    <div className="skill lt_grn"><a href="https://www.google.com/search?q=css" rel="noreferrer" target="_blank">CSS</a></div>
                    <div className="skill skbl"><a href="https://www.google.com/search?q=C%2FC%2B%2B" rel="noreferrer" target="_blank">C/C++</a></div>
                    <div className="skill skbl"><a href="https://www.google.com/search?q=SQL" rel="noreferrer" target="_blank">SQL</a></div>
                </div>
                <div className="about-skills-container skills-platforms">
                    <div className="skill"><a href="https://developer.android.com/" rel="noreferrer" target="_blank">Android Development</a></div>
                    <div className="skill"><a href="https://www.google.com/search?q=web+development" rel="noreferrer" target="_blank">Web Development</a></div>
                    <div className="skill"><a href="https://www.google.com/search?q=game+development" rel="noreferrer" target="_blank">Game Development</a></div>
                    <br/>
                    <div className="skill"><a href="https://www.google.com/search?q=web+scrapping" rel="noreferrer" target="_blank">Web Scraping</a></div>
                    <div className="skill"><a href="https://www.google.com/search?q=automation" rel="noreferrer" target="_blank">Automtation</a></div>
                </div>
            </center>
        </div>
    );
}
 
export default AboutFeed;
