import mongoose from "mongoose";

class Database{
    constructor(){
        this.mongo()
    }

    mongo(){
        mongoose.connect('mongodb://localhost:27017/to-do').then(() => {console.log("MongoDB conected")}).catch((err) => {console.log('Error:' + err)})
    }
}


export default new Database();