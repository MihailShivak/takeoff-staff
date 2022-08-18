import { observer } from "mobx-react-lite";
import React, { useContext, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Context } from "..";
import ContactsList from "../components/ContactsList";
import { fetchContact } from "../http/contactsAPI";


const Contacts = observer(() => {
   const {contact} = useContext(Context)
   useEffect(() => {
      fetchContact().then(data => contact.setContact(data))
   }, [])
   return(
      <Container>
         <ContactsList/>
      </Container>
   )
})

export default Contacts;