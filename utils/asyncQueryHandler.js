// import { conn } from "../models/index.js";

import con from "../models/connection.js";

// this function will return query from the database

async function asyncQueryHandler(query){  
    return new Promise((resolve, reject)=>{
        con.then(e=>{
            e.query(query, (error, result)=>{
                if(error){
                    reject(error);
                }else{
                    resolve(JSON.parse(JSON.stringify(result)));
                }
            })
        })
        .catch(e=>{
            // reject if there is an error
            reject('[!] Err: ', e.message);
        })
    })
}

export default asyncQueryHandler;