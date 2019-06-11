//Auth class which provides basic JWT based authentication for our app.
// Requires: access to the makeRequest and  handleError functions
import { makeRequest } from './authHelpers.js';

export default class Auth {
  constructor(loginForm, errorHandler) {
    this.jwtToken = '';
    this.user = {};
    this.loginForm = document.getElementById(loginForm);
    this.loginListener();
    this.errors = errorHandler;
  }
  loginListener() {
    this.loginForm.querySelector('button').addEventListener('click', () => {
      this.login();
    });
  }
  async login() {
    const password = document.getElementById('password');
    const username = document.getElementById('username');
    const postData = {
      email: username.value,
      password: password.value
    };
    try {
      const data = await makeRequest(authURL + 'login', 'POST', postData);
      // a successful response...we have a token!  Store it since we will need to send it with every request to the API.
      this.jwtToken = data.accessToken;
      // let's get the user details as well
      this.user = await this.getCurrentUser(username.value);
      console.log(data);
      //document.getElementById('token-display').innerHTML = data.accessToken;
      // hide the login form.
      document.getElementById('login').classList.add('hidden');
      // clear the password
      password.value = '';
      // clear any errors from the login process
      this.errors.clearError();
      // since we have a token let's go grab some data from the API
      getPosts();
    } catch (error) {
      // if there were any errors display them
      this.errors.handleError(error);
      console.log(error);
    }
  }
  // uses the email of the currently logged in user to pull up the full user details for that user from the database
  async getCurrentUser(email) {
    try {
      const data = await makeRequest(
        authURL + 'users?email=' + email,
        'GET',
        null,
        this.jwtToken
      );

      console.log(data);
      return data[0];
    } catch (error) {
      // if there were any errors display them
      this.errors.handleError(error);

      console.log(error);
    }
  }
  async updateUser() {
    //first we have to figure out what the current userId is...we can use email to look it up.
    //const user = await getCurrentUser();
    this.user.age = 40;
    try {
      const result = await makeRequest(
        authURL + 'users/' + this.user.id,
        'PUT',
        this.user,
        this.jwtToken
      );
      console.log('Update user:', result);
    } catch (error) {
      this.errors.handleError(error);
    }
  }

  set token(value) {
    // we need this for the getter to work...but we don't want to allow setting the token through this.
  }
  get token() {
    return this.jwtToken;
  }
} // end auth class
