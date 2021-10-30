import axios from "axios";
import { useEffect, useState } from "react";

const Downloads = () => {
    const [files , setFiles] = useState([]);
    const [loadStatus, setLoadStatus] = useState("loading");
    useEffect(()=>{
        axios.get("/api/downloads").then(
            (response)=>{
                setFiles(response.data.files);
                console.log(response);
                setLoadStatus("loaded");
            }
        ).catch(error=>console.log(error))
    },[]);
    return ( 
        <center>
            <div className={"download-files-container "+loadStatus}>
                <div className="progress"/>
                <div className="games-list">
                {files?.map((file,index)=>(
                    <a className="game-link" key={index} href = {`https://manoj9898.pythonanywhere.com/python/${file}`}>{file}</a>
                ))}
                </div>
            </div>
        </center>
    );
}
 
export default Downloads;