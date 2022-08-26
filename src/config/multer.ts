import 'dotenv/config' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import

import multer, { Options } from 'multer';
import path from 'path';
import crypto from 'crypto';
import multerS3 from 'multer-s3'
import { s3 } from '../libs/s3Client'

const storageTypes = {
  local: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.join(__dirname, '..', '..', 'tmp', 'uploads'))
    },
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, hash) => {
        const fileName = `${hash.toString('hex')}-${file.originalname}`
        if (err) cb(err, fileName)
        cb(null, fileName);
      })
    },
  }),

  s3: multerS3({
    s3: s3,
    bucket: process.env.BUCKET_NAME || '',
    contentType: multerS3.AUTO_CONTENT_TYPE,
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: (req, file, cb) => {
      crypto.randomBytes(16, (err, hash) => {
        const fileName = `${hash.toString('hex')}-${file.originalname}`
        if (err) cb(err, fileName)
        cb(null, fileName);
      })
    },
    acl: 'public-read'
  })
}
export default {
  dest: path.join(__dirname, '..', '..', 'tmp', 'uploads'),
  storage: storageTypes.s3,
  limits: {
    fileSize: 4 * 1024 * 1024, // 4MB
  },
  fileFilter: (req, file, cb) => {
    const mimeTypes = [
      'image/jpeg',
      'image/png',
      'application/pdf'
    ];

    if (!mimeTypes.includes(file.mimetype)) {
      return cb(new Error('Invalid file type'));
    }

    cb(null, true);
  },
} as Options;