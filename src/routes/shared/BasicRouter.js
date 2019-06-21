export default class BasicRouter{
    router = require('express').Router();
    service;

    constructor({model, vo, Service}) {
        this.service = new Service.default({model: model, vo: vo})
    }

    addGetRouter(path, cbFunction){
        this.router.get(path, cbFunction)
    }

    addPostRouter(path, cbFunction){
        this.router.post(path, cbFunction)
    }

    getInstance(){
        this.router.get('/', (req, res) =>{
            this.service.select(req, res)();
        });

        this.router.post('/', (req, res) => {
            const work = req.query.work;
            if(work === 'create')
                this.service.create(req, res)();
            else if(work === 'update')
                this.service.update(req, res)();
            else if(work === 'delete')
                this.service.delete(req, res)();
            else if(work === 'restore')
                this.service.restore(req, res)();
            else
                this.service.json("work is not defined", req, res)();
        });

        return this.router;
    }
}
