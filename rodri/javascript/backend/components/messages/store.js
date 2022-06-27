const db = require('mongoose');
const Model = require('./model');

const uri = "mongodb+srv://db_user_platzi_nodejs:LPNuNiFxlq5SbRSc@cluster0.ul3ff.mongodb.net/telegram";

db.Promise = global.Promise;
db.connect(uri, {
    useNewUrlParser: true,
});

console.log("[database] Connected to MongoDB");

const addMessage = (message) => {
  console.log(message);
  const myMessage = new Model(message);
  myMessage.save();
};

const getMessages = async (filterUser) => {
  const messages = await Model.find(filterUser ? {user: filterUser} : {});
  return messages;
};


const updateText = async (id, message) => {
  const result = await Model.updateOne({_id: id}, {message: message});
  return result;
};

const deleteText = async (id) => {
  const result = await Model.deleteOne({_id: id});
  return result;
};

module.exports = {
    add: addMessage,
    list: getMessages,
    update: updateText,
    delete: deleteText,
    //TODO: get
}