import SequelizeService from "./shared/SequelizeService";
import { innerComment } from "../sequelize/models";
import { _InnerComment } from "../vo/";

export default class InnerCommentService extends SequelizeService{
    constructor() {
        super({model: innerComment, vo:_InnerComment});
    }
}
