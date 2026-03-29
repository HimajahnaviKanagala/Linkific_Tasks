import { useState } from "react";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Name: ${name}, Email: ${email}`);
    setName("");
    setEmail("");
  }
  return (
    <form onSubmit={handleSubmit} className="card">
      <h2>Form</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br></br>
      <br></br>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br></br>
      <br></br>
      <button type="submit">Submit</button>
    </form>
  );
}
export default Form;
