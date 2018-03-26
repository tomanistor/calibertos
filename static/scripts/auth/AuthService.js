import auth0 from 'auth0-js'
import EventEmitter from 'EventEmitter'
import router from './../router'

export default class AuthService {

  constructor () {
    this.login = this.login.bind(this)
    this.setSession = this.setSession.bind(this)
    this.logout = this.logout.bind(this)
    this.isAuthenticated = this.isAuthenticated.bind(this)
  }

  auth0 = new auth0.WebAuth({
    domain: 'tomanistor.auth0.com',
    clientID: 'tvwKhqgfgu5DKNZgLqeVwKmRbuLBk5JM',
    redirectUri: 'http://localhost:3000/callback',
    audience: 'https://tomanistor.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid'
  })

  login () {
    this.auth0.authorize()
  }
}
