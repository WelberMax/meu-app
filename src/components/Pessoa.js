import styles from "./Pessoa.module.css";
function Pessoa({foto, nome, idade, profissao}){
    return(
        <div className={styles.pessoaContainer}>
            <img src={foto} alt={nome} />
            <p className={styles.pessoaContent}>Meu nome é {nome}</p>
            <p className={styles.pessoaContent}>Minha idade é {idade}</p>
            <p className={styles.pessoaContent}>Profissao: {profissao}</p>
        </div>
    )
}
export default Pessoa