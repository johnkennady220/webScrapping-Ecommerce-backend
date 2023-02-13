// const { data } = require('cheerio/lib/api/attributes');
const express = require('express');
const router = express.Router();
const productData =require("../model/products.model");



router.get("/mobiles", (req, res) => {
    try{
        let search = req.query.search;
        let {page,size} = req.query;
        if (!page){
            page = 1;
        };
        if (!size){
            size = 10;
        };
        const limit = parseInt(size);
        console.log("Limit:", limit);
        const skip = (page-1)* size;
        console.log("skip:", skip);

        productData.find({
            title: {$regex: '.*' + search + '.*', $options: 'i'},
        }, (err, data) => {
            if (err) {
                res.status(403).json("product not found")
            }else {
                res.status(200).json({
                    page, 
                    size, 
                    data: data,
                });
            }
        }
        ).limit(limit).skip(skip);
    } catch (error) {
        res.status(500).json("Internal Server Error");
        console.log("Error while to get data:", error);
    };

});

module.exports = router;
