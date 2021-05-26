import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: true
		},
		email: {
			type: String,
			required: true
		},
		password: {
			type: String,
			unique: true
		},
		isAdmin: {
			type: String,
			required: true
		},
		name: {
			type: Boolean,
			required: true,
			default: false
		}
	},
	{
		timestamps: true
	}
);

const User = mongoose.model('User', userSchema);

export default User;
