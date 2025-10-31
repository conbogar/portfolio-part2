import { useTitle } from "../hooks/useTitle.js";

export default function Education() {
    useTitle("Education");
    return (
        <>
            <h1>Education</h1>
            <section>
                <article>
                    <h2>Centennial College</h2>
                    <p>Advanced Diploma in Software Engineering Technology</p>
                    <p>Jan. 2025 - Dec. 2027</p>
                    <p>GPA: 4.16/4.5</p>
                    <ul>
                        <li>Selected courses: Java Programming, Advanced Database Concepts, Web Application Development</li>
                        <li>Languages: Java, C#, JS, Python, SQL, PL/SQL</li>
                        <li>Frameworks: React, .NET, Node, Express</li>
                        <li>Databases: Oracle, MySQL, MongoDB</li>
                        <li>Tools: Git, Linux, Docker, VS Code, IntelliJ, SQL Developer</li>
                    </ul>
                </article>
            </section>
        </>
    );
}