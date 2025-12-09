import React, { Suspense, lazy } from 'react';
import Navbar from './sections/Navbar';
import Hero from "./sections/Hero.jsx";
import ClickSpark from './components/ClickSpark.jsx';

// Lazy load sections that are not immediately visible
const About = lazy(() => import("./sections/About.jsx"));
const Projects = lazy(() => import("./sections/Projects.jsx"));
const Clients = lazy(() => import("./sections/Clients.jsx"));
const Contact = lazy(() => import("./sections/Contact.jsx"));
const Footer = lazy(() => import("./sections/Footer.jsx"));
const Experience = lazy(() => import("./sections/Experience.jsx"));
const Awards = lazy(() => import("./sections/Awards.jsx"));

const App = () => {
    return (
        <ClickSpark>
            <main className="max-x-7xl mx-auto">
                <Navbar/>
                <Hero />
                
                {/* Suspense wrapper for lazy loaded components */}
                <Suspense fallback={<div className="flex justify-center items-center py-20"><span className="text-white">Loading...</span></div>}>
                    <About />
                    <Projects />
                    <Clients />
                    <Experience/>
                    <Awards />
                    <Contact/>
                    <Footer/>
                </Suspense>
            </main>
        </ClickSpark>
    )
}
export default App;