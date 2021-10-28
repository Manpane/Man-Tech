import AboutFeed from "./AboutFeed";
import ContactFeed from "./ContactFeed";
import HomeFeed from "./HomeFeed";
import ProjectsFeed from "./ProjectsFeed";

const Feed = (props) => {
    const getCorrectFeed = function(){
        if (props.current==="home"){return <HomeFeed></HomeFeed>}
        if (props.current==="about"){return <AboutFeed></AboutFeed>}
        if (props.current==="contacts"){return <ContactFeed></ContactFeed>}
        if (props.current==="my_projects"){return <ProjectsFeed></ProjectsFeed>}
    }
    return (
        <div>
            {getCorrectFeed()}
        </div>
    );
}
export default Feed;