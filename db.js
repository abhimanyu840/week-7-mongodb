const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema({
  name: String,
  email: { type: String, unique: true, validate: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ },
  password: { type: String },
});

const Todo = new Schema({
  userId: { type: ObjectId, ref: 'users' },
  title: String,
  done: Boolean,
  createdAt: { type: Date, default: Date.now },
  dueAt: Date
});

const UserModel = mongoose.model('users', User);
const TodoModel = mongoose.model('todos', Todo);

module.exports = {
  UserModel,
  TodoModel
}