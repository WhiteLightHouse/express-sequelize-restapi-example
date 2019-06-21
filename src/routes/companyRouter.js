import {CompanyService} from "../service/";
import { company } from "../sequelize/models";
import {_Company} from "../vo/";
import BasicRouter from "./shared/BasicRouter";


const companyRouter = new BasicRouter({model: company, vo: _Company, Service: CompanyService});

module.exports = companyRouter.getInstance();
