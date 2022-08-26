import express from 'express'
import multer from 'multer'
import multerConfig from '../config/multer'
const filesRoutes = express.Router()
import { File } from '../models/File'
filesRoutes.get("/posts", async (req, res) => {
  const posts = await File.find();

  return res.json(posts);
});

filesRoutes.post("/file", multer(multerConfig).single("file"), async (req, res) => {
  // const { originalname: name, size, key, location: url = "" } = req.file;
  console.log(req.file)
  // const post = await File.create({
  //   name,
  //   size,
  //   key,
  //   url
  // });

  return res.json(req.file);
  // return res.json(post);
});

filesRoutes.delete("/posts/:id", async (req, res) => {
  const post = await File.findById(req.params.id);

  !!post && await post.remove();

  return res.send();
});


export default filesRoutes