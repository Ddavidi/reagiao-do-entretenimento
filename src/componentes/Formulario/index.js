import './Formulario.css';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';

const Formulario = () => {

    const times = [
        'League of Legends',
        'Counter-Strike',
        'Valorant'
    ]

    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar seu card de jogador</h2>
                <CampoTexto label="Nome" placeholder="Digite seu nome"/>
                <CampoTexto label="Posição" placeholder="Digite sua posição"/>
                <CampoTexto label="Imagem" placeholder="Mande sua imagem"/>
                <ListaSuspensa label="Time" itens={times}/>
            </form>
        </section>
    )
}

export default Formulario;
