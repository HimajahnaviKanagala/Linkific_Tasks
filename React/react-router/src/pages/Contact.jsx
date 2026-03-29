import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    alert("Form Submitted!");
    navigate("/");
  }
  return (
    <div className="card">
      <h1>Contact Page</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
export default Contact;
