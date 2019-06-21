import Verification from "./Verification";

export default class SequelizeService extends Verification {
    model;
    vo;
    include;

    constructor({model, vo}) {
        super({compareWith: vo.default});
        this.model = model;
        this.vo = vo.default;
        this.include = this.getInclude(model);
        console.log(this.include);
    }

    // ======= CREATE ======= //

    create(req, res){ // Controller
        if(Array.isArray(req.body))
            return this.createBulk(req.body.map(it => {return new this.vo(it)}), req, res);
        else
            return this.createOne(new this.vo(req.body), req, res);
    }

    createOne(voInstance, req, res){
        if(!this.checkVo(voInstance)) return this.json("wrong data", req, res);
        return () => {
            this.model.create(voInstance)
                .then(result => { res.json(result); })
                .catch(err => { console.error(err); });
        };
    }

    createBulk(voInstanceArray, req, res){
        if(!this.checkVo(voInstanceArray)) return this.json("wrong data", req, res);
        return () => {
            this.model.bulkCreate(voInstanceArray)
                .then(result => { res.json(result); })
                .catch(err => { console.error(err); });
        };
    }

    // ======= SELECT ======= //

    select(req, res){ // Controller
        if(req.query.id)
            return this.selectOne(req.query.id, req, res);
        else if(req.query.page)
            return this.selectAllByPage(req.query.page, req, res);
        else
            return this.selectAll(req, res);
    }

    selectOne(id, req, res){
        return () => {
            this.model.findOne({
                where: {id: id, deletedAt: null},
                include: this.include,
            })
                .then(result => { res.json(result); })
                .catch(err => { console.error(err); });
        };
    }

    selectAll(req, res){
        return () => {
            this.model.findAll({
                where: {deletedAt: null},
                include: this.include,
                order: [['createdAt', 'DESC']],
            })
                .then(result => { res.json(result); })
                .catch(err => { console.error(err); });
        };
    }

    selectAllByPage(page, req, res){
        return () => {
            this.model.findAll({
                where: {deletedAt: null},
                include: this.include,
                limit: 100,
                offset: 100 * (page - 1),
                order: [['createdAt', 'DESC']],
            })
                .then(result => { res.json(result); })
                .catch(err => { console.error(err); });
        };
    }

    // ======= UPDATE ======= //

    update(req, res){ // Controller
        return this.updateOne(req.query.id, new this.vo(req.body), req, res);
    }

    updateOne(id, voInstance, req, res){
        if(!this.checkVo(voInstance)) return this.json("wrong data", req, res);
        return () => {
            this.model.update(voInstance, {where: {id: id}})
                .then(result => { res.json(result); })
                .catch(err => { console.error(err); });
        };
    }

    // ======= DELETE ======= //

    delete(req, res){ // Controller
        return this.deleteOne(req.query.id, req, res);
    }

    deleteOne(id, req, res){
        return () => {
            this.model.destroy({where: {id: id}})
                .then(result => { res.json(result); })
                .catch(err => { console.error(err); });
        };
    }

    // ======= RESTORE ======= //

    restore(req, res){ // Controller
        return this.restoreOne(req.query.id, req, res);
    }

    restoreOne(id, req, res){
        return () => {
            this.model.restore({where: {id: id}})
                .then(result => { res.json(result); })
                .catch(err => { console.error(err); });
        };
    }
}

