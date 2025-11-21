import { useState } from "react";

export default function EducationForm() {
  const [title, setTitle] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [completion, setCompletion] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");
  const role = localStorage.getItem("role");
  const isAdmin = role === "admin";

    if (!isAdmin) {
    return (
      <section style={{ maxWidth: 600, margin: "2rem auto" }}>
        <p>You can view education details, but only admin can add or edit them.</p>
      </section>
    );
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!title || !firstName || !lastName || !email || !completion) {
      setMessage("Please fill in all required fields.");
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      setMessage("You must be signed in to add education.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3002/educations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title,
          firstname: firstName,
          lastname: lastName,
          email,
          completion,
          description,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setMessage(data.message || "Failed to add education.");
        return;
      }

      setMessage("Education/qualification added.");
      setTitle("");
      setFirstName("");
      setLastName("");
      setEmail("");
      setCompletion("");
      setDescription("");
    } catch (err) {
      console.error(err);
      setMessage("Network error while saving education.");
    }
  };

  return (
    <section style={{ maxWidth: 600, margin: "2rem auto" }}>
      <h2>Add Education / Qualification</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Program / Title
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>

        <label>
          First Name
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </label>

        <label>
          Last Name
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </label>

        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>

        <label>
          Completion Date
          <input
            type="date"
            value={completion}
            onChange={(e) => setCompletion(e.target.value)}
            required
          />
        </label>

        <label>
          Description
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>

        <button type="submit">Save Education</button>
      </form>

      {message && <p>{message}</p>}
    </section>
  );
}
