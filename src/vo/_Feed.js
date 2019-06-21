import _BasicVo from "./shared/_BasicVo";

export default class _Feed  extends _BasicVo{
    title;
    link;
    date;
    publisher;
    background;

    constructor({id, createdAt, deletedAt, title, link, date, publisher, background}){
        super({id, createdAt, deletedAt});
        this.title = title;
        this.link = link;
        this.date = date;
        this.publisher = publisher;
        this.background = background;
    }

    isNotNull(){
        return !!(this.title && this.link && this.date && this.publisher && this.background);
    }
}
