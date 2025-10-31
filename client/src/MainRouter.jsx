import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Education from './pages/Education.jsx'
import Projects from './pages/Projects.jsx'
import Services from './pages/Services.jsx'
import Layout from './components/Layout.jsx'
import NotFound from './pages/NotFound.jsx'

const MainRouter = () => {
    return (
    <>
        <Layout/>
        <main>
            <Routes>
                <Route path = "/" element = {<Home />} />
                <Route path = "/about" element = {<About />} />
                <Route path = "/education" element = {<Education />} />
                <Route path = "/contact" element = {<Contact />} />
                <Route path = "/services" element = {<Services />} />
                <Route path = "/projects" element = {<Projects />} />
                <Route path = "*" element = {<NotFound />} />
            </Routes>
        </main>
    </>
    );
}

export default MainRouter