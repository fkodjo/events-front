import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return SignIn();

};

function SignIn() {
  return (
    <div className="SignIn">
      <body className="SignIn-body">
        <p class="tip">Click on button in image container</p>

        <div class="form-sign">
          <div class="sub-cont1">
            <h2>Welcome back,</h2>
            <label>
              <span>Email</span>
              <input type="email" />
            </label>
            <label>
              <span>Password</span>
              <input type="password" />
            </label>
            <p class="forgot-pass">Forgot password?</p>
            <button type="button" class="submit">Sign In</button>
          </div>
          <div class="sub-cont2">
            <div class="img">
              <div class="img__text">
                <h2>Nouveau ici?</h2>
                <p>Inscrivez-vous et découvrez un grand nombre de nouvelles opportunités!</p>
              </div>            
              <div class="img__btn">
                <span class="m--up">Sign Up</span>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default App;
