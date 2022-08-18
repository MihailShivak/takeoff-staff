import React, { useContext, useState } from 'react';
import {Container, Card, Form, Row, Button} from "react-bootstrap";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {Context} from "../index";
import { observer } from "mobx-react-lite";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../unils/consts';
import { login, registration } from '../http/userAPI';

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
      user.setUser(user)
      user.setIsAuth(true)
      history(LOGIN_ROUTE)
    } catch (e) {
      
    }
  }

  return (
    <div className="Auth">
      <Container>
        <Card>
          <h2>{isLogin ? "AUTHORIZATION" : "REGISTRATION"}</h2>
          <Form>
            <Form.Control placeholder='username' value={username} onChange={e => setUsername(e.target.value)}/>
            <Form.Control placeholder='password' type='password' value={password} onChange={e => setPassword(e.target.value)}/>
            <Row>
              <Button onClick={click}>{isLogin ? "LOG IN" : "REGISTRATION"}</Button>
                {isLogin ?
                  <div>
                    no account ? <NavLink to={REGISTRATION_ROUTE}>Register</NavLink>
                  </div>
                  :
                  <div>
                    have an account ? <NavLink to={LOGIN_ROUTE}>Log in</NavLink>
                  </div>
                }
            </Row>
          </Form>
        </Card>
      </Container>
    </div>
  );
})

export default Auth;
