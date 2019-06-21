import _InnerComment from "./_InnerComment";
import _BasicVo from "./shared/_BasicVo";

export default class _Comment extends _BasicVo {
    user;
    content;
    favorableFactorId;

    innerComments = [];

    constructor({id, createdAt, deletedAt, user, content, innerComments, favorableFactorId}){
        super({id, createdAt, deletedAt});
        this.user = user;
        this.content = content;
        this.favorableFactorId = favorableFactorId;

        if(innerComments) this.innerComments = innerComments.map(it => {return new _InnerComment(it)});
    }

    isNotNull(){
        return !!(this.user && this.content && this.favorableFactorId);
    }
}
