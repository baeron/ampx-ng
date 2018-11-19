// TODO: move database string to envirovment for prod and dev

module.exports = {
  // for dev
  database: 'mongodb://localhost:27017/ngampx',
  
  // for deploy
  // database: 'mongodb://baeron:baeron314@ds241737.mlab.com:41737/ampx',

  secret: 'mysecret' 
}