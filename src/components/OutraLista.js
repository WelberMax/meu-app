function OutraLista({itens}){
    return(
        <>
            <h3>Lista de Carros</h3>
            {itens.map(item =>(
                    <h1>{item}</h1>
            ))}
        </>
    )

}
export default OutraLista