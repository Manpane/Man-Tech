import fb_logo from '../fb_logo.png';
import github_logo from '../github_logo.png';
import gmail_logo from '../gmail_logo.png';
const ContactFeed = () => {
    return ( 
        <div className="contact-feed-container">
            <center><h2>My Contacts</h2></center>
            <div className="contact-links">
                <center>
                <a id="contact-facebook" href="https://www.facebook.com/manoj.neupane.92167/" target="_blank" rel="noreferrer">
                    <img className="contact-facebook-img contact-img" src={fb_logo} alt="Facebook"/>
                </a>
                <a id="contact-github" href="https://github.com/Manpane/" target="_blank" rel="noreferrer">
                    <img className="contact-github-img contact-img" src={github_logo} alt="Github"/>
                </a>
                <a id="contact-gmail" href="mailto:manpane98@gmail.com" target="_blank" rel="noreferrer">
                    <img className="contact-gmail-img contact-img" src={gmail_logo} alt="gmail"/>
                </a>
                <h4>Thanks for visiting my website</h4>
                </center>
            </div>

        </div>
     );
}
 
export default ContactFeed;