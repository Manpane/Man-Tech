import { useState } from "react";
// import axios from 'axios';
const WebGames = (props) => {
    // const [games , setGames] = useState([]);
    const [games_div_class, setGamesDivClass] = useState("loading");
    // useEffect(()=>{
    //     axios.get('https://manoj9898.pythonanywhere.com/api/webgames').then(response => {
    //         console.log("Response : ",response);
    //     }).catch(error=>{
    //         console.log("Error : ",error);
    //     });
    // },[]);
    if (games_div_class===""){setGamesDivClass("loading");}
    return ( 
        <div className={"web-games-container "+games_div_class}>
            <div className="progress"></div>
            {/* {games?.map((game)=>(
                <a className="game-link" href={`localhost:5000/games/${game}.html`}>{game}</a>
            ))} */}
        </div>
     );
}
export default WebGames;