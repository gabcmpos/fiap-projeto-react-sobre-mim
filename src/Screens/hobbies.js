import './styles.css'
import { Link } from 'react-router-dom';

export function Hobbies() {
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
						<h1 className='Titulo'>Hobbies:</h1>
					</div>
					<div className='Card'>
						<br></br>
						<p className='TextCard'>Os meus hobbies são os mesmos da minha infância ainda</p>
						<p className='TextCard'>Sendo eles: Ouvir música, jogar video-game, colecionar mangás e assistir animes!</p>
					</div>
				</div>
			</div>
		</div>
	);
}