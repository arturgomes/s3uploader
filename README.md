# S3Uploader

S3Uploader is an application built using Node.js, MongoDB, Mongoose, and AWS S3, designed to facilitate the storage and management of files in the cloud. This project serves as a practical demonstration of how to integrate these powerful technologies to create efficient and scalable storage solutions.

## Motivation

This project was developed as part of my learning and experimentation process. With a special focus on better understanding cloud storage operations and how to integrate them into modern web applications, S3Uploader aims to offer an effective solution for file management, ensuring synchronization between MongoDB and AWS S3.

## Features

- **File Storage on AWS S3**: Facilitates uploading files to AWS S3 directly from a Node.js application.
- **Integration with MongoDB and Mongoose**: Utilizes MongoDB and Mongoose to store and manage file metadata, creating a cohesive data management experience.
- **Automatic Removal**: Implements a system where files in S3 are automatically removed when their corresponding records in MongoDB are deleted, maintaining data integrity.

## How to Use

Some things to consider:

- You need to create a `.env` file with your S3 bucket details. I've also included `HOSTNAME` and `PORT` here.

```env
// .env
HOSTNAME=___
PORT=___
BUCKET_NAME=______
AWS_DEFAULT_REGION=___
STORAGE_TYPE=s3
MONGODB_URL=_____
```

- You will use the AWS CLI to authenticate with your AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY, obtained from your AWS Console account.
- You also need to add the MONGODB_URL with your MongoDB connection details. Locally, I use a Docker container.

## Contributions

Contributions are always welcome! If you have any ideas to improve the project, feel free to create an issue or submit a pull request.

## License

I'm no putting any license in here!
