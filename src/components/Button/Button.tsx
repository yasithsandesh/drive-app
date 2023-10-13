import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import Styles from "~/components/Button/Button.module.css"

export default function Button({title}:Button){
return(
    <button className={Styles.btnlogin}>{title} {title=="Google"? <GoogleIcon/>: <GitHubIcon/>}</button>
)
}