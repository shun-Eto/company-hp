import { CSSProperties } from "@material-ui/core/styles/withStyles";

/*-*-*-*-* colors *-*-*-*-*/
const colors = {
	/*-*-*-*-* brand colors *-*-*-*-*/
	brandBlack: (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(40,40,40,1)`
			: `rgba(40,40,40,${opacity})`;
	},
	brandWhite: (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(240,242,236,1)`
			: `rgba(240,242,236,${opacity})`;
	},

	/*-*-*-*-* basic colors *-*-*-*-*/
	//	black
	black: (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(0,0,0,1)`
			: `rgba(0,0,0,${opacity})`;
	},
	//	white
	white: (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(255,255,255,1)`
			: `rgba(255,255,255,${opacity})`;
	},
	//	red
	red: (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(244,67,54,1)`
			: `rgba(244,67,54,${opacity})`;
	},
	"red-50": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(255,235,238 ,1)`
			: `rgba(255,235,238 ,${opacity})`;
	},
	"red-100": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(255,205,210 ,1)`
			: `rgba(255,205,210 ,${opacity})`;
	},
	"red-200": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(239,154,154 ,1)`
			: `rgba(239,154,154 ,${opacity})`;
	},
	"red-300": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(229,115,115 ,1)`
			: `rgba(229,115,115 ,${opacity})`;
	},
	"red-400": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(239,83,80 ,1)`
			: `rgba(239,83,80 ,${opacity})`;
	},
	"red-500": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(244,67,54 ,1)`
			: `rgba(244,67,54 ,${opacity})`;
	},
	"red-600": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(229,57,53 ,1)`
			: `rgba(229,57,53 ,${opacity})`;
	},
	"red-700": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(211,47,47 ,1)`
			: `rgba(211,47,47 ,${opacity})`;
	},
	"red-800": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(198,40,40 ,1)`
			: `rgba(198,40,40 ,${opacity})`;
	},
	"red-900": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(183,28,28 ,1)`
			: `rgba(183,28,28 ,${opacity})`;
	},
	//	pink
	pink: (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(233,30,99,1)`
			: `rgba(233,30,99,${opacity})`;
	},
	"pink-50": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(252,228,236 ,1)`
			: `rgba(252,228,236 ,${opacity})`;
	},
	"pink-100": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(248,187,208 ,1)`
			: `rgba(248,187,208 ,${opacity})`;
	},
	"pink-200": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(244,143,177 ,1)`
			: `rgba(244,143,177 ,${opacity})`;
	},
	"pink-300": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(240,98,146 ,1)`
			: `rgba(240,98,146 ,${opacity})`;
	},
	"pink-400": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(236,64,122 ,1)`
			: `rgba(236,64,122 ,${opacity})`;
	},
	"pink-500": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(233,30,99 ,1)`
			: `rgba(233,30,99 ,${opacity})`;
	},
	"pink-600": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(216,27,96 ,1)`
			: `rgba(216,27,96 ,${opacity})`;
	},
	"pink-700": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(194,24,91 ,1)`
			: `rgba(194,24,91 ,${opacity})`;
	},
	"pink-800": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(173,20,87 ,1)`
			: `rgba(173,20,87 ,${opacity})`;
	},
	"pink-900": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(136,14,79 ,1)`
			: `rgba(136,14,79 ,${opacity})`;
	},
	//	purple
	purple: (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(156,39,176,1)`
			: `rgba(156,39,176,${opacity})`;
	},
	"purple-50": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(243,229,245 ,1)`
			: `rgba(243,229,245 ,${opacity})`;
	},
	"purple-100": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(225,190,231 ,1)`
			: `rgba(225,190,231 ,${opacity})`;
	},
	"purple-200": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(206,147,216 ,1)`
			: `rgba(206,147,216 ,${opacity})`;
	},
	"purple-300": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(186,104,200 ,1)`
			: `rgba(186,104,200 ,${opacity})`;
	},
	"purple-400": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(171,71,188 ,1)`
			: `rgba(171,71,188 ,${opacity})`;
	},
	"purple-500": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(156,39,176 ,1)`
			: `rgba(156,39,176 ,${opacity})`;
	},
	"purple-600": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(142,36,170 ,1)`
			: `rgba(142,36,170 ,${opacity})`;
	},
	"purple-700": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(123,31,162 ,1)`
			: `rgba(123,31,162 ,${opacity})`;
	},
	"purple-800": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(106,27,154 ,1)`
			: `rgba(106,27,154 ,${opacity})`;
	},
	"purple-900": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(74,20,140 ,1)`
			: `rgba(74,20,140 ,${opacity})`;
	},
	//	indigo
	indigo: (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(63,81,181,1)`
			: `rgba(63,81,181,${opacity})`;
	},
	"indigo-50": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(232,234,246 ,1)`
			: `rgba(232,234,246 ,${opacity})`;
	},
	"indigo-100": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(197,202,233 ,1)`
			: `rgba(197,202,233 ,${opacity})`;
	},
	"indigo-200": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(159,168,218 ,1)`
			: `rgba(159,168,218 ,${opacity})`;
	},
	"indigo-300": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(121,134,203 ,1)`
			: `rgba(121,134,203 ,${opacity})`;
	},
	"indigo-400": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(92,107,192 ,1)`
			: `rgba(92,107,192 ,${opacity})`;
	},
	"indigo-500": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(63,81,181 ,1)`
			: `rgba(63,81,181 ,${opacity})`;
	},
	"indigo-600": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(57,73,171 ,1)`
			: `rgba(57,73,171 ,${opacity})`;
	},
	"indigo-700": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(48,63,159 ,1)`
			: `rgba(48,63,159 ,${opacity})`;
	},
	"indigo-800": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(40,53,147 ,1)`
			: `rgba(40,53,147 ,${opacity})`;
	},
	"indigo-900": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(26,35,126 ,1)`
			: `rgba(26,35,126 ,${opacity})`;
	},
	//	blue
	blue: (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(33,150,243,1)`
			: `rgba(33,150,243,${opacity})`;
	},
	"blue-50": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(227,242,253 ,1)`
			: `rgba(227,242,253 ,${opacity})`;
	},
	"blue-100": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(187,222,251 ,1)`
			: `rgba(187,222,251 ,${opacity})`;
	},
	"blue-200": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(144,202,249 ,1)`
			: `rgba(144,202,249 ,${opacity})`;
	},
	"blue-300": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(100,181,246 ,1)`
			: `rgba(100,181,246 ,${opacity})`;
	},
	"blue-400": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(66,165,245 ,1)`
			: `rgba(66,165,245 ,${opacity})`;
	},
	"blue-500": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(33,150,243 ,1)`
			: `rgba(33,150,243 ,${opacity})`;
	},
	"blue-600": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(30,136,229 ,1)`
			: `rgba(30,136,229 ,${opacity})`;
	},
	"blue-700": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(25,118,210 ,1)`
			: `rgba(25,118,210 ,${opacity})`;
	},
	"blue-800": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(21,101,192 ,1)`
			: `rgba(21,101,192 ,${opacity})`;
	},
	"blue-900": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(13,71,161 ,1)`
			: `rgba(13,71,161 ,${opacity})`;
	},
	//	lightBlue
	lightBlue: (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(3,169,244,1)`
			: `rgba(3,169,244,${opacity})`;
	},
	"lightBlue-50": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(225,245,254 ,1)`
			: `rgba(225,245,254 ,${opacity})`;
	},
	"lightBlue-100": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(179,229,252 ,1)`
			: `rgba(179,229,252 ,${opacity})`;
	},
	"lightBlue-200": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(129,212,250 ,1)`
			: `rgba(129,212,250 ,${opacity})`;
	},
	"lightBlue-300": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(79,195,247 ,1)`
			: `rgba(79,195,247 ,${opacity})`;
	},
	"lightBlue-400": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(41,182,246 ,1)`
			: `rgba(41,182,246 ,${opacity})`;
	},
	"lightBlue-500": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(3,169,244 ,1)`
			: `rgba(3,169,244 ,${opacity})`;
	},
	"lightBlue-600": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(3,155,229 ,1)`
			: `rgba(3,155,229 ,${opacity})`;
	},
	"lightBlue-700": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(2,136,209 ,1)`
			: `rgba(2,136,209 ,${opacity})`;
	},
	"lightBlue-800": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(2,119,189 ,1)`
			: `rgba(2,119,189 ,${opacity})`;
	},
	"lightBlue-900": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(1,87,155 ,1)`
			: `rgba(1,87,155 ,${opacity})`;
	},
	//	cyan
	cyan: (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(0,188,212,1)`
			: `rgba(0,188,212,${opacity})`;
	},
	"cyan-50": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(224,247,250 ,1)`
			: `rgba(224,247,250 ,${opacity})`;
	},
	"cyan-100": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(178,235,242 ,1)`
			: `rgba(178,235,242 ,${opacity})`;
	},
	"cyan-200": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(128,222,234 ,1)`
			: `rgba(128,222,234 ,${opacity})`;
	},
	"cyan-300": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(77,208,225 ,1)`
			: `rgba(77,208,225 ,${opacity})`;
	},
	"cyan-400": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(38,198,218 ,1)`
			: `rgba(38,198,218 ,${opacity})`;
	},
	"cyan-500": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(0,188,212 ,1)`
			: `rgba(0,188,212 ,${opacity})`;
	},
	"cyan-600": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(0,172,193 ,1)`
			: `rgba(0,172,193 ,${opacity})`;
	},
	"cyan-700": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(0,151,167 ,1)`
			: `rgba(0,151,167 ,${opacity})`;
	},
	"cyan-800": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(0,131,143 ,1)`
			: `rgba(0,131,143 ,${opacity})`;
	},
	"cyan-900": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(0,96,100 ,1)`
			: `rgba(0,96,100 ,${opacity})`;
	},
	//	green
	green: (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(76,175,80,1)`
			: `rgba(76,175,80,${opacity})`;
	},
	"green-50": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(232,245,233 ,1)`
			: `rgba(232,245,233 ,${opacity})`;
	},
	"green-100": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(200,230,201 ,1)`
			: `rgba(200,230,201 ,${opacity})`;
	},
	"green-200": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(165,214,167 ,1)`
			: `rgba(165,214,167 ,${opacity})`;
	},
	"green-300": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(129,199,132 ,1)`
			: `rgba(129,199,132 ,1)`;
	},
	"green-400": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(102,187,106 ,1)`
			: `rgba(102,187,106 ,${opacity})`;
	},
	"green-500": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(76,175,80 ,1)`
			: `rgba(76,175,80 ,${opacity})`;
	},
	"green-600": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(67,160,71 ,1)`
			: `rgba(67,160,71 ,${opacity})`;
	},
	"green-700": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(56,142,60 ,1)`
			: `rgba(56,142,60 ,${opacity})`;
	},
	"green-800": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(46,125,50 ,1)`
			: `rgba(46,125,50 ,${opacity})`;
	},
	"green-900": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(27,94,32 ,1)`
			: `rgba(27,94,32 ,${opacity})`;
	},
	lightGreen: (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(139,195,74,1)`
			: `rgba(139,195,74,${opacity})`;
	},
	"lightGreen-50": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(241,248,233 ,1)`
			: `rgba(241,248,233 ,${opacity})`;
	},
	"lightGreen-100": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(220,237,200 ,1)`
			: `rgba(220,237,200 ,${opacity})`;
	},
	"lightGreen-200": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(197,225,165 ,1)`
			: `rgba(197,225,165 ,${opacity})`;
	},
	"lightGreen-300": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(174,213,129 ,1)`
			: `rgba(174,213,129 ,${opacity})`;
	},
	"lightGreen-400": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(156,204,101 ,1)`
			: `rgba(156,204,101 ,${opacity})`;
	},
	"lightGreen-500": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(139,195,74 ,1)`
			: `rgba(139,195,74 ,${opacity})`;
	},
	"lightGreen-600": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(124,179,66 ,1)`
			: `rgba(124,179,66 ,${opacity})`;
	},
	"lightGreen-700": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(104,159,56 ,1)`
			: `rgba(104,159,56 ,${opacity})`;
	},
	"lightGreen-800": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(85,139,47 ,1)`
			: `rgba(85,139,47 ,${opacity})`;
	},
	"lightGreen-900": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(51,105,30 ,1)`
			: `rgba(51,105,30 ,${opacity})`;
	},
	//	yellow
	yellow: (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(255,235,59,1)`
			: `rgba(255,235,59,${opacity})`;
	},
	"yellow-50": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(255,253,231 ,1)`
			: `rgba(255,253,231 ,${opacity})`;
	},
	"yellow-100": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(255,249,196 ,1)`
			: `rgba(255,249,196 ,${opacity})`;
	},
	"yellow-200": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(255,245,157 ,1)`
			: `rgba(255,245,157 ,${opacity})`;
	},
	"yellow-300": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(255,241,118 ,1)`
			: `rgba(255,241,118 ,${opacity})`;
	},
	"yellow-400": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(255,238,88 ,1)`
			: `rgba(255,238,88 ,${opacity})`;
	},
	"yellow-500": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(255,235,59 ,1)`
			: `rgba(255,235,59 ,${opacity})`;
	},
	"yellow-600": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(253,216,53 ,1)`
			: `rgba(253,216,53 ,${opacity})`;
	},
	"yellow-700": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(251,192,45 ,1)`
			: `rgba(251,192,45 ,${opacity})`;
	},
	"yellow-800": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(249,168,37 ,1)`
			: `rgba(249,168,37 ,${opacity})`;
	},
	"yellow-900": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(245,127,23 ,1)`
			: `rgba(245,127,23 ,${opacity})`;
	},
	//	orange
	orange: (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(255,152,0,1)`
			: `rgba(255,152,0,${opacity})`;
	},
	"orange-50": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(255,243,224 ,1)`
			: `rgba(255,243,224 ,${opacity})`;
	},
	"orange-100": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(255,224,178 ,1)`
			: `rgba(255,224,178 ,${opacity})`;
	},
	"orange-200": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(255,204,128 ,1)`
			: `rgba(255,204,128 ,${opacity})`;
	},
	"orange-300": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(255,183,77 ,1)`
			: `rgba(255,183,77 ,${opacity})`;
	},
	"orange-400": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(255,167,38 ,1)`
			: `rgba(255,167,38 ,${opacity})`;
	},
	"orange-500": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(255,152,0 ,1)`
			: `rgba(255,152,0 ,${opacity})`;
	},
	"orange-600": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(251,140,0 ,1)`
			: `rgba(251,140,0 ,${opacity})`;
	},
	"orange-700": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(245,124,0 ,1)`
			: `rgba(245,124,0 ,${opacity})`;
	},
	"orange-800": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(239,108,0 ,1)`
			: `rgba(239,108,0 ,${opacity})`;
	},
	"orange-900": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(230,81,0 ,1)`
			: `rgba(230,81,0 ,${opacity})`;
	},
	//	brown
	brown: (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(121,85,72,1)`
			: `rgba(121,85,72,${opacity})`;
	},
	"brown-50": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(239,235,233 ,1)`
			: `rgba(239,235,233 ,${opacity})`;
	},
	"brown-100": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(215,204,200 ,1)`
			: `rgba(215,204,200 ,${opacity})`;
	},
	"brown-200": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(188,170,164 ,1)`
			: `rgba(188,170,164 ,${opacity})`;
	},
	"brown-300": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(161,136,127 ,1)`
			: `rgba(161,136,127 ,${opacity})`;
	},
	"brown-400": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(141,110,99 ,1)`
			: `rgba(141,110,99 ,${opacity})`;
	},
	"brown-500": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(121,85,72 ,1)`
			: `rgba(121,85,72 ,${opacity})`;
	},
	"brown-600": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(109,76,65 ,1)`
			: `rgba(109,76,65 ,${opacity})`;
	},
	"brown-700": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(93,64,55 ,1)`
			: `rgba(93,64,55 ,${opacity})`;
	},
	"brown-800": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(78,52,46 ,1)`
			: `rgba(78,52,46 ,${opacity})`;
	},
	"brown-900": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(62,39,35 ,1)`
			: `rgba(62,39,35 ,${opacity})`;
	},
	//	gray
	gray: (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(158,158,158,1)`
			: `rgba(158,158,158,${opacity})`;
	},
	"gray-50": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(250,250,250 ,1)`
			: `rgba(250,250,250 ,${opacity})`;
	},
	"gray-100": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(245,245,245 ,1)`
			: `rgba(245,245,245 ,${opacity})`;
	},
	"gray-200": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(238,238,238 ,1)`
			: `rgba(238,238,238 ,${opacity})`;
	},
	"gray-300": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(224,224,224 ,1)`
			: `rgba(224,224,224 ,${opacity})`;
	},
	"gray-400": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(189,189,189 ,1)`
			: `rgba(189,189,189 ,${opacity})`;
	},
	"gray-500": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(158,158,158 ,1)`
			: `rgba(158,158,158 ,${opacity})`;
	},
	"gray-600": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(117,117,117 ,1)`
			: `rgba(117,117,117 ,${opacity})`;
	},
	"gray-700": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(97,97,97 ,1)`
			: `rgba(97,97,97 ,${opacity})`;
	},
	"gray-800": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(66,66,66 ,1)`
			: `rgba(66,66,66 ,${opacity})`;
	},
	"gray-900": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(33,33,33 ,1)`
			: `rgba(33,33,33 ,${opacity})`;
	},
	//	blueGray
	blueGray: (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(96,125,139,1)`
			: `rgba(96,125,139,${opacity})`;
	},
	"blueGray-50": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(236,239,241 ,1)`
			: `rgba(236,239,241 ,${opacity})`;
	},
	"blueGray-100": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(207,216,220 ,1)`
			: `rgba(207,216,220 ,${opacity})`;
	},
	"blueGray-200": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(176,190,197 ,1)`
			: `rgba(176,190,197 ,${opacity})`;
	},
	"blueGray-300": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(144,164,174 ,1)`
			: `rgba(144,164,174 ,${opacity})`;
	},
	"blueGray-400": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(120,144,156 ,1)`
			: `rgba(120,144,156 ,${opacity})`;
	},
	"blueGray-500": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(96,125,139 ,1)`
			: `rgba(96,125,139 ,${opacity})`;
	},
	"blueGray-600": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(84,110,122 ,1)`
			: `rgba(84,110,122 ,${opacity})`;
	},
	"blueGray-700": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(69,90,100 ,1)`
			: `rgba(69,90,100 ,${opacity})`;
	},
	"blueGray-800": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(55,71,79 ,1)`
			: `rgba(55,71,79 ,${opacity})`;
	},
	"blueGray-900": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(38,50,56 ,1)`
			: `rgba(38,50,56 ,${opacity})`;
	},
	//	teal
	teal: (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(96,125,139,1)`
			: `rgba(96,125,139,${opacity})`;
	},
	"teal-50": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(224,242,241 ,1)`
			: `rgba(224,242,241 ,${opacity})`;
	},
	"teal-100": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(178,223,219 ,1)`
			: `rgba(178,223,219 ,${opacity})`;
	},
	"teal-200": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(128,203,196 ,1)`
			: `rgba(128,203,196 ,${opacity})`;
	},
	"teal-300": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(77,182,172 ,1)`
			: `rgba(77,182,172 ,${opacity})`;
	},
	"teal-400": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(38,166,154 ,1)`
			: `rgba(38,166,154 ,${opacity})`;
	},
	"teal-500": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(0,150,136 ,1)`
			: `rgba(0,150,136 ,${opacity})`;
	},
	"teal-600": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(0,137,123 ,1)`
			: `rgba(0,137,123 ,${opacity})`;
	},
	"teal-700": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(0,121,107 ,1)`
			: `rgba(0,121,107 ,${opacity})`;
	},
	"teal-800": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(0,105,92 ,1)`
			: `rgba(0,105,92 ,${opacity})`;
	},
	"teal-900": (opacity?: number) => {
		return typeof opacity !== "number"
			? `rgba(0,77,64 ,1)`
			: `rgba(0,77,64 ,${opacity})`;
	},
};

/*-*-*-*-* fontFamilies *-*-*-*-*/
const fontFamilies = {
	basic: "OptimaLTPro-Roman,Ryumin Regular KL,serif",
	badScript: "'Bad Script', cursive",
	"STIXGeneral-Regular": "STIXGeneral-Regular",
	"STIXGeneral-Italic": "STIXGeneral-Italic",
	"Lucida-Grande": "Lucida Grande",
	STIXSizeTwoSym: "STIXSizeTwoSym",
};

/*-*-*-*-* fontSizes *-*-*-*-*/
const fortSizes = {
	xl: 28,
	lg: 21,
	md: 18,
	basic: 16,
	sm: 13.5,
	xs: 10.5,
};

/*-*-*-*-* styles *-*-*-*-*/
const styles = {
	letterSpacing: "0.1em",
	lineHeight: "1.8px",
	fontFamily: "Google Sans Display",
	paleBorder: "solid 1px #d2d2d2",
	tableBorder: "solid 1px rgba(244,244,244,1)",
	"transform-transition": "transform 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
};

/*-*-*-*-* class *-*-*-*-*/
export default class {
	/*-*-*-*-* Pickers *-*-*-*-*/
	colorPicker(color: keyof typeof colors, opacity?: number): string {
		return colors[color](opacity);
	}
	fontFamiPicker(key: keyof typeof fontFamilies): string {
		return fontFamilies[key];
	}
	fontSizePicker(size: keyof typeof fortSizes): number {
		return fortSizes[size];
	}
	stylesPicker(style_key: keyof typeof styles): string {
		return styles[style_key];
	}

	/*-*-*-*-* format styles *-*-*-*-*/
	scrollVisibled(args: {
		scrollX?: boolean;
		scrollY?: boolean;
	}): CSSProperties {
		const overflowX = args.scrollX ? "scroll" : "hidden";
		const overflowY = args.scrollY ? "scroll" : "hidden";
		return {
			overflowX,
			overflowY,
			"-ms-overflow-style": "none",
			scrollbarWidth: "none",
			"&::-webkit-scrollbar": {
				display: "none",
			},
		};
	}
	ellipsis(): CSSProperties {
		return {
			whiteSpace: "nowrap",
			overflowX: "hidden",
			textOverflow: "ellipsis",
		};
	}
	"ellipsis-multiLine"(lineNum: number): CSSProperties {
		return {
			whiteSpace: "pre-line",
			display: "-webkit-box",
			wordBreak: "break-all",
			"-webkit-box-orient": "vertical",
			"-webkit-line-clamp": lineNum,
			overflow: "hidden",
		};
	}
	btnColor(
		base: { color: string; backgroundColor: string },
		hover?: { color: string; backgroundColor: string }
	): CSSProperties {
		return {
			backgroundColor: base.backgroundColor,
			color: base.color,
			"&:hover": {
				backgroundColor: hover?.backgroundColor
					? hover.backgroundColor
					: base.backgroundColor,
				color: hover?.color ? hover.color : base.color,
			},
		};
	}
	"textShadow-color"(color: string) {
		return `0 0 10px ${color},0 0 10px ${color},0 0 10px ${color},0 0 10px ${color}`;
	}
	"textShadow-paleColor"(color: string) {
		return `0 0 10px ${color}`;
	}
	boxShadow(color: string): string {
		const px = "40px";
		return `inset 0 0 ${px} ${color},inset 0 0 ${px} ${color},inset 0 0 ${px} ${color},inset 0 0 ${px} ${color},inset 0 0 ${px} ${color},inset 0 0 ${px} ${color}`;
	}
	transition(property: string) {
		return `${property} 500ms ease-out 0s,-webkit-transform 500ms ease-out 0s`;
	}
}
