import {InnerCommentService} from "../service/";
import {_InnerComment} from '../vo/';
import {innerComment} from '../sequelize/models'
import BasicRouter from "./shared/BasicRouter";

const innerCommentRouter = new BasicRouter({model: innerComment, vo: _InnerComment, Service: InnerCommentService});

module.exports = innerCommentRouter.getInstance();
