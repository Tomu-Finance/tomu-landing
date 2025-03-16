import { useState } from "react";
import "../styles/components/Form.scss";

const Form = () => {
  const [email, setEmail] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    const url = `https://script.google.com/macros/s/AKfycbxssXNYWFEcoBaLS-Y2V1hbL6ZK4QxTTOmT32SPgE7VZa4U67DQHzNp4wwpD-GzQnCO/exec?email=${email}`;
    fetch(url, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      // ignore status code as the url redirects but the data store still succeeds
      setEmail("");
      alert("You have been added to the waitlist!");
    });
  };
  return (
    <form onSubmit={onSubmit} className="form">
      <input
        className="form__input"
        placeholder="Enter your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
      />
      <button className="form__button">Join waitlist</button>
    </form>
  );
};

export default Form;
