import { DeleteObjectCommand } from '@aws-sdk/client-s3';
import 'dotenv/config' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import

import mongoose, { Schema } from 'mongoose';
import { s3 } from '../libs/s3Client'
export interface FileInterface extends mongoose.Document {
    _id: Schema.Types.ObjectId,
    size: Number
    key: String
    name: String
    url: String
}
const fileSchema = new Schema(
    {
        size: Number,
        name: String,
        key: String,
        url: String,
    },
    {
        timestamps: true,
    }
);


fileSchema.pre("remove", async function () {
    if (process.env.STORAGE_TYPE === "s3") {
        const fileToDelete: any = !!this.key && new DeleteObjectCommand({ Bucket: process.env.BUCKET_NAME, Key: this.key })

        const data = await s3.send(fileToDelete)
            .then(response => {
                console.log(response);
            })
            .catch(response => {
                console.log(response);
            });
        return data
    }
    // else {
    //     return promisify(fs.unlink)(
    //         path.resolve(__dirname, "..", "..", "tmp", "uploads", this.key)
    //     );
    // }
});

export const File = mongoose.model('Files', fileSchema);
