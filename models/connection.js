import mysql from 'mysql';


// CREATING POOL CONNECTION
const connection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Root@123456',
    database: 'test'
});


const con = new Promise((resolve, reject)=>{
    connection.getConnection((e, conn)=>{
        conn.on('error', function(err) {      
            reject("[!] Err:", e.message);     
        });
        conn.connect((e)=>{
            console.log('\n[~] Database Connected!');
            resolve(conn);
        })
    })
})




export default con;