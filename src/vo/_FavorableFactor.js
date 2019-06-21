import _Company from "./_Company";
import _Comment from "./_Comment";
import _BasicVo from "./shared/_BasicVo";

export default class _FavorableFactor extends _BasicVo{
    title;
    content;
    date;
    publication;
    type;
    image;
    link;

    company;
    comments = [];

    constructor({id, createdAt, deletedAt, date, company, title, content, publication, type, image, link, comments}){
        super({id, createdAt, deletedAt});

        this.date = date;
        this.title = title;
        this.content = content;
        this.publication = publication;
        this.type = type;
        this.image = image;
        this.link = link;

        this.company = new _Company(company);
        if(comments) this.comments = comments.map(it => {return new _Comment(it)});
    }

    isNotNull(){
        return !!(this.title && this.content && this.publication && this.type && this.date);
    }
}
