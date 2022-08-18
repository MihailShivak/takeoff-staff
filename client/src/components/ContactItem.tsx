import React from "react";
import { Card, Col } from "react-bootstrap";

const ContactItem = (contact: any) => {
   return(
      <Col>
         <Card>
            <div>{contact.name}</div>
         </Card>
      </Col>
   )
}


export default ContactItem;