import Styles from "~/components/Button/Button.module.css"

export default function FileButton({title,setFileVisible,isFileVisible}:FileButton){
return(
    <button className={Styles.fileBtn} onClick={()=>{setFileVisible(!isFileVisible)}}>{title}</button>
)
}