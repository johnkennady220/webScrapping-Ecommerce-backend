
var express = require('express');
var router = express.Router();
const {dbURL,mongodb,MongoClient,dbName}  = require('../dbConfig')
/* GET home page. */


router.get('/',async(req,res)=>{
    let client = await MongoClient.connect(dbURL);
    try {
        const db = await client.db(dbName);
        let beauty = await db.collection('Beauty&care').find().toArray();
        let dress = await db.collection('dress').find().toArray();
        let furnitures = await db.collection('furnitures').find().toArray();
        let laptops = await db.collection('laptops').find().toArray();
        let mobiles = await db.collection('mobiles').find().toArray();
        let shelves = await db.collection('shelves').find().toArray();
        let shoes = await db.collection('shoes').find().toArray();
        res.json({
            statusCode:200,
            message:"Fetched successfully",
            products_data:{beauty_product:beauty,
                dress_product:dress,
                furnitures_product:furnitures,
                laptops_product:laptops,
                mobiles_product:mobiles,
                shelves_product:shelves,
                shoes_product:shoes}




        })
    } catch (error) {
        res.json({
            message:"server error",
            error:error
        })
        console.log(error);
    }
    finally{
      client.close();
}
})

module.exports = router;

