import _BasicVo from "./shared/_BasicVo";

export default class _Comment  extends _BasicVo{
    user;
    content;
    commentId;

    constructor({createdAt, deletedAt, user, content, commentId, id}){
        super({id, createdAt, deletedAt});
        this.user = user;
        this.content = content;
        this.commentId = commentId;
    }

    isNotNull(){
        return !!(this.user && this.content && this.commentId);
    }
}
