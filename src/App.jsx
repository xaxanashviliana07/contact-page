import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.scss'
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx";

function App() {

    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                </Routes>
            </Router>
        </>
    )
}

export default App
