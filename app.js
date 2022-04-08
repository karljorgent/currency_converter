import $ from "jquery";

// set endpoint and your API key
endpoint = 'convert';
access_key = '7d5234ca8df53e5aadd76314344fcb47';

// define from currency, to currency, and amount
from = 'EUR';
to = 'GBP';
amount = '10';

// execute the conversion using the "convert" endpoint:
$.ajax({
    url: 'https://data.fixer.io/api/' + endpoint + '?access_key=' + access_key +'&from=' + from + '&to=' + to + '&amount=' + amount,   
    dataType: 'jsonp',
    success: function(json) {

        // access the conversion result in json.result
        alert(json.result);
                
    }
});