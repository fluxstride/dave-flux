import styles from './styles.module.css'
import TopBar from '../TopBar/index'
import SharedFile from "../sharedFile"
import json from "./json"



const SharedFiles = () => {
const files = json
  
  return ( 
    <div>
       <TopBar/>
       {files.map(file=>(<SharedFile file={file} key={file.id}/>))}
      
  
    </div>
  
)}
 
export default SharedFiles;
