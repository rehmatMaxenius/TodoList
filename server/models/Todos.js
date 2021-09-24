import mongoose from 'mongoose';

const todoSchema = mongoose.Schema({
    title: String,
    date: String,
    status:Boolean
},{ timestamps: true });

const Todos = mongoose.model('Todos', todoSchema);

export default List;