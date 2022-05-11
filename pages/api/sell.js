import nc from "next-connect";
import multer from "multer";
import path from "path";
import List from "../../models/list";
import { connectDB } from "../../middleware/mongodb";

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = nc();

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      Date.now() + path.extname(file.originalname)
    );
  },
});

let upload = multer({
  storage: storage,
});

let uploadFile = upload.single("sellcow");
handler.use(uploadFile);

handler.post(async (req, res) => {
  try {
    await connectDB()
    const { name, price, detail, dlist } = req.body
    console.log(name, price, detail, dlist)
    let link = "/uploads/"+req.file.filename;
    const list = await new List({ name, price, detail, dlist, link })
    list.save()
    // res.redirect("/buy");
    res.status(200).send({
      success: true, list
    });
  } catch (error) {
    res.status(400).send({
      success: false, message: error.message
    });
  }

});

export default handler;





// import formidable from 'formidable';
// import fs from "fs";
// import mv from "mv"

// export default async function handler(req, res) {
//   var form = new formidable.IncomingForm();
//   await form.parse(req, function (err, fields, files) {
//     console.log(files)
//     var oldpath = files.sellcow.filepath;
//     var newpath = "/home/hatz/playground/projects/cow-project-v2/public/uploads/"+files.sellcow.newFilename;
//     mv(oldpath, newpath, function (err) {
//       if (err) throw err;
//       res.write('File uploaded and moved!');
//       res.end();
//     });
//   });
// }


// import nextConnect from 'next-connect'
// import multiparty from 'multiparty'

// const middleware = nextConnect()

// middleware.use(async (req, res, next) => {
//   const form = new multiparty.Form()
//   await form.parse(req, function (err, fields, files) {
//     req.body = fields
//     req.files = files
//     next()
//   })
// })


// export const config = {
//   api: {
//     bodyParser: false, // Disallow body parsing, consume as stream
//   },
// };