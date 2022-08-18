import React from "react";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "..";
import { Row } from "react-bootstrap";
import ContactItem from "./ContactItem";

const ContactsList = observer(() => {
   const {contact} = useContext(Context)
   return(
      <Row>
         {contact.contacts.map((contact: any) => 
            <ContactItem key={contact.id} contact={contact}/>
         )}
      </Row>
   )
})


export default ContactsList;