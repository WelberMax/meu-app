function SeuNome({setName}){
    return (
        <div>
            <h1>Nome:</h1>
            <input 
                type="text" 
                placeholder="Digite seu nome aqui"
                onChange={(e) => setName(e.target.value)} />
        </div>
    )
}
export default SeuNome