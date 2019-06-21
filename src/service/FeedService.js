import SequelizeService from "./shared/SequelizeService";
import { feed } from "../sequelize/models";
import { _Feed } from "../vo/";

export default class FeedService extends SequelizeService{
    constructor() {
        super({model: feed, vo:_Feed});
    }
}
