var lang ={
	getLang:function() {
		var docLang = $('html').attr('lang').toLowerCase();
		docLang = docLang.replace(/-/,'');
		return lang[docLang];
	},
	zhhan:{
		logo:'数字化不动产交易所',
		nav:[
			'首页',

		]
	},
	en:{

		nav:[
			'home'
		]
	}
}