import mongoose, { Document, Schema } from 'mongoose';

export interface IUsers {
    firstname: string;
}

export interface IUserModel extends IUsers, Document {}

const UserSchema: Schema = new Schema(
    {
        firstname: { type: String, required: true }
    },
   
);

export default mongoose.model<IUserModel>('Users', UserSchema);