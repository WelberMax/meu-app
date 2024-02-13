import PropTypes from 'prop-types'
function Item({marca, ano_lancamento}){
    return(
        <>
            <p>Marca</p>
            <li>{marca} - {ano_lancamento}</li>
        </>
    )
}

//Propriedades do item, Tipos e padrões!
Item.propTypes = {
    marca: PropTypes.string.isRequired
}
Item.defaultProps = {
    marca: 'faltou a marca',
    ano_lancamento: 0
}

export default Item