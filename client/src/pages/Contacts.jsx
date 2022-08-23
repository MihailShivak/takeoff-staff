import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Context } from "..";
import ContactsList from "../components/ContactsList";
import { fetchContact } from "../http/contactsAPI";


const Contacts = observer(() => {
   const {contact} = useContext(Context)
   useEffect(() => {
      fetchContact(contact.name).then(data => {
         contact.setContact(data.rows)
      })
   }, [contact.name])
   return(
      <Container className="container_contacts">
         <div className="content">
            <ContactsList/>
         </div>
      </Container>
   )
})

export default Contacts;