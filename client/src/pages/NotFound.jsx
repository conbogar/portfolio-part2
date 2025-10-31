import { useTitle } from "../hooks/useTitle";
import { Link } from "react-router-dom";

export default function NotFound() {
    useTitle("Not Found");
    return (
        <>
            <section className="not-found">
                <h1>404 - Page Not Found</h1>
                <p>The page you are looking for does not exist.</p>
                <p>
                    <Link to="/">Go to Home</Link>
                </p>
            </section>
        </>
    );
}