var express = require('express');
// const axios = require("axios");
// const cheerio = require("cheerio");
var router = express.Router();
// let {dbURL,mongodb,MongoClient,dbName} = require('../dbConfig')


// // Mobile category
// {
//     const mobiles = [];
// const fetchMobiles = async () => {
//   try {
//       const response = await axios.get('https://www.amazon.com/s?k=mobile+phone+that+cost+about+1000&rh=n%3A7072561011%2Cp_36%3A14674876011&dc&crid=26PNVPKVVT07P&qid=16441926119&rnid=14674871011&sprefix=mobile+phone+abo%2Caps%2C468&ref=sr_nr_p_36_5')
    
//       const html = response.data;

//       const $ = cheerio.load(html);

      

// $('div.s-result-item.s-asin.sg-col-0-of-12.sg-col-16-of-20.sg-col.s-widget-spacing-small.sg-col-12-of-16').each((_idx, el) => {
//           const mobile = $(el)
//           const title = mobile.find('span.a-size-medium.a-color-base.a-text-normal').text();

          

//            const image = mobile.find('img.s-image').attr('src')

//            const link = mobile.find('a.a-link-normal.a-text-normal').attr('href')

//            const reviews = mobile.find('div.a-section.a-spacing-none.a-spacing-top-micro > div.a-row.a-size-small').attr('aria-label')

//            const stars = mobile.find('div.a-section.a-spacing-none.a-spacing-top-micro > div > span').attr('aria-label')

//            const price = mobile.find('span.a-price > span.a-offscreen').text()


//             let element = {
//                 title,
//                 image,
//                 link: `https://amazon.com${link}`,
//                 price,
//             }
           
//               mobiles.push(element)
            
//             if (reviews) {
//                 element.reviews = reviews
//               }
                
//              if (stars) {
//                  element.stars = stars
//                  }
           

          
//                 });

//                 return mobiles;
//             } catch (error) {
//                 throw error;
//             }
//           };
//           fetchMobiles().then((data)=>{
//             let detail = data
                 
                
//                   MongoClient.connect(dbURL,{useNewUrlParser:true},(error, client)=>{
//                       if (error) {
//                       return console.log("Can't connect to server",error);
                      
//                     }
//                     const db = client.db(dbName);
//                     let coll = db.collection('mobiles');
//                     coll.count().then((count)=>{
//                       if(count){
                        
//                       }else{
//                         db.collection('mobiles').insertMany(detail)
//                       }
//                     })                    
//                   })
                
              
              
                          
//            })

// }



// // // =========products catagiry==============

// {
//     const products = [];
//     const fetchShelves = async () => {
//       try {
//           const response = await axios.get('https://www.amazon.com/s?crid=36QNR0DBY6M7J&k=products&ref=glow_cls&refresh=1&sprefix=s%2Caps%2C3019')
        
//           const html = response.data;
    
//           const $ = cheerio.load(html);
    
          
    
//     $('div.sg-col-4-of-12.s-result-item.s-asin.sg-col-4-of-16.sg-col.sg-col-4-of-20').each((_idx, el) => {
//               const item = $(el)
//               const title = item.find('span.a-size-base-plus.a-color-base.a-text-normal').text();
    
              
    
//                const image = item.find('img.s-image').attr('src')
    
//                const link = item.find('a.a-link-normal.a-text-normal').attr('href')
    
//                const reviews = item.find('div.a-section.a-spacing-none.a-spacing-top-micro > div.a-row.a-size-small').attr('aria-label')
    
//                const stars = item.find('div.a-section.a-spacing-none.a-spacing-top-micro > div > span').attr('aria-label')
    
//                const price = item.find('span.a-price > span.a-offscreen').text()
    
    
//                 let element = {
//                     title,
//                     image,
//                     link: `https://amazon.com${link}`,
//                     price,
//                 }
//                 products.push(element)
               
    
//                 if (reviews) {
//                     element.reviews = reviews
//                 }
    
//                 if (stars) {
//                     element.stars = stars
//                 }
//                     });
    
//                     return products;
//                 } catch (error) {
//                     throw error;
//                 }
//               };
//               fetchShelves().then((data)=>{
//                 let detail = data
                      
                    
//                       MongoClient.connect(dbURL,{useNewUrlParser:true},(error, client)=>{
//                           if (error) {
//                           return console.log("Can't connect to server",error);
                          
//                         }
//                         const db = client.db(dbName);
//                         let coll = db.collection('shelves');
//                         coll.count().then((count)=>{
//                           if(count){
    
//                           }else{
//                             db.collection('shelves').insertMany(detail)
//                           }
//                         })                    
//                       })
                    
                  
                  
                              
//                })
             
    

//           }





// // dress category
// {
//     const products = [];
//     const fetchDress = async () => {
//       try {
//           const response = await axios.get('https://www.amazon.com/s?k=dresses+for+men&rh=n%3A7147441011%2Cn%3A1045626&dc&crid=1WLQDSETG1MKO&qid=164419277191&rnid=21941120011&sprefix=dresses+for+men%2Caps%2C573&ref=sr_nr_n_2')
        
//           const html = response.data;
    
//           const $ = cheerio.load(html);
    
          
    
//     $('div.sg-col-4-of-12.s-result-item.s-asin.sg-col-4-of-16.AdHolder.sg-col.s-widget-spacing-small.sg-col-4-of-20').each((_idx, el) => {
//               const item = $(el)
//               const title = item.find('span.a-size-base-plus.a-color-base.a-text-normal').text();
    
              
    
//                const image = item.find('img.s-image').attr('src')
    
//                const link = item.find('a.a-link-normal.a-text-normal').attr('href')
    
//                const reviews = item.find('div.a-section.a-spacing-none.a-spacing-top-micro > div.a-row.a-size-small').attr('aria-label')
    
//                const stars = item.find('div.a-section.a-spacing-none.a-spacing-top-micro > div > span').attr('aria-label')
    
//                const price = item.find('span.a-price > span.a-offscreen').text()
    
    
//                 let element = {
//                     title,
//                     image,
//                     link: `https://amazon.com${link}`,
//                     price,
//                 }
//                 products.push(element)
               
    
//                 if (reviews) {
//                     element.reviews = reviews
//                 }
    
//                 if (stars) {
//                     element.stars = stars
//                 }
//                     });
    
//                     return products;
//                 } catch (error) {
//                     throw error;
//                 }
//               };
//               fetchDress().then((data)=>{
//                 let detail = data
                      
                    
//                       MongoClient.connect(dbURL,{useNewUrlParser:true},(error, client)=>{
//                           if (error) {
//                           return console.log("Can't connect to server",error);
                          
//                         }
//                         const db = client.db(dbName);
//                         let coll = db.collection('dress');
//                         coll.count().then((count)=>{
//                           if(count){
    
//                           }else{
//                             db.collection('dress').insertMany(detail)
//                           }
//                         })                    
//                       })                            
//                })
    


// }

// // // shoes category

// {
//   const products = [];
//   const fetchDress = async () => {
//     try {
//         const response = await axios.get('https://www.amazon.com/s?k=shoes+for+men&rh=n%3A679255011%2Cn%3A679312011&dc&qid=1645434626&rnid=2941120011&ref=sr_nr_n_3')
      
//         const html = response.data;
  
//         const $ = cheerio.load(html);
  
        
  
//   $('div.sg-col-4-of-12.s-result-item.s-asin.sg-col-4-of-16.sg-col.s-widget-spacing-small.sg-col-4-of-20').each((_idx, el) => {
//             const item = $(el)
//             const title = item.find('span.a-size-base-plus.a-color-base.a-text-normal').text();
  
            
  
//              const image = item.find('img.s-image').attr('src')
  
//              const link = item.find('a.a-link-normal.a-text-normal').attr('href')
  
//              const reviews = item.find('div.a-section.a-spacing-none.a-spacing-top-micro > div.a-row.a-size-small').attr('aria-label')
  
//              const stars = item.find('div.a-section.a-spacing-none.a-spacing-top-micro > div > span').attr('aria-label')
  
//              const price = item.find('span.a-price > span.a-offscreen').text()
  
  
//               let element = {
//                   title,
//                   image,
//                   link: `https://amazon.com${link}`,
//                   price,
//               }
//              if(products.length>20){

//              }else{
//               products.push(element)
//              }
  
//               if (reviews) {
//                   element.reviews = reviews
//               }
  
//               if (stars) {
//                   element.stars = stars
//               }
//                   });
  
//                   return products;
//               } catch (error) {
//                   throw error;
//               }
//             };
//             fetchDress().then((data)=>{
//             let detail = data
                  
                
//                   MongoClient.connect(dbURL,{useNewUrlParser:true},(error, client)=>{
//                       if (error) {
//                       return console.log("Can't connect to server",error);
                      
//                     }
//                     const db = client.db(dbName);
//                     let coll = db.collection('shoes');
//                     coll.count().then((count)=>{
//                       if(count){

//                       }else{
//                         db.collection('shoes').insertMany(detail)
//                       }
//                     })                    
//                   })
                
              
              
                          
//            })
  


// }

// // // furniture category
// {
//   const products = [];
//   const fetchDress = async () => {
//     try {
//         const response = await axios.get('https://www.amazon.com/s?k=kitchen+gadgets&i=kitchen-intl-ship&bbn=16225011011&rh=n%3A1063306%2Cn%3A1063318&dc&crid=1PZA3Z8VA1VSC&qid=1645011135&rnid=1063306&sprefix=kit%2Ckitchen-intl-ship%2C631&ref=sr_nr_n_2')
      
//         const html = response.data;
  
//         const $ = cheerio.load(html);
  
        
  
//   $('div.sg-col-4-of-12.s-result-item.s-asin.sg-col-4-of-16.sg-col.s-widget-spacing-small.sg-col-4-of-20').each((_idx, el) => {
//             const item = $(el)
//             const title = item.find('span.a-size-base-plus.a-color-base.a-text-normal').text();
  
            
  
//              const image = item.find('img.s-image').attr('src')
  
//              const link = item.find('a.a-link-normal.a-text-normal').attr('href')
  
//              const reviews = item.find('div.a-section.a-spacing-none.a-spacing-top-micro > div.a-row.a-size-small').attr('aria-label')
  
//              const stars = item.find('div.a-section.a-spacing-none.a-spacing-top-micro > div > span').attr('aria-label')
  
//              const price = item.find('span.a-price > span.a-offscreen').text()
  
  
//               let element = {
//                   title,
//                   image,
//                   link: `https://amazon.com${link}`,
//                   price,
//               }
//               products.push(element)
             
  
//               if (reviews) {
//                   element.reviews = reviews
//               }
  
//               if (stars) {
//                   element.stars = stars
//               }
//                   });
  
//                   return products;
//               } catch (error) {
//                   throw error;
//               }
//             };
//             fetchDress().then((data)=>{
//               let detail = data
                    
                  
//                     MongoClient.connect(dbURL,{useNewUrlParser:true},(error, client)=>{
//                         if (error) {
//                         return console.log("Can't connect to server",error);
                        
//                       }
//                       const db = client.db(dbName);
//                       let coll = db.collection('furnitures');
//                       coll.count().then((count)=>{
//                         if(count){
  
//                         }else{
//                           db.collection('furnitures').insertMany(detail)
//                         }
//                       })                    
//                     })                            
//              })
  


// }

// // Beauty and personal care

// {
//   const products = [];
//   const fetchDress = async () => {
//     try {
//         const response = await axios.get('https://www.amazon.com/s?rh=n%3A16225006011&fs=true&ref=lp_16225006011_sar')
      
//         const html = response.data;
  
//         const $ = cheerio.load(html);
  
        
  
//   $('div.sg-col-4-of-12.s-result-item.s-asin.sg-col-4-of-16.sg-col.s-widget-spacing-small.sg-col-4-of-20').each((_idx, el) => {
//             const item = $(el)
//             const title = item.find('span.a-size-base-plus.a-color-base.a-text-normal').text();
  
            
  
//              const image = item.find('img.s-image').attr('src')
  
//              const link = item.find('a.a-link-normal.a-text-normal').attr('href')
  
//              const reviews = item.find('div.a-section.a-spacing-none.a-spacing-top-micro > div.a-row.a-size-small').attr('aria-label')
  
//              const stars = item.find('div.a-section.a-spacing-none.a-spacing-top-micro > div > span').attr('aria-label')
  
//              const price = item.find('span.a-price > span.a-offscreen').text()
  
  
//               let element = {
//                   title,
//                   image,
//                   link: `https://amazon.com${link}`,
//                   price,
//               }
//               products.push(element)
             
  
//               if (reviews) {
//                   element.reviews = reviews
//               }
  
//               if (stars) {
//                   element.stars = stars
//               }
//                   });
  
//                   return products;
//               } catch (error) {
//                   throw error;
//               }
//             };
//             fetchDress().then((data)=>{
//               let detail = data
                    
                  
//                     MongoClient.connect(dbURL,{useNewUrlParser:true},(error, client)=>{
//                         if (error) {
//                         return console.log("Can't connect to server",error);
                        
//                       }
//                       const db = client.db(dbName);
//                       let coll = db.collection('Beauty&care');
//                       coll.count().then((count)=>{
//                         if(count){
  
//                         }else{
//                           db.collection('Beauty&care').insertMany(detail)
//                         }
//                       })                    
//                     })                            
//              })
  


// }

// // laptops
// {
//   const products = [];
//   const fetchDress = async () => {
//     try {
//         const response = await axios.get('https://www.amazon.com/s?k=laptop+gamer&i=computers-intl-ship&crid=23E41HBIFH3FP&sprefix=laptop+%2Ccomputers-intl-ship%2C456&ref=nb_sb_ss_ts-doa-p_1_7')
      
//         const html = response.data;
  
//         const $ = cheerio.load(html);
  
        
  
//   $('div.s-result-item.s-asin.sg-col-0-of-12.sg-col-16-of-20.sg-col.s-widget-spacing-small.sg-col-12-of-16').each((_idx, el) => {
//             const item = $(el)
//             const title = item.find('span.a-size-medium.a-color-base.a-text-normal').text();
  
            
  
//              const image = item.find('img.s-image').attr('src')
  
//              const link = item.find('a.a-link-normal.a-text-normal').attr('href')
  
//              const reviews = item.find('div.a-section.a-spacing-none.a-spacing-top-micro > div.a-row.a-size-small').attr('aria-label')
  
//              const stars = item.find('div.a-section.a-spacing-none.a-spacing-top-micro > div > span').attr('aria-label')
  
//              const price = item.find('span.a-price > span.a-offscreen').text()
  
  
//               let element = {
//                   title,
//                   image,
//                   link: `https://amazon.com${link}`,
//                   price,
//               }

//               products.push(element)
             
  
//               if (reviews) {
//                   element.reviews = reviews
//               }
  
//               if (stars) {
//                   element.stars = stars
//               }
//                   });
  
//                   return products;
//               } catch (error) {
//                   throw error;
//               }
//             };
//             fetchDress().then((data)=>{
//               let detail = data
                    
                  
//                     MongoClient.connect(dbURL,{useNewUrlParser:true},(error, client)=>{
//                         if (error) {
//                         return console.log("Can't connect to server",error);
                        
//                       }
//                       const db = client.db(dbName);
//                       let coll = db.collection('laptops');
//                       coll.count().then((count)=>{
//                         if(count){
  
//                         }else{
//                           db.collection('laptops').insertMany(detail)
//                         }
//                       })                    
//                     })                            
//              })
  


// }

    


 module.exports = router;
        



        
