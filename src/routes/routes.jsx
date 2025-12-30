import { createBrowserRouter } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Skills from "../Components/Skills";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";

export const routes = createBrowserRouter([

    {path:'/',element:(
    <div>
        <Navigation />
        <Hero />
    </div>
    )},
    {path:'/about',element:(
    <div>
        <Navigation />
        <About />
    </div>
    )},
    {path:'/skills',element:(
    <div>
        <Navigation />
        <Skills />
    </div>
    )},
    {path:'/projects',element:(
    <div>
        <Navigation />
        <Projects />
    </div>
    )},
    {path:'/contact',element:(
    <div>
        <Navigation />
        <Contact />
    </div>
    )}

])
