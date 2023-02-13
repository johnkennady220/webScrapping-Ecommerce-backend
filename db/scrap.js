const { default: axios } = require("axios");
const cheerio = require("cheerio");
// const { index } = require("cheerio/lib/api/traversing");
const productData = require("../model/products.model");

const data = async () => {

    //Fetching the data from Flipkart url
    let flipkart = [];
    await axios.get("https://www.flipkart.com/search?q=mobiles&sid=tyy%2C4io&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_1_1_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_1_na_na_na&as-pos=1&as-type=RECENT&suggestionId=mobiles%7CMobiles&requestId=d2921efc-9251-4c41-9b33-3b898398829a&as-searchtext=m").then((res) =>{
        const $ = cheerio.load(res.data);
        let count = 0;
        // Retrive the data from html page of flipkart,if its required information
        $('._1AtVbE').each((index, element) => {
            if (count < 10) {
                let title = $(element).find('div._4rR01T').text();
                let image = $(element).find('img._396cs4 ').attr('src');
                let rating = $(element).find('div._3LWZlK').text();
                let price = $(element).find('div._3I9_wc').text();
                let offerprice = $(element).find('div._30jeq3').text();
                let logo = 'https://www.aamtech.net/wp-content/uploads/2017/04/Flipkart-Logo.png';

                //to push only elements which are not null
                if(title !== "" || price !== "" || offerprice !== "") {
                    flipkart[count] = {title, image, rating, price, offerprice, logo};
                    count ++;
                };
            };
        });
        productData.insertMany(flipkart);
    }).catch((error) => console.log(error));

    //Fetching the data from Amazon url
    let amazon = [];
    await axios.get("https://www.amazon.in/s?k=mobiles&rh=n%3A1389432031&ref=nb_sb_noss").then((res) => {
        const $ = cheerio.load(res.data);
        let count = 0;

        // Retrive the data from html page of amazon,if its required information
        $('.s-asin').each((index, element) => {
            if (count < 10) {
                let title = $(element).find('span.a-text-normal').text();
                let image = $(element).find('.aok-relative').children().attr('src');
                let rating = $(element).find('.a-icon-star-small').children().text();
                let price = $(element).find('span.a-text-price').children('span.a-offscreen').text();
                let offerprice = $(element).find('span.a-price-whole').text();
                let logo = 'https://wallpapercave.com/wp/wp7771224.png';

                //to push only elements which are not null
                if(title !== "" || price !== "" || offerprice !== "") {
                    amazon[count] = {title, image, rating, price, offerprice, logo};
                    count ++;
                };
            };
        });
        productData.insertMany(amazon);
    }).catch((error) => console.log(error));

    //Fetching the data from Sanpdeal url
    let snapdeal = [];
    await axios.get('https://www.snapdeal.com/search?keyword=mobile&santizedKeyword=mobile+phone&catId=0&categoryId=0&suggested=false&vertical=p&noOfResults=20&searchState=&clickSrc=go_header&lastKeyword=&prodCatId=&changeBackToAll=false&foundInAll=false&categoryIdSearched=&cityPageUrl=&categoryUrl=&url=&utmContent=&dealDetail=&sort=rlvncy').then((res) => {
        const $ = cheerio.load(res.data);
        let count = 0;

        // Retrive the data from html page of amazon,if its required information
        $('.favDp').each((index, element) => {
            if (count < 10) {
                let title = $(element).find('p.product-title').text();
                let image = $(element).find('.picture-elem source').attr('srcset');
                let rating = 'NA';
                let price = $(element).find('span.product-desc-price').text();
                let offerprice = $(element).find('span.product-price').text();
                let logo = 'https://mediaindia.eu/wp-content/uploads/2016/12/snapdeal-new-logo-change.png';
                
                //to push only elements which are not null
                if(title !== "" || price !== "" || offerprice !== "") {
                    snapdeal[count] = {title, image, rating, price, offerprice, logo};
                    count ++;
                };

            };
        });
        productData.insertMany(snapdeal);
    }).catch((error) => console.log(error));
};

module.exports = data;
