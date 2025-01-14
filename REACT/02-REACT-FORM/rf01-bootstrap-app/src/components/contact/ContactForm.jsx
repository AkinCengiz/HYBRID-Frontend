import PropTypes from "prop-types"
//import { useState } from "react";

function ContactForm(props) {
    const person = {firstname:"",lastname:""};
    function handleSubmit(e){
        e.preventDefault();
        props.setFirstname(person.firstname);
        props.setLastname(person.lastname);
        //console.log(person.firstname,person.lastname)

    }
 
    function setPersonFirtsName(e){
        person.firstname = e.target.value;
    }
    function setPersonLastName(e){
        person.lastname = e.target.value;
        console.log(person.lastname);
    }
    // function handleFirstnameOnChange(e){
    //     props.setFirstname(e.target.value);
    // }
    // function handleLastnameOnChange(e){
    //     props.setLastname(e.target.value)
    // }
  return (
    <form onSubmit={handleSubmit}>
    <div className="row">
      <div className="col my-3">
        <input
          type="text"
          className="form-control"
          placeholder="First name"
          aria-label="First name"
          onChange={(e) => setPersonFirtsName(e)}
        />
      </div>
      <div className="col my-3">
        <input
          type="text"
          className="form-control"
          placeholder="Last name"
          aria-label="Last name"
          onChange={(e) => setPersonLastName(e)}
        />
      </div>
      <div className="col-12">
        <button type="submit" className="btn btn-primary" >
          Send
        </button>
      </div>
    </div>
    </form>
  );
}

export default ContactForm;

ContactForm.propTypes = {
    setFirstname : PropTypes.func,
    setLastname : PropTypes.func
}