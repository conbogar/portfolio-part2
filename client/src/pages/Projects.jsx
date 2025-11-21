import { useTitle } from "../hooks/useTitle.js";
import wpfCalculator from '../assets/wpf-calculator.png';
import reactPortfolio from '../assets/react-portfolio.png';
import javaSingers from '../assets/java-singers.png';
import ProjectForm from "../components/ProjectForm.jsx";

export default function Projects() {
    useTitle("Projects");
    return (
        <>
            <h1>Projects</h1>
            <section className="projects">
                <article className="project">
                    <div className="content">
                    <h2>Project 1: React Portfolio Website</h2>

                        <p>
                            A fast single-page site with client routing, custom header, and per-page titles. Built for course submission and as a personal showcase.
                        </p>
                        <ul>
                            <li><strong>Tech:</strong> Vite, React, React Router</li>
                            <li>
                                <strong>Links:</strong>{" "}
                                <a 
                                    href="https://conbogar.vercel.app/"
                                    target="_blank"
                                >
                                    Live
                                </a> 
                                {" "}
                                <a 
                                    href="https://github.com/conbogar/react-portfolio-vite" 
                                    target="_blank"
                                >
                                    Source
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="media">
                        <img className="project-image" src={reactPortfolio} alt="Project 1 screenshot" />
                    </div>
                </article>

                <article className="project">
                    <div className="content">
                    <h2>Project 2: WPF Calculator (.NET)</h2>
                        <p>
                            Desktop calculator supporting + − × ÷, clear, and keyboard input. Logic is separated from the UI for easier testing and changes.
                        </p>
                        <ul>
                            <li><strong>Tech:</strong> C#, .NET, WPF</li>
                            <li>
                                <strong>Links:</strong>{" "}
                                <a 
                                    href="https://github.com/conbogar/wpf-calculator" 
                                    target="_blank"
                                >
                                    Source
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="media">
                        <img className="project-image" src={wpfCalculator} alt="WPF Calculator main window" />
                    </div>
                </article>

                <article className="project">
                    <div className="content">
                    <h2>Project 3: Java OOP - Singers Records (Console)</h2>
                        <p>
                            Console app that manages singer records with a <code>Singers</code> class
                            (id, name, address, DOB, album count), two constructors, full/individual
                            setters & getters, and a driver that prints defaults, bulk-set values,
                            and post-update values.
                        </p>
                        <ul>
                            <li><strong>Tech:</strong> Java (OOP, encapsulation)</li>
                            <li>
                                <strong>Links:</strong>{" "}
                                <a 
                                    href="https://github.com/conbogar/comp228406-connor-fall2025/tree/main/Connor_COMP228Lab1"
                                    target="_blank"
                                >
                                    Source
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="media">
                        <img className="project-image" src={javaSingers} alt="Project 1 screenshot" />
                    </div>
                </article>
                 <ProjectForm />
            </section>
        </>
    );
}