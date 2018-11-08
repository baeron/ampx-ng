const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  guid: String,
  userName: String,
  firstName: String,
  lastName: String,
  companyName: String,
  city: String,
  phone: String,
  password: String
});

const User = module.exports = mongoose.model('User', UserSchema);

const superAdmin = new User({
  email: 'superAdmin@ampx.ca',
  guid : '00000000-0000-0000-0000-000000000000',
  userName: 'superAdmin',
  firstName: 'superadmin',
  lastName: 'superadmin',
  companyName: 'ampx.ca',
  city: 'ampx',
  phone: '0-00-000-00-00',
  password: 'sadmin123'
});

const admin = new User({
  email: 'admin@ampx.ca',
  guid : '11111111-1111-1111-1111-111111111111',
  userName: 'admin',
  firstName: 'admin',
  lastName: 'admin',
  companyName: 'ampx.ca',
  city: 'ampx',
  phone: '1-11-111-11-11',
  password: 'admin123'
});

module.exports.getUserById = function(id, callback){
  User.findById(id, callback);
}

module.exports.getUserByEmail = function(email, callback){
  const query = {email: email}
  User.findOne(query, callback);
}

module.exports.addUser = function(newUser, callback){
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if(err) {
        console.log(err);
      } else {
        newUser.password = hash;
        newUser.save(callback);
      }
    });
  });
}

module.exports.comparePassword = function(candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if(err) {
      console.log(err);
    } else {
      callback(null, isMatch);
    }
  });
};

/*
User.create(superAdmin, admin, function(error){
  if(error) {
    console.log(error);
  } else {
    console.log('admin amd super admin was created');
  }
});
*/