import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css'
import Navigation from './components/Navigation'
//import MainContent from './components/Content'

function App() {

  return (
    <>
    <Router>
    <Navigation/>
    </Router>
      
    </>
  )
}

export default App
