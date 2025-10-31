import { useTitle } from "../hooks/useTitle";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Contact() {
  useTitle("Contact");

  const [firstName, setFirstName] = useState("");
  const [lastName,  setLastName]  = useState("");
  const [phone,     setPhone]     = useState("");
  const [email,     setEmail]     = useState("");
  const [message,   setMessage]   = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !email.includes("@") || !message) return;

    const contact = { firstName, lastName, phone, email, message };
    console.log("Contact form submit:", contact);

    navigate("/", { state: { contact } });
  };

  return (
    <>
      <h1>Contact</h1>

      <section className="contact-info">
        <h2>My contact info:</h2>
        <ul>
          <li>Email: <a href="mailto:connorrgardiner@gmail.com">connorrgardiner@gmail.com</a></li>
          <li>GitHub: <a href="https://github.com/conbogar" target="_blank" rel="noreferrer">conbogar</a></li>
          <li>Location: Surrey, BC</li>
        </ul>
      </section>

      <section className="contact-form">
        <h2>Send a message</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="first">First Name</label>
          <input id="first" name="first" value={firstName} onChange={(e)=>setFirstName(e.target.value)} required autoComplete="given-name" />

          <label htmlFor="last">Last Name</label>
          <input id="last" name="last" value={lastName} onChange={(e)=>setLastName(e.target.value)} autoComplete="family-name" />

          <label htmlFor="phone">Contact Number</label>
          <input id="phone" name="phone" type="tel" value={phone} onChange={(e)=>setPhone(e.target.value)} autoComplete="tel" />

          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required autoComplete="email" />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" value={message} onChange={(e)=>setMessage(e.target.value)} required />

          <button type="submit">Submit</button>
        </form>
      </section>
    </>
  );
}
