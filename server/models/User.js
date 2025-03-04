import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({

userName: {
    type: String,
    required: true,
    unique: true,
    trim: true,

},


email: {
    type: String,
    required: true,
    unique: true,
    trim: true,

},


password: {
    type: String,
    required: true,
    trim: true,

},


role: {
    type: String,
    default: 'user'

},

});


const User = mongoose.model('User', UserSchema);
export default User;