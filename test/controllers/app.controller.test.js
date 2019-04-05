const chai = require('chai');
const sinon = require('sinon');
const expect = chai.expect;
const indexPage = require('../../controllers/app.controller.js');

const user = {
  addUser: (name) => {
    this.name = name;
  }
}

describe('AppController', function() {
  describe("getIndexPage", function() {
    it('should send hey when user is logged in', function() {
      // instantiate a user object with an empty isLoggedIn function
      let user = {
        isLoggedIn: function() {}
      }
      // Stub isLoggedIn function and make it return true always
      const isLoggedInStub = sinon.stub(user, 'isLoggedIn').returns(true);
      let req = {
        user: user
      }
      let res = {
        send: sinon.spy()
      }
      indexPage.getIndexPage(req, res);
      expect(res.send.calledOnce).to.be.true;
      expect(res.send.firstCall.args[0]).to.equal('hey');
      expect(isLoggedInStub.calledOnce).to.be.true;
    })
    it('should send something else when user is NOT logged in', function() {
      let user = {
        isLoggedIn: function(){}
      }
      const isLoggedInStub = sinon.stub(user,'isLoggedIn').returns(false);
      let req = {
        user: user
      }
      let res = {
        send: sinon.spy()
      }
      indexPage.getIndexPage(req, res);
      expect(res.send.calledOnce).to.be.true;
      expect(res.send.firstCall.args[0]).to.equal("Ooops, You need to log in to acces this page");
      expect(isLoggedInStub.calledOnce).to.be.true;
    })
    // it('should send hey', function(){
    //   let req = {};
    //   let res = {
    //     send: sinon.spy()
    //   }
    //   indexPage.getIndexPage(req, res);
    //   console.log(res.send);
    //   expect(res.send.calledOnce).to.be.true;
    //   expect(res.send.firstCall.args[0]).to.equal('bla')
    // })
    // it('should return index page', function() {
    //   let req = {}
    //   let res =  {
    //     send: sinon.spy()
    //   }
    //   indexPage.getIndexPage(req, res);
    //   console.log(res.send);
    // })
  })
})

describe('User', function() {
  describe('addUser', function() {
    it('should add a user', function() {
      sinon.spy(user, 'addUser');
      user.addUser('John Doe');
      console.log(user.addUser);
      expect(user.addUser.calledOnce).to.be.true;
    })
  })
})
