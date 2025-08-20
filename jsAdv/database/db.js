const mongoos=require('mongoose')
const ObjectId=mongoos.ObjectId
const Schema=mongoos.Schema
mongoos.connect('mongodb+srv://user:147258369@cluster0.p3qerxx.mongodb.net/todo-list')

const User=new Schema({
    email:{type:String,unique:true},
    password:String,
    name:String
})

const Todo=new Schema({
        title:String,
        done:Boolean,
        userId:ObjectId
})

const UserModel=mongoos.model('users',User)
const TodoModel=mongoos.model('todos',Todo)
module.exports= {
    UserModel:UserModel,
    TodoModel:TodoModel
}