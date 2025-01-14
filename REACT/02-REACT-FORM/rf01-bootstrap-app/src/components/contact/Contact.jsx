//import Form1 from "./Form1";

import { useState } from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
    const [firstname,setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
  return (
    <div className="row justify-content-center py-3">
      {/* <Form1/> */}
      <h1>Firstname : {firstname} - Lastname : {lastname}</h1>
      <ContactForm setFirstname={setFirstname} setLastname={setLastname} />
    </div>
  );
};

export default Contact;
