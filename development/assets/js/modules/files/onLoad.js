/*==============================================================================================


onLoad.js

When page loaded only..


==============================================================================================*/
	onLoaded: {
		init: function($){
			Module.onLoaded.test_1();
		},
		test_1: function(){
			console.log("load");
		}
	},