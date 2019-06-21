import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(express.static('dist'));

app.use('/api/favorableFactor', require('./src/routes/favorableFactorRouter'));
app.use('/api/comment', require('./src/routes/commentRouter'));
app.use('/api/company', require('./src/routes/companyRouter'));
app.use('/api/feed', require('./src/routes/feedRouter'));
app.use('/api/innerComment', require('./src/routes/innerCommentRouter'));
app.use('/api/news', require('./src/routes/newsRouter'));

module.exports = app;
