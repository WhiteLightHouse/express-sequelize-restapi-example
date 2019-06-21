import {FavorableFactorService} from '../service/';
import {_FavorableFactor} from "../vo/";
import {favorableFactor} from '../sequelize/models'
import BasicRouter from "./shared/BasicRouter";

const favorableFactorRouter = new BasicRouter({model: favorableFactor, vo: _FavorableFactor, Service: FavorableFactorService});

module.exports = favorableFactorRouter.getInstance();
