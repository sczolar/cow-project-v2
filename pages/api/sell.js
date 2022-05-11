import formidable from 'formidable';
var fs = require('fs');

export default async function handler(req, res) {
  var form = new formidable.IncomingForm();
  await form.parse(req, function (err, fields, files) {
    console.log(files.sellcow.filepath)
    var oldpath = files.sellcow.filepath;
    var newpath = "/home/hatz/playground/projects/cow-project-v2/public/uploads" + files.sellcow.newFilename;
    fs.rename(oldpath, newpath, function (err) {
      if (err) throw err;
      res.write('File uploaded and moved!');
      res.end();
    });
  });
}


// import nextConnect from 'next-connect';
// import multer from 'multer';

// const upload = multer({
//     storage: multer.diskStorage({
//       destination: '/home/hatz/playground/projects/cow-project-v2/public',
//       filename: (req, file, cb) => cb(null, file.originalname),
//     }),
//   });

// const apiRoute = nextConnect({
//   // Handle any other HTTP method
//   onNoMatch(req, res) {
//     res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
//   },
// });

// const uploadMiddleware = upload.array('theFiles');

// apiRoute.use(uploadMiddleware);
// // Process a POST request
// apiRoute.post((req, res) => {
//   res.status(200).json({ data: 'success' });
// });

// export default apiRoute;

export const config = {
  api: {
    bodyParser: false, // Disallow body parsing, consume as stream
  },
};