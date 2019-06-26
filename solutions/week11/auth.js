//Auth class which provides basic JWT based authentication for our app.
// Requires: access to the makeRequest function
import { makeRequest } from './authHelpers.js';

export default class Auth {
  constructor(errorHandler) {
    this.jwtToken = '';
    this.user = {};
    this.errors = errorHandler;
  }

  async login(callback) {
    const password = document.getElementById('password');
    const username = document.getElementById('username');
    const postData = {
      email: username.value,
      password: password.value
    };
    try {
      const data = await makeRequest('login', 'POST', postData);
      // a successful response...we have a token!  Store it since we will need to send it with every request to the API.
      this.jwtToken = data.accessToken;
      // let's get the user details as well and store them locally in the class
      this.user = await this.getCurrentUser(username.value);
      console.log(data);

      // hide the login form.
      hideLogin();
      // clear the password
      password.value = '';
      // clear any errors from the login process
      this.errors.clearError();
      // since we have a token let's go grab some data from the API
      callback();
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
        'users?email=' + email,
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
    // after logging in we pulled down the user from the api...including the id...we can use that to do our update.

    this.user.age = 40;
    try {
      const result = await makeRequest(
        'users/' + this.user.id,
        'PUT',
        this.user,
        this.jwtToken
      );
      console.log('Update user:', result);
    } catch (error) {
      this.errors.handleError(error, showLogin);
    }
  }

  set token(value) {
    // we need this for the getter to work...but we don't want to allow setting the token through this so we are leaving it blank.
  }
  get token() {
    return this.jwtToken;
  }
} // end auth class

function showLogin() {
  document.getElementById('login').classList.remove('hidden');
}

function hideLogin() {
  document.getElementById('login').classList.add('hidden');
}
