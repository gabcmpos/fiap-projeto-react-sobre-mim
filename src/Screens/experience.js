import './styles.css'
import { Link } from 'react-router-dom';

export function Experience() {
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
						<h1 className='Titulo'>Experiência:</h1>
					</div>
					<div className='Card'>
						<br></br>
						<p className='TextCard'>Possuo pouca experiência com programação em relação a trabalho, mas sempre foi uma paixão minha</p>
						<p className='TextCard'>Trabalhei apenas como jovem aprendiz, e ambos empregos foram no setor de RH</p>
					</div>
				</div>
			</div>
		</div>
	);
}