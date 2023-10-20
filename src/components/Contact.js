import React, { useState } from "react";
import { TextInput, Textarea, Select } from "react-materialize";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nation, setNation] = useState("VietNam");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission logic here
    console.log(name, email, phone, nation, message);
  };

  return (
    <div>
      <h3>Contact Me</h3>
      <form onSubmit={handleSubmit}>
        <TextInput
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextInput
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextInput
          label="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <Select
          label="Nation"
          value={nation}
          onChange={(e) => setNation(e.target.value)}
        >
          <option value="VietNam">VietNam</option>
          <option value="USA">USA</option>
          <option value="Japan">Japan</option>
          <option value="Australia">Australia</option>
        </Select>
        <Textarea
          label="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
