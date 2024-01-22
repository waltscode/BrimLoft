const { Review } = require('../models');

const reviewData = [
    {
        user_id: 1, //John W
        product_id: 1, //Beanie
        rating: 5,
        comment: 'Great quality beanie. Love the fit!',
        timestamp: new Date('2020-05-16'), 
        isVerifiedPurchaser: true,
    },
    {
        user_id: 2, //StasM
        product_id: 1, //Beanie
        rating: 5,
        comment: 'A gift for my wife. The pom-pom customization looks adorable. She loves this hat!',
        timestamp: new Date('2020-06-22'), 
        isVerifiedPurchaser: true,
    },
    {
        user_id: 2, //StasM
        product_id: 2, //Baseball Hat
        rating: 5,
        comment: 'Simple and stylish baseball hat.',
        timestamp: new Date('2020-07-27'), 
        isVerifiedPurchaser: true,
    },
    {
        user_id: 3, // SamS
        product_id: 3, //Beret
        rating: 4,
        comment: 'The beret is very good quality, text reads better if kept to one line',
        timestamp: new Date('2020-08-31'), 
        isVerifiedPurchaser: true,
    },
    {
        user_id: 4, // NickLee
        product_id: 1, //Beanie
        rating: 5,
        comment: 'Excellent quality beanies -- wool is warm but not itchy. Ordered three and they all look fantastic!',
        timestamp: new Date('2020-09-20'), // About a week later than NickLee's order
        isVerifiedPurchaser: true,
    },
    {
        user_id: 4, //NickLee
        product_id: 3, //Beret
        rating: 5,
        comment: 'Berets are stylish. Text and logos are not required to pimp them up. Look great as is!',
        timestamp: new Date('2020-10-26'), 
        isVerifiedPurchaser: true,
    },
    {
        user_id: 5, // KarlaW
        product_id: 2, //Baseball hat
        rating: 5,
        comment: 'Baseball hats are everything they should be. Well stitched seams. Washed cotton has an already loved and lived in look',
        timestamp: new Date('2020-11-30'), 
        isVerifiedPurchaser: true,
    },
    {
        user_id: 6, //AlejandroR
        product_id: 1, //Beanie
        rating: 5,
        comment: 'Good quality beanie (bought two, had one made custom). Embroidery is very well done. Arrives quick.',
        timestamp: new Date('2021-02-25'), 
        isVerifiedPurchaser: true,
    },
    {
        user_id: 6, // AlejandroR
        product_id: 4, //Bucket hat
        rating: 5,
        comment: 'The custom bucket hat is fantastic! Would use this company again for any custom work. It was for my daughter who lost it 3 times at school already but this one always comes back to her because it has her name on it!',
        timestamp: new Date('2021-03-10'), 
        isVerifiedPurchaser: true,
    },
    {
        user_id: 7, //MeiChen
        product_id: 1, //Beanie
        rating: 5,
        comment: 'Plain beanie is simple and looks good on. Great quality.',
        timestamp: new Date('2021-04-12'), 
        isVerifiedPurchaser: true,
    },
    {
        user_id: 7, //MeiChen
        product_id: 1, //Beanie
        rating: 4,
        comment: 'The beanie is good quality. Customizing it makes it a little expensive',
        timestamp: new Date('2021-04-19'), 
        isVerifiedPurchaser: true,
    },
    {
        user_id: 7, //MeiChen
        product_id: 5,//Outback hat
        rating: 5,
        comment: 'Outback hat is extremely durable and looks good. Well priced too compared to a Tilley.',
        timestamp: new Date('2021-04-26'), 
        isVerifiedPurchaser: true,
    },
    {
        user_id: 8, //HassanAli
        product_id: 2, //Baseball hat
        rating: 5,
        comment: 'Baseball hats (bought three) are all excellent. Great colour selection, well made and comfortable. Recommend.',
        timestamp: new Date('2021-05-19'), 
        isVerifiedPurchaser: true,
    },
    {
        user_id: 8, //HassanAli
        product_id: 4, //Bucket hat
        rating: 4,
        comment: 'Prefer the washed cotton of the baseball hats over the plain cotton of the bucket hat, but looks and feels good. Happy with the purchase.',
        timestamp: new Date('2021-06-02'), 
        isVerifiedPurchaser: true,
    },
    {
        user_id: 9, //IzzyS
        product_id: 3, // Beret
        rating: 4,
        comment: 'The plain beret is a bit pricy for a circle of wool, but its true you can wear it a hundred different ways -- having fun trying them all out.',
        timestamp: new Date('2021-07-09'), 
        isVerifiedPurchaser: true,
    },
    {
        user_id: 9, //IzzyS
        product_id: 3, //Beret
        rating: 5,
        comment: 'The floral embroidery on the beret is definitely worth the upcharge. It looks gorgeous with my winter coat.',
        timestamp: new Date('2021-07-16'), 
        isVerifiedPurchaser: true,
    },
    {
        user_id: 9, //IzzyS
        product_id: 4, //Bucket hat
        rating: 5,
        comment: 'Bucket hat with custom logo is fantastic. Really high quality embroidery. My son LIVES in this hat!',
        timestamp: new Date('2021-07-23'), 
        isVerifiedPurchaser: true,
    },
    {
        user_id: 10,// RajPatel
        product_id: 1, //Beanie
        rating: 5,
        comment: 'The beanie is just what I wanted. Applique makes it look trendier. Good product.',
        timestamp: new Date('2021-08-22'), 
        isVerifiedPurchaser: true,
    },
    {
        user_id: 10, //RajPatel
        product_id: 2, //Baseball hat
        rating: 5,
        comment: 'Good experience with the staff who lead me through the customization process for the baseball hat. Made it simpler than I thought and finished product looks really good.',
        timestamp: new Date('2021-08-29'), 
        isVerifiedPurchaser: true,
    },
    {
        user_id: 10, //RajPatel
        product_id: 5, //Outback hat
        rating: 5,
        comment: 'Plain outback hat is a solid choice. Comfortable and stylish.',
        timestamp: new Date('2021-09-05'), 
        isVerifiedPurchaser: true,
    },
];

const seedReviews = () => Review.bulkCreate(reviewData);

module.exports = seedReviews;
