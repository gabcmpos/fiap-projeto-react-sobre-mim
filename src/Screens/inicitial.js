import { Link } from 'react-router-dom';
import './styles.css'
import { useState } from 'react';

export function Initial() {
    const [input, setInput] = useState('06516055');
    const [info, setInfo] = useState(null); // Armazena as informações do CEP

    const buscarCep = () => {
        setTimeout(async () => {
            try {
                const response = await fetch(`https://viacep.com.br/ws/${input}/json/`);
                const data = await response.json();
                setInfo(data);
            } catch (error) {
                console.error("Erro ao buscar CEP:", error);
            }
        }, 2000); // Atraso de 2 segundos
    };
    return (
        <div className='Container'>
            <div className='NavbarContainer'>
                <nav className='Navbar'>
                    <ul>
                        <li><Link to="/">Sobre mim</Link></li>
                        <li><Link to="/experiência/1">Experiência</Link></li>
                        <li><Link to="/formação/1">Formação</Link></li>
                        <li><Link to="/hobbies/1">Hobbies</Link></li>
                    </ul>
                </nav>
            </div>
            <div className='ContentWrapper'>
                <div className='CardContainer'>  
                    <div className='TituloContainer'>
                        <h1 className='Titulo'>Sobre mim:</h1>
                    </div>
                    <div className='Card'>
                        <br></br>
                        <p className='TextCard'>Nome: Gabrielly Campos de Araujo</p>
                        <p className='TextCard'>Idade: 21 anos</p>
                    </div>
                    <div className='CEP'>
                        <p className='TextCard'>Meu CEP: {input}</p>
                        <button className='Search' onClick={buscarCep}>
                            Procurar
                        </button>
                    </div>
                    {info && (
                        <div className='Information'>
                            <span>Rua: {info.logradouro}</span>
                            <span>Bairro: {info.bairro}</span>
                            <span>Cidade: {info.localidade}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}