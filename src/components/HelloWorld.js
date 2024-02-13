
import SayMyName from "./SayMyName"

function HelloWorld(){
    const nome = "Pedro"
    return(
        <div>
            <h1>Hello-World</h1>
            <SayMyName nome="Welber"/>
            <SayMyName nome="João"/>
            <SayMyName nome={nome}/>
            
        </div>
    )
}

export default HelloWorld