import 'dotenv/config' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import

import mongoose, { Schema } from 'mongoose';

export interface FileInterface extends mongoose.Document {
    _id: Schema.Types.ObjectId,
    size: Number
    key: String
    name: String
    title: String
    url: String
}
const fileSchema = new Schema(
    {
        title: String,
        size: Number,
        name: String,
        key: String,
        url: String,
    },
    {
        timestamps: true,
    }
);


export const File = mongoose.model('Files', fileSchema);
