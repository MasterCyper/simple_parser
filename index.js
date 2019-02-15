const needle = require('needle');
const cheerio = require('cheerio');
const url = 'https://tmall.aliexpress.com/item/-/32904630460.html?spm=a2g0v.11010108.07001.17.74a72a45TewXwY';
needle.get(url, (err, res) => {
    if(err) throw err;
    console.log(res.body);
    let $ = cheerio.load(res.body);
    console.log($('.product-name').text());
    img = $('.img-thumb-item img');
    img.each((i, val) => {
        console.log($(val).attr('src'));
    });
});