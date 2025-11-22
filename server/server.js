import express from "express";
import fs from "fs";
import cors from "cors";
import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const usersFile = path.join(__dirname, "users.json");


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (!fs.existsSync(usersFile)) {
  console.log("Arquivo de usuários não encontrado, criando...");
  fs.writeFileSync(usersFile, "[]", "utf-8");
}

const uploadDir = path.join(__dirname, "uploads");
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir);

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + "-" + file.originalname;
    cb(null, uniqueName);
  },
});

const upload = multer({ storage });

const generateUniqueId = () =>
  Date.now().toString() + Math.floor(Math.random() * 10000).toString();

app.post(
  "/register",
  upload.fields([
    { name: "pfp", maxCount: 1 },
    { name: "diplomas", maxCount: 10 },
  ]),
  (req, res) => {
    let users = [];

    try {
      users = JSON.parse(fs.readFileSync(usersFile, "utf-8")) || [];
    } catch (err) {
      console.error("Erro ao ler o arquivo de usuários:", err);
      users = [];
    }

    const userId = req.body.id || generateUniqueId();

    const user = {
      id: userId,
      username: req.body.username || "",
      email: req.body.email || "",
      password: req.body.password || "",
      title: req.body.title || "",
      specialty: req.body.specialty || "",
      approach: req.body.approach || "",
      location: req.body.location || "",
      experience: req.body.experience || "",
      description: req.body.description || "",
      languages: req.body.languages || "",
      phone: req.body.phone || "",
      contactEmail: req.body.contactEmail || "",
      whatsapp: req.body.whatsapp || "",
      disponibility: req.body.disponibility || "",
      sessionType: req.body.sessionType || "",
      profileImage: req.files?.pfp ? req.files.pfp[0].path : null,
      diplomas: req.files?.diplomas ? req.files.diplomas.map((f) => f.path) : [],
    };

    users.push(user);
    fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));

    res.json({ message: "Usuário cadastrado com sucesso!", id: user.id });
  }
);

app.post("/login", (req, res) => {
  console.log("Verificando login...");

  if (!fs.existsSync(usersFile)) {
    return res.status(500).json({ message: "Arquivo de usuários não encontrado." });
  }

  const users = JSON.parse(fs.readFileSync(usersFile, "utf-8"));
  const { email, password } = req.body;

  const user = users.find(
    (u) => u.email.toLowerCase() === email.toLowerCase() &&
           u.password === password
  );

  if (!user) {
    return res.status(401).json({ message: "Email ou senha incorretos." });
  }

  return res.json({
    message: "Login realizado!",
    user: {
      id: user.id,
      username: user.username,
      email: user.email,
      profileImage: user.profileImage || null,
    },
  });
});

app.listen(3001, () =>
  console.log("Servidor rodando em http://localhost:3001")
);
