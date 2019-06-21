import SequelizeService from "./shared/SequelizeService";
import { comment } from "../sequelize/models";
import { _Comment } from "../vo/";

export default class CommentService extends SequelizeService{
    constructor() {
        super({model: comment, vo:_Comment});
    }
}
