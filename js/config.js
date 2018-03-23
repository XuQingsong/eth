var config = {
	file:[{
        name: "tpl",
        path: "tpl.html",
        dom: "body",
        init: 1
    }],
    logo:lang.getLang().logo,
    contact:{
		id:"contact",
		name:"联系我们",
		link:"#contact",
		link_theme:'button',
		theme:'deep',
	},
	footer:{

	},
	nav:[{
		id:"home",
		name:lang.getLang().nav[0],
		link:"/dee",
		active:1
	},{
		id:"service",
		name:"服务",
		link:"#service",
		child:[{
			name:"发行",
			link:"#public",
			topage:1,
		},{
			name:"投资",
			link:"#invest",
			topage:1,
		},{
			name:"交易",
			link:"#trade",
			topage:1,
		}]
	},{
		id:"progress",
		name:"发展历程",
		link:"#progress",
		theme:'',
	},{
		id:"team",
		name:"团队",
		link:"#team",
	},{
		id:"partner",
		name:"合作伙伴",
		link:"#partner",
	},{
		id:"news",
		name:"新闻",
		link:"#news",
		

	},{
		id:"contact",
		name:"联系我们",
		link:"#contact",
		link_theme:'button',
	}],
	index:[{
		id:"home",
		name:lang.getLang().nav[0],
		theme:'deep'
	},{
		id:"service",
		name:"服务",
		theme:''
	},{
		id:"progress",
		name:"发展历程",
		link:"#progress",
		theme:'',
	},{
		id:"team",
		name:"团队",
		theme:'deep',
		list:[{
			"img":"https://oacvb204d.qnssl.com/naiveblue/20171122/wM5ARZqE06WNB4Biwom.jpg!w640.jpg",
			"name":"Alan Walker",
			"job":"CEO"
		},{
			"img":"https://oacvb204d.qnssl.com/naiveblue/20171122/wM5ARZqE06WOPrcqfy8.jpg!w640.jpg",
			"name":"Alan Walker",
			"job":"CEO"
		},{
			"img":"https://oacvb204d.qnssl.com/naiveblue/20171122/wM5ARZqE06WPtksh3Th.jpg!w640.jpg",
			"name":"Alan Walker",
			"job":"CEO"
		},{
			"img":"http://img.hb.aicdn.com/d7feec0a1f3e91bb236601907072f66d2d4759956d9d-IMYR8A_fw658",
			"name":"Alan Walker",
			"job":"CEO"
		},{
			"img":"http://img.hb.aicdn.com/4f4e7ee64aac9e5bdeb75e874703d097b0a094b076e28e-a3XAQ9_fw658",
			"name":"Alan Walker",
			"job":"CEO"
		},{
			"img":"http://img.hb.aicdn.com/d5c83a67dd73e2d2d26ddbd9cd8081de34e5f6a17c3590-u5fKdn_fw658",
			"name":"Alan Walker",
			"job":"CEO"
		},{
			"img":"http://img.hb.aicdn.com/cb2f968b8a760071e6653a1c2212fd8025e181876bf51b-tAatEp_fw658",
			"name":"Alan Walker",
			"job":"CEO"
		}]
	},{
		id:"partner",
		name:"合作伙伴",
		theme:'',
		list:[
			[{
				"img":"http://img.hb.aicdn.com/0b7fb4aaf0db2039f72a6cd3ac2548a23b80ca5837bf-iaMvmC_fw658",
				"name":"Alan Walker"
			},{
				"img":"http://img.hb.aicdn.com/09d5bda0b573d754ee2cdcfb861034378289a1538703-N82PGd_fw658",
				"name":"Alan Walker"
			},{
				"img":"http://img.hb.aicdn.com/a890f224593dfcbd537d46a7cda002c3df7d4b0721d9-snHlAj_fw658",
				"name":"Alan Walker"
			},{
				"img":"http://img.hb.aicdn.com/0233fd92d939a78f5030d1f26e76bc25cf9bca381a31-GYozea_fw658",
				"name":"Alan Walker"
			},{
				"img":"http://img.hb.aicdn.com/fadf7cb54315ca85f8e4ad45960db46e4d9ca16c6234-fbrsFj_fw658",
				"name":"Alan Walker"
			},{
				"img":"http://img.hb.aicdn.com/73a3b34f87997021b75853c7251e6067a52658ed4c6b-J3Zr4L_fw658",
				"name":"Alan Walker"
			},{
				"img":"http://img.hb.aicdn.com/9964fc44cc82a6fc698267846c85f41231a67e7243f9-APgqBU_fw658",
				"name":"Alan Walker"
			},{
				"img":"http://img.hb.aicdn.com/6dca88e2d5aa9dbf857a9122f08771f222bafa366aec-ma8jCc_fw658",
				"name":"Alan Walker"
			}],
			[{
				"img":"http://img.hb.aicdn.com/0b7fb4aaf0db2039f72a6cd3ac2548a23b80ca5837bf-iaMvmC_fw658",
				"name":"Alan Walker"
			},{
				"img":"http://img.hb.aicdn.com/09d5bda0b573d754ee2cdcfb861034378289a1538703-N82PGd_fw658",
				"name":"Alan Walker"
			},{
				"img":"http://img.hb.aicdn.com/a890f224593dfcbd537d46a7cda002c3df7d4b0721d9-snHlAj_fw658",
				"name":"Alan Walker"
			},{
				"img":"http://img.hb.aicdn.com/0233fd92d939a78f5030d1f26e76bc25cf9bca381a31-GYozea_fw658",
				"name":"Alan Walker"
			},{
				"img":"http://img.hb.aicdn.com/fadf7cb54315ca85f8e4ad45960db46e4d9ca16c6234-fbrsFj_fw658",
				"name":"Alan Walker"
			},{
				"img":"http://img.hb.aicdn.com/73a3b34f87997021b75853c7251e6067a52658ed4c6b-J3Zr4L_fw658",
				"name":"Alan Walker"
			},{
				"img":"http://img.hb.aicdn.com/9964fc44cc82a6fc698267846c85f41231a67e7243f9-APgqBU_fw658",
				"name":"Alan Walker"
			},{
				"img":"http://img.hb.aicdn.com/6dca88e2d5aa9dbf857a9122f08771f222bafa366aec-ma8jCc_fw658",
				"name":"Alan Walker"
			}]
		]
	},{
		id:"news",
		name:"新闻",
		theme:'grey',
		list:[{
			"img":"http://img.hb.aicdn.com/434a052d23eb629c6d90fb5c1e47b9b0f9649bf51b9f1-gA35RK_fw658",
			"title":"新闻标题",
			"desc":"新闻副标题新闻副标题新闻副标题"
		},{
			"img":"http://img.hb.aicdn.com/afc3e2df2e26e85ebc7122002ef539504e929afd17420-r6RgEA_fw658",
			"title":"新闻标题",
			"desc":"新闻副标题新闻副标题新闻副标题"
		},{
			"img":"http://img.hb.aicdn.com/88a4bec4b09011be9ab168ab876c32a575f0c9e11b1b8-mnb99d_fw658",
			"title":"新闻标题",
			"desc":"新闻副标题新闻副标题新闻副标题"
		},{
			"img":"http://img.hb.aicdn.com/7177ec03ac5c33649a1df6cde281c259f46d4bc91fe97-sg38vd_fw658",
			"title":"新闻标题",
			"desc":"新闻副标题新闻副标题新闻副标题"
		}]
		

	}],
	public:{
		id:"public",
		name:"发行",
		desc:"数字化不动产",
		list:[{
			"title":"数字评估",
			"desc":"资产数字化过程涵盖了垂直于各类型资产评估整体性的流程，目的是消除信息不对称及欺诈的道德风险",
			"img":"img/public_1.svg"
		},{
			"title":"资产份额化融资",
			"desc":"资产份额化融资是指将非标不动产资产标准化评估，在经过评估和四大行数字资产验证后，协助资产所有人公开发行。PTO也是资产抵押者低廉的融资渠道，投资者参与份额化不动产交易的途径。",
			"img":"img/public_2.svg",
			"theme":"reverse"
		},{
			"title":"交割与清算权",
			"desc":"投资者享有不动产交割和资金清算服务，当投资者购买ABT份额后，DEE作为见证方提供份额计算，投资价值兑换，跨资产交易等不同ABT份额之间的清算功能，实现Peer 2 Peer点对点交易。",
			"img":"img/public_3.svg"
		}]
	},
	invest:{
		id:"invest",
		name:"投资",
		desc:"一站式全球不动产配置",
		list:[{
			"title":"全球房地产配置",
			"desc":"全球房地产配置，就是指用户根据自身的投资需求，在全球范围内将投资资金分配到多个房地产上。不要要购买整套房产产权，仅需购买部分产权的份额，即可享受到房产升值和租金回报",
			"img":"img/invest_1.svg"
		},{
			"title":"房产投资组合",
			"desc":"房地产投资组合，是由用户所持有的各类房地产产权的集合。不同区域及类型的房地产的回报率和风险程度都不尽相同，大致可以分为商用、居住和工业三种类型，再加上地域影响，用户的投资选择是多种多样的 ",
			"img":"img/invest_2.svg",
		},{
			"title":"资产钱包",
			"desc":"用户可以通过交易所购买及交易被通证化后的房地产代币，然后记录在交易所的信认链上。现在人们使用房产证去证明房产所有权，由于区块链的不可篡改性，在将来区块链交易记录就可以证明房产所有权，产权交易都在区块链上完成",
			"img":"img/invest_3.svg"
		},{
			"title":"个人财务规划",
			"desc":"交易所提供个人财务规划服务，以用户为中心，设计出一套全面的财务规划，将客户的资产、负债、流动性进行管理、以满足客户不同阶段的财务需求，帮助客户达到降低风险、实现财富保值、增值和传承等目的",
			"img":"img/invest_4.svg"
		},{
			"title":"确认权证服务",
			"desc":"确权认证服务，即为用户出具证明文件，确定用户拥有部分房产产权份额。但在通证化后，产权分散至所有认购代币的用户，故产权会由交易所代持。当用户需要证明其拥有某房地产部分产权，可以向交易所提出确权认证申请，由交易所出具文件证明其所有权的真实性",
			"img":"img/invest_5.svg"
		}]
	},
	trade:{
		id:"trade",
		name:"交易",
		desc:"一站式全球不动产配置",
		list:[{
			"title":"行情服务",
			"desc":"行情服务是指，资产份额在交易所上市交易后，交易所提供针对资产在市场当中价格变化的走势行情图，价格根据市场公允价值变动，能即时反馈买卖双方交易价格走势",
			"img":"img/trade_1.svg"
		},{
			"title":"交易工具",
			"desc":"交易工具的基本功能是接收市场行情和传输交易订单，包括各种订单类型（市价订单、限价订单、止损订单）等",
			"img":"img/trade_2.svg",
		},{
			"title":"跨链服务",
			"desc":"跨链服务是指跨越链和链之间的障碍，连接多个独立区块链，以实现链上资产自由流通的技术。目前客户可以在存放于信认链的信用币与存放于以太坊的资产抵押通证（Asset-Backed Token，ABT）间自由转换，而无需要使用法定货币作为转换载体",
			"img":"img/trade_3.svg"
		}]
	},
	
	

}