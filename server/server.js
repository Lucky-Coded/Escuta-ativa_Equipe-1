import express from "express";
import fs from "fs";
import cors from "cors";
import multer from "multer";

const app = express();
app.use(cors());

const uploadDir = "./uploads";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + "-" + file.originalname;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

app.post(
  "/register",
  upload.fields([
    { name: "pfp", maxCount: 1 },
    { name: "diplomas", maxCount: 10 },
  ]),
  (req, res) => {
    console.log("REQ.BODY:", req.body);
    console.log("REQ.FILES:", req.files);

    const user = {
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      title: req.body.title,
      specialty: req.body.specialty,
      approach: req.body.approach,
      location: req.body.location,
      experience: req.body.experience,
      description: req.body.description,
      languages: req.body.languages,
      phone: req.body.phone,
      contactEmail: req.body.contactEmail,
      whatsapp: req.body.whatsapp,
      disponibility: req.body.disponibility,
      sessionType: req.body.sessionType,
      profileImage: req.files?.pfp ? req.files.pfp[0].path : null,
      diplomas: req.files?.diplomas
        ? req.files.diplomas.map((f) => f.path)
        : [],
    };

    let users = [];
    if (fs.existsSync("./users.json")) {
      users = JSON.parse(fs.readFileSync("./users.json"));
    }

    users.push(user);
    fs.writeFileSync("./users.json", JSON.stringify(users, null, 2));

    res.json({ message: "Usuário cadastrado com sucesso!" });
  }
);

app.listen(3001, () =>
  console.log("Servidor rodando em http://localhost:3001")
);
