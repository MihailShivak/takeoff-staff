import React, {useContext, useEffect, useState} from "react";
import { observer } from "mobx-react-lite";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import './style/App.css';
import { Context } from "./index";
import { check } from "./http/userAPI";
import { Spinner } from "react-bootstrap";

const App = observer(() => {
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    check().then(data => {
      user.user(true)
      user.isAuth(true)
    }).finally(() => setLoading(false))
  }, [])

  if(loading){
    return <Spinner animation="border"/>
  }

  return (
    <BrowserRouter>
      <AppRouter/>
    </BrowserRouter>
  )
});

export default App;