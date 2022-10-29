import AboutFeed from "./AboutFeed";
import ContactFeed from "./ContactFeed";
import HomeFeed from "./HomeFeed";
import ProjectsFeed from "./ProjectsFeed";
import WebGames from "./WebGames";
import Download from "./Download";
import Websites from "./Websites";
const Feed = (props) => {
    const getCorrectFeed = function(){
        // props.onNavigationChanged(props.current);
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
        <script type="text/javascript">
            {
                atOptions = {
                    'key' : 'fbb76e8124928fd359f27a24ba71392b',
                    'format' : 'iframe',
                    'height' : 90,
                    'width' : 728,
                    'params' : {}
                };
                document.write('<scr' + 'ipt type="text/javascript" src="http' + (location.protocol === 'https:' ? 's' : '') + '://www.highperformancedisplayformat.com/fbb76e8124928fd359f27a24ba71392b/invoke.js"></scr' + 'ipt>');
            }
           </script>
            {getCorrectFeed()}
        </div>
    );
}
export default Feed;
