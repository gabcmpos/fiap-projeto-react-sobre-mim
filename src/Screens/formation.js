import './styles.css'
import { Link } from 'react-router-dom';

export function Formation() {
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
						<h1 className='Titulo'>Formação:</h1>
					</div>
					<div className='Card'>
						<br></br>
						<p className='TextCard'>Essa está sendo minha primeira faculdade, mas fiz 1 semestre de ciências da computação na Mackezie</p>
						<p className='TextCard'>Embora não possuo outra faculdade, ja realizei vários cursos na minha vida, sou fluente em inglês, ja fiz cursos de matemática, desenhos e também de programação!</p>
					</div>
				</div>
			</div>
		</div>
	);
}