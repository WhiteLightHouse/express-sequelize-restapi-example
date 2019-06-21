import {CommentService} from "../service/";
import {_Comment} from '../vo/';
import {comment} from '../sequelize/models'
import BasicRouter from "./shared/BasicRouter";

const commentRouter = new BasicRouter({model: comment, vo: _Comment, Service: CommentService});

module.exports = commentRouter.getInstance();


/*
* EXAMPLE
* */

// commentRouter.addGetRouter('/test', (req, res) => {
//     return res.json({message: 'test'});
// });
//
// commentRouter.addPostRouter('/test', (req, res) => {
//     return res.json({message: 'test'});
// });
