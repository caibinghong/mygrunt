define("shirt",{color:"black",size:"unisize"}),requirejs.config({baseUrl:"js",paths:{jquery:"jquery-1.11.1"}}),require(["jquery","shirt"],function(e,t){console.log(e("body"),t.color)}),define("main",function(){});