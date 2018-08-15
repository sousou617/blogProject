module.exports = function (app) {

  var userModel = require('../model/user/user.model.server');
  var passport = require('passport');
  var LocalStrategy = require('passport-local').Strategy; 
  var bcrypt = require("bcrypt-nodejs");


  passport.serializeUser(serializeUser);
  passport.deserializeUser(deserializeUser);
  passport.use(new LocalStrategy(localStrategy));
  

  app.get('/api/user', findUser);
  app.get('/api/user/:uid', findUserById);
  app.post('/api/user', createUser);
  app.put('/api/user/:uid', updateUser);
  app.delete('/api/user/:uid', deleteUser);
  
  // authenticate api
  app.post('/api/register', register);
  app.post('/api/login', passport.authenticate('local'), login);
  app.post('/api/logout', logout);
  app.post('/api/loggedIn', loggedIn); 

function localStrategy(username, password, done) {
    // console.log("localStrategy");
        userModel.findUserByUsername(username).then(
          (user) => {
            if(user && bcrypt.compareSync(password, user.password)) {
              return done(null, user);
            } else {
              return done(null, false);
            }
          }
        );
        // function(err) {
        //   if(err) {
        //     return done(err);
        //   }
        // }
}


  function loggedIn(req, res) {
    if(req.isAuthenticated()) {
      res.send(req.user);
    } else {
    res.send('0');
  }
}

function logout(req, res) {
   req.logout();
   res.sendStatus(200);
}

function serializeUser(user, done) {
  done(null, user);
}

function deserializeUser(user, done) {
  userModel.findUserById(user._id).then(
      function (user) {
        done(null, user);
      }, 
      function(err) {
        done(err, null);
      }
    );
}

  function login(req, res) {
    // console.log("login");
    var user = req.user;
    res.json(user);
}


function register(req, res) {
    var user = req.body;
    user.password = bcrypt.hashSync(user.password);
    userModel.createUser(user).then(
        function(user){
          req.login(user, function(err) {
             res.json(user);
          });
       }
     );
}


//  find users by given ID: 

function findUserById(req, res) {
    var uid = req.params['uid'];
    userModel.findUserById(uid).then(
      (data) => {
        res.json(data);
      }
    )
  }


  function findUser(req, res) {
    const username = req.query['username'];
    const password = req.query['password'];
//  find user by credentials
    if (username && password) {
      userModel.findUserByCredentials(username, password).then(
        (data) => {
          res.json(data);
        }
      )
      return;
    }
//  find user by username
    if(username) {
      userModel.findUserByUsername(username).then(
        (data) => {
          res.json(data);
        }
      )
      return;
    }
    res.json(null); //users or null?
  }
    
  function createUser(req, res) {
    var user = req.body;
    userModel.createUser(user).then(
      (data) => {
        res.json(data);
      }
      );
  }


	function updateUser(req, res) {
		var uid = req.params['uid'];
    var user = req.body;
    userModel.updateUser(uid, user).then(
      (data) => {
        res.json(data);
      }
    );
	}


	function deleteUser(req, res) {
		var uid = req.params['uid'];
		userModel.deleteUser(uid).then(
      (data) => {
         res.json(data);
      }
    );
     
	}
	
  
}