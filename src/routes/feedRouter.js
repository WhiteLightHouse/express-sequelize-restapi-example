import { FeedService } from "../service/";
import { feed } from '../sequelize/models'
import { _Feed } from "../vo/";
import BasicRouter from "./shared/BasicRouter";

const feedRouter = new BasicRouter({model: feed, vo: _Feed, Service: FeedService});

module.exports = feedRouter.getInstance();
