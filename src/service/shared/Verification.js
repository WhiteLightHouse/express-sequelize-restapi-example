import Message from "./Message";

export default class Verification extends Message{
    compareWith;

    constructor({compareWith}) {
        super();
        this.compareWith = compareWith
    }

    // ======= SHARED ======= //

    checkVo(vo){
        const checkOne = item => {
            return item instanceof this.compareWith && item.isNotNull();
        };

        if(Array.isArray(vo)){
            if(vo.length === 0) return false;
            let flag = true;
            vo.forEach(it => {if(!checkOne(it)) flag = false; });
            return flag;
        } else {
            return checkOne(vo);
        };
    }

    associationFilter(value) {
        return value.associationType === 'HasMany' || value.associationType === 'HasOne';
    };

    getInclude(model){
        return Object.values(model.associations).filter(this.associationFilter).map((val) => {
            return {model: val.target, required: false, where: {deletedAt: null}, include: this.getInclude(val.target)};
        });
    }
}
