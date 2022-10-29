import AboutFeed from "./AboutFeed";
import ContactFeed from "./ContactFeed";
import HomeFeed from "./HomeFeed";
import ProjectsFeed from "./ProjectsFeed";
import WebGames from "./WebGames";
import Download from "./Download";
import Websites from "./Websites";
const Feed = (props) => {
    const getCorrectFeed = function(){
        if (props.current==="home"){return <HomeFeed/>}
        if (props.current==="about"){return <AboutFeed/>}
        if (props.current==="contacts"){return <ContactFeed/>}
        if (props.current==="my_projects"){return <ProjectsFeed onNavigationChanged={props.onNavigationChanged} />}
        if (props.current==="web_games"){return <WebGames onNavigationChanged={props.onNavigationChanged} />}
        if (props.current==="downloads"){return <Download onNavigationChanged={props.onNavigationChanged} />}
        if (props.current==="other_websites"){return <Websites onNavigationChanged={props.onNavigationChanged} />}

    }
    return (
        <div>
            
             {getCorrectFeed()}
        </div>
    );
}
export default Feed;
