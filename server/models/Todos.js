import mongoose from 'mongoose';

const todoSchema = mongoose.Schema({
    title: String,
    date: String,
    status:Boolean,
    list_id: {type: mongoose.Types.ObjectId, required: true, ref: 'List'},
},{ timestamps: true });

const Todos = mongoose.model('Todos', todoSchema);

export default List;