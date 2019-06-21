import {NewsService} from "../service/";
import {_News} from '../vo/';
import {news} from '../sequelize/models'
import BasicRouter from "./shared/BasicRouter";

const newsRouter = new BasicRouter({model: news, vo: _News, Service: NewsService});

module.exports = newsRouter.getInstance();
