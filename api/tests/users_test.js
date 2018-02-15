process.env.NODE_ENV = 'test';

let mongoose = require('mongoose')
let User = require('../models/Users')

let chai = require('chai')
let chaiHTTP = require('chai-http')
let server = require('../server')
let should = chai.should()

chai.use(chaiHTTP)

describe('Users Controllers', () => {
  beforeEach((done) => {
    User.remove({}, (err) => { 
     done()
    })
  })

  describe('GET /users', () => {
    it('should GET all users', (done) => {
      chai.request(server.listener)
        .get('/users')
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.an('array')
          res.body.length.should.be.eql(0)
          done()
        })
      })
  })

  describe('GET /users/{id}', () => {
    it('should GET one user', (done) => {
      let user = new User({
        name: 'Toma Nistor', 
        email: 'example@example.com'
      })

      user.save((err, user) => {
        chai.request(server.listener)
          .get('/users/' + user._id)
          .send(user)
          .end((err, res) => {
            res.should.have.status(200)
            res.body.should.be.an('object')
            res.body.should.have.property('name').eql('Toma Nistor')
            res.body.should.have.property('email').eql('example@example.com')
            res.body.should.have.property('_id').eql(String(user._id))
            done()
          })
      })
    })
  })

  describe('POST /users', () => {
    it('should POST one user', (done) => {
      let user = {
        name: 'Toma Nistor',
        email: 'example@example.com'
      }

      chai.request(server.listener)
        .post('/users')
        .send(user)
        .end((err, res) => {
          res.should.have.status(201)
          res.body.should.be.an('object')
          res.body.should.have.property('id')
          done()
        })
    })
  })

  describe('DELETE /users/{id}', () => {
    it('should DELETE one user', (done) => {
      let user = new User({
        name: 'Toma Nistor', 
        email: 'example@example.com'
      })

      user.save((err, user) => {
        chai.request(server.listener)
          .delete('/users/' + user._id)
          .send(user)
          .end((err, res) => {
            res.should.have.status(200)
            res.body.should.be.an('object')
            res.body.should.have.property('id').eql(String(user._id))
            done()
          })
      })
    })
  })

})