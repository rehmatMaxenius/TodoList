import mongoose from 'mongoose';

const listSchema = mongoose.Schema({
    name: String,
    todos: {type: mongoose.Types.ObjectId, required: true, ref: 'Todos'},
},{ timestamps: true });

const List = mongoose.model('List', listSchema);

export default List;