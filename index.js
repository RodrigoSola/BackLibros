import bodyParser from "body-parser"
import express from "express"
import { PORT } from "../backend/config.js"
import cors from "cors"
import { connectDB } from "../backend/db/db.js"
import cookieParser from "cookie-parser"
import session from "express-session"
import bookRouter from "./routes/bookRoutes.js"


const app = express()

app.use(cors({
    origin: "*",
    methods: [ "GET", "PUT", "POST", "DELETE", "OPTIONS"],
    credentials: true,
    optionsSuccessStatus: 200
}))

app.use(express.json({ limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())

app.use(session({
    secret : "secret",
    resave : false,
    saveUninitialized : false,
    cookie: {
        secure: false,
        maxAge: 24 * 60 * 60 * 1000
    }
}))


console.log("Conectando a MongoDB...");
connectDB()

app.use("/api/books", bookRouter)
console.log("Exportando rutas desde bookRouter");
console.log(bookRouter);

app.listen(PORT, () => {
    console.log(`\n🚀 ===== SERVIDOR INICIADO EXITOSAMENTE ===== 🚀`);
    console.log(`📡 Puerto: ${PORT}`);
})
