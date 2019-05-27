var cheerio = require( "cheerio" )


var wrapImageTags = function(page){

    var $ = cheerio.load(page.content);

    var font_A = $('i.fa.fa-font');
    font_A.attr('class', 'fa fa-cog');

    var font_reduce = $('button.size-2.font-reduce');
    font_increase.text('縮小');

    var font_enlarge = $('button.size-2.font-enlarge');
    font_enlarge.text('放大');
    
    page.content = $.html();

    return page;

}

module.exports = {


    // Map of hooks
    hooks: {

    	'page': function(page){    		
    		return wrapImageTags(page);
    	}
    },

    // Map of new blocks
    blocks: {},

    // Map of new filters
    filters: {}
};
