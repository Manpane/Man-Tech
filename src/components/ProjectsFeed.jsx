const ProjectsFeed = (props) => {
    const handleProjectClicked = (current) => {
        props.onNavigationChanged(current);
    }
    return (  
        <center>
            <div className="projects-feed">
                <div className="projects-header projects-web-games" onClick={()=>{handleProjectClicked("web_games")}}>Web Games</div>
                <div className="projects-header projects-download" onClick={()=>{handleProjectClicked("downloads")}}>Downloads</div>
                <div className="projects-header projects-websites" onClick={()=>{handleProjectClicked("other_websites")}}>My other websites</div>
            </div>
        </center>
    );
}
export default ProjectsFeed;