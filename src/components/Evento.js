import Button from "./evento/Button"

function Evento(){
    function MeuEvento(){
        console.log('Voce ativou o Evento 1')
    }
    function MeuEvento2(){
        console.log('Voce ativou o Evento 2')
    }
    return(
        <div>
            <p>Este é nosso Teste de Evento Clique</p>
            <Button event={MeuEvento} text="Primeiro Evento"/>
            <Button event={MeuEvento2} text="Segundo Evento"/>
        </div>
    )
}
export default Evento