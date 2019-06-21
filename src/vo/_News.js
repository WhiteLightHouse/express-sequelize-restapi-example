import _BasicVo from "./shared/_BasicVo";

export default class _News  extends _BasicVo{
    title;
    content;
    date;
    publisher;
    link;
    image;

    constructor({id, createdAt, deletedAt, title, content, date, publisher, link, image}){
        super({id, createdAt, deletedAt});
        this.title = title;
        this.content = content;
        this.date = date;
        this.publisher = publisher;
        this.link = link;
        this.image = image;
    }

    isNotNull(){
        return !!(this.title && this.content && this.date && this.publisher && this.link && this.image);
    }
}
