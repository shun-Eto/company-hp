import { CSSProperties } from "@material-ui/core/styles/withStyles";
import {
	makeStyles,
	createStyles,
	Theme,
	createMuiTheme,
} from "@material-ui/core";

/*-*-*-*-* basicColors *-*-*-*-*/
export const basicColors = {
	//	blandColor
	brandColor: "rgba(31,47,66,1)",
	paleBrandColor: "rgba(29,49,68,0.1)",
	//	black
	black: "rgb(40,40,40)",
	"black-pale": "#3c3c3c",
	"black-gray": "#757575",
	"black-a": (a: number) => {
		return `rgba(40,40,40,${a})`;
	},
	//	gray
	gray: "#9E9E9E",
	"gray-50": "#FAFAFA",
	"gray-100": "#F5F5F5",
	"gray-200": "#EEEEEE",
	"gray-300": "#E0E0E0",
	"gray-400": "#BDBDBD",
	"gray-500": "#9E9E9E",
	"gray-600": "#757575",
	"gray-700": "#616161",
	"gray-800": "#424242",
	"gray-900": "#212121",
	"gray-a": (a: number) => {
		return `rgba(158,158,158,${a})`;
	},
	//	midnightBlue
	blueGray: "#607D8B",
	"blueGray-900": "#263238",
	"blueGray-500": "#607D8B",
	"blueGray-200": "#B0BEC5",
	"blueGray-100": "#CFD8DC",
	//	white
	white: "#f0f2ec",
	"white-gray": "#d2d2d2",
	"white-a": (a: number) => {
		return `rgba(255,255,255,${a})`;
	},
	//	red
	red: "#c53830",
	"red-dark": "#2F0500",
	"red-a": (a: number) => {
		return `rgba(244,67,54,${a})`;
	},
	//	blue
	blue: "#2196F3",
	"blue-dark": "#042537",
	"blue-900": "#0D47A1",
	"blue-800": "#1565C0",
	"blue-700": "#1976D2",
	"blue-600": "#1E88E5",
	"blue-500": "#2196F3",
	"blue-400": "#42A5F5",
	"blue-300": "#64B5F6",
	"blue-200": "#90CAF9",
	"blue-100": "#BBDEFB",
	"blue-50": "#E3F2FD",
	"blue-a": (a: number) => {
		return `rgba(33,150,243,${a})`;
	},
	//	lignthBlue
	lightBlue: "rgb(3,169,244)",
	//	indigo
	indigo: "#3F51B5",
	"indigo-900": "#1A237E",
	"indigo-500": "#3F51B5",
	"indigo-400": "#5C6BC0",
	"indigo-300": "#7986CB",
	"indigo-200": "#9FA8DA",
	"indigo-100": "#C5CAE9",
	"indigo-50": "#E8EAF6",
	//	green
	green: "#4CAF50",
	"green-50": "#E8F5E9",
	"green-100": "#C8E6C9",
	"green-200": "#A5D6A7",
	"green-300": "#81C784",
	"green-400": "#66BB6A",
	"green-500": "#4CAF50",
	"green-600": "#43A047",
	"green-700": "#388E3C",
	"green-800": "#2E7D32",
	"green-900": "#1B5E20",
	"green-dark": "#0B2F0F",
	"green-a": (a: number) => {
		return `rgba(76,175,80,${a})`;
	},
	//	brown
	brown: "#4E342E",
	"brown-100": "#D7CCC8",
	//	behance
	behance: "#131418",
	//	orange
	orange: "#FF9800",
	"orange-900": "#E65100",
	"orange-800": "#EF6C00",
	"orange-700": "#F57C00",
	"orange-600": "#FB8C00",
	"orange-500": "#FF9800",
	//	yellow
	yellow: "#FFEB3B",
	"yellow-900": "#F57F17",
	"yellow-800": "#F9A825",
	"yellow-700": "#FBC02D",
	"yellow-600": "#FDD835",
	"yellow-500": "#FFEB3B",
	"yellow-a": (a: number) => {
		return `rgba(255,235,59 , ${a})`;
	},
	//	pink
	pink: "#E91E63",
	"pink-50": "#FCE4EC",
	"pink-100": "#F8BBD0",
	"pink-200": "#F48FB1",
	"pink-300": "#F06292",
	"pink-400": "#EC407A",
	"pink-500": "#E91E63",
	"pink-600": "#D81B60",
	"pink-700": "#C2185B",
	"pink-800": "#AD1457",
	"pink-900": "#880E4F",

	/*-*-*-*-* Youtube *-*-*-*-*/
	youtube: {
		darkTheme_backgroundColor: "#283142",
		darkTheme_color: "#eceff1",
	},

	/*-*-*-*-* header footer *-*-*-*-*/
	header: "#2F0500",
	footer: "#2F0500",
	"footer-text": "rgb(134,134,139)",

	/*-*-*-*-* element style *-*-*-*-*/
	"link-color": "rgb(0,102,204)",
};

/*-*-*-*-* basicStyles *-*-*-*-*/
export const basicStyles = {
	/*-*-*-*-* fontSize *-*-*-*-*/
	"fontSize-xl": 28,
	"fontSize-lg": 21,
	"fontSize-md": 18,
	fontSize: 16,
	"fontSize-sm": 13.5,
	"fontSize-xs": 10.5,
	errorFontSize: 10.5,

	letterSpacing: "0.1em",
	lineHeight: 1.8,
	fontFamily: "Google Sans Display",

	paleBorder: "solid 1px #d2d2d2",
	tableBorder: "solid 1px rgba(244,244,244,1)",

	"transform-transition": "transform 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",

	//	hidden scroll
	scrollInVisible: (args: {
		scrollX?: boolean;
		scrollY?: boolean;
	}): CSSProperties => {
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
	},

	//	subject
	subject: (args?: {}): CSSProperties => {
		return {
			marginRight: 8,
			backgroundColor: basicColors["gray-300"],
			padding: "4px 8px",
			borderRadius: 5,
			fontSize: basicStyles["fontSize-xs"],
		};
	},

	//	subject
	tag: (args?: {}): CSSProperties => {
		return {
			marginRight: 8,
			padding: "4px 8px",
			backgroundColor: basicColors["indigo-50"],
			borderRadius: 5,
			fontSize: basicStyles["fontSize-xs"],
		};
	},

	//	ellipsis
	ellipsis: (args?: {}): CSSProperties => {
		return {
			whiteSpace: "nowrap",
			overflowX: "hidden",
			textOverflow: "ellipsis",
		};
	},

	//	goldenRatio
	get_goldenRatio: (unit: number): number => {
		const goldenRatio = (1 + Math.sqrt(5)) / 2;
		return unit * goldenRatio;
	},

	/*-*-*-*-* textShadow *-*-*-*-*/
	"textShadow-color": (color: string) => {
		return `0 0 10px ${color},0 0 10px ${color},0 0 10px ${color},0 0 10px ${color}`;
	},
	"textShadow-paleColor": (color: string) => {
		return `0 0 10px ${color}`;
	},

	/*-*-*-*-* ellipsis-multiLine *-*-*-*-*/
	"ellipsis-multiLine": (lineNum: number): CSSProperties => {
		return {
			whiteSpace: "pre-line",
			display: "-webkit-box",
			wordBreak: "break-all",
			"-webkit-box-orient": "vertical",
			"-webkit-line-clamp": lineNum,
			overflow: "hidden",
		};
	},

	/*-*-*-*-* btnColor *-*-*-*-*/
	btnColor: (
		base: { color: string; backgroundColor: string },
		hover?: {
			color: string;
			backgroundColor: string;
		}
	): CSSProperties => {
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
	},
};

/*-*-*-*-* BasicTheme *-*-*-*-*/
export const BasicTheme = createMuiTheme({
	palette: {
		primary: {
			main: basicColors.black,
		},
		secondary: {
			main: basicColors.white,
		},
	},
});
