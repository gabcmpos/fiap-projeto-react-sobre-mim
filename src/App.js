import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Experience } from './Screens/experience'
import { Formation } from './Screens/formation'
import { Hobbies } from './Screens/hobbies'
import { Initial } from './Screens/inicitial'
import './Screens/styles.css'




function App() {
	return (
		<BrowserRouter>
    <Routes>
      <Route path="/experiência/:id" element={<Experience />} />
      <Route path="/formação/:id" element={<Formation />} />
      <Route path="/hobbies/:id" element={<Hobbies />} />
      <Route path="/" element={<Initial />} />
    </Routes>
      
		</BrowserRouter>
	);
}

export default App;