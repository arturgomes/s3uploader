import express from 'express'
import cors from 'cors'
import morgan from 'morgan';
import mongoose from 'mongoose';
import path from 'path';
import filesRoutes from './routes/files';

// Porta do servidor
const PORT = process.env.PORT || 4000
// Host do servidor
const HOSTNAME = process.env.HOSTNAME || 'http://localhost'
// App Express
const app = express()

app.use(express.json());

app.use(morgan('dev'));
app.use(
    "/files",
    express.static(path.resolve(__dirname, "..", "tmp", "uploads"))
);


app.use(filesRoutes)

// Cors
app.use(cors({
    origin: ['http://localhost:3000']
}))
// Resposta padrão para quaisquer outras requisições:
app.use((req, res) => {
    res.status(404)
})


const mongoURI =
    process.env.MONGODB_URL || '';

console.log('mongo attempt', mongoURI);
mongoURI &&
    mongoose
        .connect(mongoURI)
        .then(() => console.log('MongoDB connected...'))
        .catch((err) => console.log(err));

// Inicia o sevidor
app.listen(PORT, () => {
    console.log(`Server running on ${HOSTNAME}:${PORT}`)
})