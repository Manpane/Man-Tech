import {useEffect, useState } from "react";
import axios from 'axios';
const WebGames = () => {
    const [games , setGames] = useState([]);
    const [games_div_class, setGamesDivClass] = useState("loading");
    useEffect(()=>{
        axios.get('https://manoj9898.pythonanywhere.com/api/webgames').then(response => {
            console.log("Response : ",response);
            if (response){
                setGames(response.data.games);
                setGamesDivClass("loaded");
            }
        }).catch(error=>{
            console.log("Error : ",error);
        });
    },[]);
    return ( 
        <center>
            <div className={"web-games-container "+games_div_class}>
                <div className="progress"/>
                <div className="games-list">
                    {games?.map((game,index)=>(
                        <a key={index} className="game-link" href={`http://manoj9898.pythonanywhere.com/games/${game}.html`}>{game}</a>
                    ))}
                </div>
            </div>
        </center>
     );
}
export default WebGames;