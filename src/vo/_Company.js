import _BasicVo from "./shared/_BasicVo";

export default class _Company  extends _BasicVo{
    name;
    icon ;
    currency;

    favorableFactorId;

    constructor({id, createdAt, deletedAt, name, icon, currency, favorableFactorId}){
        super({id, createdAt, deletedAt});

        this.name = name;
        this.icon = icon;
        this.currency = currency;

        this.favorableFactorId = favorableFactorId;
    }

    addFavorableFactorId(id){
        this.favorableFactorId = id;
        return this;
    }

    isNotNull(){
        return !!(this.name && this.icon && this.currency && this.favorableFactorId);
    }
}
