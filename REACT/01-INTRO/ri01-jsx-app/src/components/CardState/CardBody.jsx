import { useState } from "react"
import CardFooter from "./CardFooter"
import CardHeader from "./CardHeader"

export default function CardBody(){
    const styles = {
            cardStyle : {
                width : "15rem",
                border : "1px solid silver",
                borderRadius : "3px",
                padding : "3px",
                boxSizing : "border-box"
            },
            buttonStyle : {
                display:"block",
                padding : "5px",
                border : "1px solid silver",
                backgroundColor : "grey",
                borderRadius : "3px",
                width : "95%",
                margin : "0px auto",
                textDecoration : "none",
                textAlign : "center"
            }
        }
    const [follow,setFollow] = useState(0);

    function handleClick(){
      //setFollow(follow + 1);
      setFollow(prev => prev + 1)
    }
      return (
        <div style={styles.cardStyle}>
        <CardHeader handleClick={handleClick}/>
        <div >          
          <p >Description</p>
          <span>Follow : {follow}</span>
          <a href="#" style={styles.buttonStyle} onClick={handleClick}>Go somewhere</a>
        </div>
        <CardFooter follow={follow} setFollow={setFollow}/>
      </div>
      )
}