const db = require('../db');
const Record = require('./record');
const redis = require('../redis');

class Toot extends Record{
    static tableName(){
        return "toots";
    }

    static columns(){
        return ["user_id", "body"];
    }

    static create(user, body){
        return new this({user_id: user.data.id, body: body}).save();
    }

    insert(){
        let insertPromise = super.insert();
        return new Promise((resolve, reject) =>{
            insertPromise.then((toot) =>{
                console.log(toot);
                console.log(redis());
                let conn = redis();
                console.log(toot);
                conn.publish('local', toot.toJSON());
                resolve(toot);
            }).catch((error) =>{
                reject(error);
            })
        })
    }
}

module.exports = Toot;