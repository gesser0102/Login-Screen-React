/* eslint-disable jsx-a11y/anchor-is-valid */

import { useState } from 'react';
import './style.css'

function App() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  return (
    <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            
            <div className="title-container">
            <span className="login-form-title">Login Screen</span>
            </div>
            
            
            <div className="wrap-input">
                <input type="email" className={email !==""?'has-val input': 'input'} value={email}onChange={e => setEmail(e.target.value)}/>
                <span className="focus-input" data-placeholder="Email"></span>
            </div>
            <div className="wrap-input">
                <input type="password" className={password !==""?'has-val input': 'input'} value={password}onChange={e => setPassword(e.target.value)}/>
                <span className="focus-input" data-placeholder="Password"></span>
            </div>
            <div className="cointainer-login-btn">
              <button className="login-btn">Login</button>
            </div>
            <div className="text-question">
              <span className="question">Não possui Conta?</span>
              <a href="#" className="create">Criar conta.</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
