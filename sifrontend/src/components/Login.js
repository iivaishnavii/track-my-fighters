import React from 'react';
import './Login.css'
import {Link} from 'react-router-dom'


function Login() {
  return (
    <div class="form">

      <ul class="tab-group">
        <li class="tab active"><a href="#login">Log In</a></li>
        <li class="tab"><a href="#signup">Sign Up</a></li>
      </ul>

      <div class="tab-content">
        <div id="login">
          <h1>Captain login</h1>

          <form action="/" method="post">

            <div class="field-wrap">
              <label>
                User name<span class="req">*</span>
              </label>
              <input type="text" required autocomplete="off" />
            </div>

            <div class="field-wrap">
              <label>
                Password<span class="req">*</span>
              </label>
              <input type="password" required autocomplete="off" />
            </div>

            <p class="forgot"><a href="#">Forgot Password?</a></p>

            <Link to="/map"><button class="button button-block">Log In</button></Link>

          </form>

        </div>

        <div id="signup">
          <h1>New Captains! Register here</h1>

          <form action="/" method="post">

            <div class="top-row">
              <div class="field-wrap">
                <label>
                  First Name<span class="req">*</span>
                </label>
                <input type="text" required autocomplete="off" />
              </div>

              <div class="field-wrap">
                <label>
                  Last Name<span class="req">*</span>
                </label>
                <input type="text" required autocomplete="off" />
              </div>
            </div>

            <div class="field-wrap">
              <label>
                Squad Name<span class="req">*</span>
              </label>
              <input type="text" required autocomplete="off" />
            </div>

            <div class="field-wrap">
              <label>
                User Name<span class="req">*</span>
              </label>
              <input type="text" required autocomplete="off" />
            </div>

            <div class="field-wrap">
              <label>
                Set A Password<span class="req">*</span>
              </label>
              <input type="password" required autocomplete="off" />
            </div>

            <button type="submit" class="button button-block">Register</button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default Login;
