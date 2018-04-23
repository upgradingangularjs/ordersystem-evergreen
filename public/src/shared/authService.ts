import { CLIENT_ID, CLIENT_SECRET } from '../../../authVariables';

export class AuthService {
  constructor(private $http) {}

  getToken() {
    const url = 'https://samjulien.auth0.com/oauth/token';
    const body = `{
      "client_id":"${CLIENT_ID}",
      "client_secret":"${CLIENT_SECRET}",
      "audience":"ordersystem-api",
      "grant_type":"client_credentials"}`;
    const options = { headers: { 'content-type': 'application/json' } };
    return this.$http.post(url, body, options).then(response => {
      this.setSession(response.data);
    });
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

  setSession(authResult) {
    // Set the time that the access token will expire at
    let expiresAt = JSON.stringify(
      authResult.expires_in * 1000 + new Date().getTime()
    );
    localStorage.setItem('access_token', authResult.access_token);
    localStorage.setItem('token_type', authResult.token_type);
    localStorage.setItem('expires_at', expiresAt);
  }
}

AuthService.$inject = ['$http'];
