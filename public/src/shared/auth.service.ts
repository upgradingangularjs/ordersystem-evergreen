import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import { CLIENT_ID, CLIENT_SECRET } from '../../../authVariables';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  getToken() {
    if (!this.hasToken() || !this.isAuthenticated()) {
      const url = 'https://samjulien.auth0.com/oauth/token';
      const body = `{
        "client_id":"${CLIENT_ID}",
        "client_secret":"${CLIENT_SECRET}",
        "audience":"ordersystem-api",
        "grant_type":"client_credentials"}`;
      const options = { headers: { 'content-type': 'application/json' } };
      return this.http
        .post(url, body, options)
        .toPromise()
        .then(response => {
          this.setSession(response);
        });
    }
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

  hasToken() {
    let token = localStorage.getItem('access_token');
    return token !== null;
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
