import { useTitle } from "../hooks/useTitle.js";
import { Link } from "react-router-dom";

export default function Services() {
    useTitle("Services"); 
    return (
        <>
            <h1>Services</h1>
            <article className="service">
                <h2>Frontend (React)</h2>
                <p>Single-page sites, routing, basic state and forms.</p>
            </article>

            <article className="service">
                <h2>Backend APIs (Node/Express)</h2>
                <p>Small REST endpoints, JSON data flow, and integration with React frontends.</p>
            </article>

            <article className="service">
                <h2>Databases & SQL</h2>
                <p>Schema design, CRUD queries, and basic PL/SQL with Oracle/MySQL.</p>
            </article>
            <p><Link className="btn" to="/contact">Get in touch</Link></p>
        </>
    );
}