import express from 'express';
import session from 'express-session';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import mongoose from 'mongoose';
import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';
import googleRouter from './routes/oauth/google.js';
import ingredientsRouter from "./routes/ingredient/ingredients.js"
import recipeRouter from "./routes/recipe/recipe.js"
import {fileURLToPath} from 'url';
import cors from 'cors';


const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    secret: "testSign", //Used to sign sessionIDs. Will change later. -Tyler
    resave: false,
    saveUninitialized: true,
    cookie: { path: '/', httpOnly: true, secure: false, maxAge: (1000 * 60 * 60 * 24)}
}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/ingredient', ingredientsRouter);
app.use('/auth/google', googleRouter);
app.use('/recipes',recipeRouter)
//connection to database
mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

export default app;
