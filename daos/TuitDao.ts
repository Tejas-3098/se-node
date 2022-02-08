import TuitModel from "../mongoose/tuits/TuitModel";
import Tuit from "../models/Tuit";
import TuitDaoI from "../interfaces/TuitDaoI";
export default class TuitDao implements TuitDaoI{
    async findAllTuits(): Promise<Tuit[]> {
        return await TuitModel.find();
    }
    async findTuitsByUser(uid: string): Promise <any> {
        return await TuitModel.findById(uid);
    }
    async findTuitById(uid: string): Promise <any> {
        return await TuitModel.findById(uid).populate("postedBy").exec();
    }
    async createTuit(tuit: Tuit): Promise<Tuit> {
        return await TuitModel.create({...tuit});
    }
    async updateTuit(uid:string, tuit:Tuit): Promise<any> {
        return await TuitModel.updateOne({_id: uid},{$set: tuit});
    }
    async deleteTuit(uid:string): Promise<any> {
        return await TuitModel.deleteOne({_id: uid});
    }

}