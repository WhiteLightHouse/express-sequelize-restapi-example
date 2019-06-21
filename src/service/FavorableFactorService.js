import SequelizeService from "./shared/SequelizeService";
import { favorableFactor, company } from "../sequelize/models";
import { _FavorableFactor } from "../vo/";
import CompanyService from "./CompanyService";

export default class FavorableFactorService extends SequelizeService{
    companyService = new CompanyService();

    constructor() {
        super({model: favorableFactor, vo:_FavorableFactor});
    }

    createOne(voInstance, req, res){
    if(!this.checkVo(voInstance)) return this.json("wrong data", req, res);
    return () => {
        this.model.create(voInstance, {
            include: [company]
        })
            .then(result => { res.json(result); })
            .catch(err => { console.error(err); });
    };
    }

    createBulk(voInstanceArray, req, res){
        if(!this.checkVo(voInstanceArray)) return this.json("wrong data", req, res);
        return async () => {
            let transaction;
            try {
                transaction = await this.model.sequelize.transaction();
                const createdResult = await this.model.bulkCreate(voInstanceArray,
                    { individualHooks: true, transaction: transaction},
                    );

                const companies = createdResult.map((it, index) => {
                    return voInstanceArray[index].company.addFavorableFactorId(it.id);
                });

                if(this.companyService.checkVo(companies)){
                    const companyCreatedResult = await this.companyService.model.bulkCreate(companies, {transaction});
                    transaction.commit();
                    return res.json(createdResult.map((it, index) => {
                        it.dataValues.company = companyCreatedResult[index];
                        return it;
                    }));
                } else {
                    transaction.rollback();
                    return this.json("wrong data", req, res)();
                }
            } catch(e) {
                transaction.rollback();
                console.error(e);
            }
        };
    }
}
