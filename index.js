var cheerio = require( "cheerio" )


var font2zh = function(page){

    var $ = cheerio.load(page.content);

    var font_reduce = $('font-reduce');
    font_increase.text('縮小');

    var font_enlarge = $('font-enlarge');
    font_enlarge.text('放大');
    
    page.content = $.html();

    return page;

}

module.exports = {


    // Map of hooks
    hooks: {

    	'page': function(page){    		
    		return font2zh(page);
    	}
    },

    // Map of new blocks
    blocks: {},

    // Map of new filters
    filters: {}
};
