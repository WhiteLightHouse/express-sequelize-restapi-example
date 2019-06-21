import SequelizeService from "./shared/SequelizeService";
import { company } from "../sequelize/models";
import { _Company } from "../vo/";

export default class CompanyService extends SequelizeService{
    constructor() {
        super({model: company, vo:_Company});
    }
}
