import React, { useContext, useState } from 'react';
import {Container, Card, Form, Row, Button} from "react-bootstrap";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {Context} from "../index";
import { observer } from "mobx-react-lite";
import { CONTACTS_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from '../unils/consts';
import { login, registration } from '../http/userAPI';
import "../style/auth.css"

const Auth = observer(() => {
  const {user} = useContext(Context)
  const location = useLocation()
  const history = useNavigate()
  const isLogin = location.pathname === LOGIN_ROUTE;
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const click = async () => {
    try {
      var data;
      if(isLogin){
        data = await login(username, password);
      } else {
        data = await registration(username, password)
      }
      user.user(user)
      user.isAuth(true)
      history(CONTACTS_ROUTE)
    } catch (e) {
      
    }
  }

  return (
    <div className="Auth">
      <Card className='card'>
        <h2 className='authorization'>{isLogin ? "AUTHORIZATION" : "REGISTRATION"}</h2>
        <Form className='form'>
          <Form.Control className='username' placeholder='username' value={username} onChange={e => setUsername(e.target.value)}/>
          <Form.Control className='password' placeholder='password' type='password' value={password} onChange={e => setPassword(e.target.value)}/>
          <Row className='buttons'>
            <Button className='sign_in' onClick={click}>
              {isLogin ? 
              <NavLink className="link" style={{color: 'white'}} to={CONTACTS_ROUTE}>
                LOG IN
              </NavLink>
              : 
              "REGISTRATION"
              }
              </Button>
              {isLogin ?
                <div className='no_account'>
                  no account ? <NavLink className="link" to={REGISTRATION_ROUTE}>Register</NavLink>
                </div>
                :
                <div className='no_account'>
                  have an account ? <NavLink className="link" to={LOGIN_ROUTE}>Log in</NavLink>
                </div>
              }
          </Row>
        </Form>
      </Card>
    </div>
  );
})

export default Auth;
