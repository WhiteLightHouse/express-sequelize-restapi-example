import SequelizeService from "./shared/SequelizeService";
import { news } from "../sequelize/models";
import { _News } from "../vo/";

export default class NewsService extends SequelizeService{
    constructor() {
        super({model: news, vo:_News});
    }
}
