import auth0 from 'auth0-js'
import EventEmitter from 'EventEmitter'
import router from '../main.js'

export default class AuthService {

  authenticated = this.isAuthenticated()
  authNotifier = new EventEmitter()

  constructor(userProfile) {
    this.login = this.login.bind(this)
    this.setSession = this.setSession.bind(this)
    this.logout = this.logout.bind(this)
    this.isAuthenticated = this.isAuthenticated.bind(this)
    this.getProfile = this.getProfile.bind(this)
    this.userProfile
  }

  auth0 = new auth0.WebAuth({
    domain: 'tomanistor.auth0.com',
    clientID: 'tvwKhqgfgu5DKNZgLqeVwKmRbuLBk5JM',
    redirectUri: 'http://localhost:3000/callback',
    audience: 'https://tomanistor.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid profile'
  })

  login() {
    this.auth0.authorize()
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult)

        // this.auth0.client.userInfo(authResult.accessToken, function (err, profile) {
        //   localStorage.setItem('user_details', profile)
        //   userProfile = profile
        //   console.log(profile)
        //   console.log(userProfile.name)
        // })

        router.replace('/')
      } else if (err) {
        router.replace('/')
        console.log(err)
      }
    })
  }

  setSession(authResult) {
    // Set the time that the Access Token will expire at
    let expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    )
    localStorage.setItem('access_token', authResult.accessToken)
    localStorage.setItem('id_token', authResult.idToken)
    localStorage.setItem('expires_at', expiresAt)
    this.authNotifier.emit('authChange', { authenticated: true })
  }

  logout() {
    // Clear Access Token and ID Token from local storage
    localStorage.removeItem('access_token')
    localStorage.removeItem('id_token')
    localStorage.removeItem('expires_at')
    this.userProfile = null
    this.authNotifier.emit('authChange', false)
    // navigate to the home route
    router.replace('/')
  }

  isAuthenticated() {
    // Check whether the current time is past the
    // Access Token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'))
    return new Date().getTime() < expiresAt
  }

  getProfile(userProfile) {
    if (!this.userProfile) {
      const accessToken = localStorage.getItem('access_token')

      if (!accessToken) {
        console.log('Access Token must exist to fetch profile')
      }

      this.auth0.client.userInfo(accessToken, function(err, profile) {
        if (profile) {
          userProfile = profile
        }
        console.log(userProfile)
        return userProfile
      });
    } else {
      console.log(userProfile)
      // displayProfile()
    }
  }
}
