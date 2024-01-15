import Button from "../components/Button";

function Home(props) {


    function onButtonPressed() {
        console.log("button presse")
      }
      const myButtonName = "autre bouton"
      
    return (
    <div>
    Hello World
    
    <br/> 
    <Button  name="Bouton" className="btn-primary" onClick={onButtonPressed || null}/>

    <br/>
    <Button  name={myButtonName} className="btn-secondary" link="https://www.google.com"/>
    
    <br/>
    </div>

    )
}

export default Home