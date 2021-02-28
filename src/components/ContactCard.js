import React from "react";

function ContactCard(props) {
  return (
    <div>
      <img src={props.contact.img} />
      <h3>{props.contact.name}</h3>
      <p>Telefone: {props.contact.number}</p>
      <p>Email: {props.contact.email}</p>
    </div>
  );
}
export default ContactCard;
