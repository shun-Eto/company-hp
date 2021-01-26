import { makeStyles, Theme, createStyles } from "@material-ui/core";

//	modules
import * as OrigStylesModule from "@src/client/assets/styles/origStyles";

//	types
import * as EnvTypes from "@src/types/environment";

//	classes
const origStyles = new OrigStylesModule.default();
const { colorPicker, fontFamiPicker, fontSizePicker } = origStyles;

/*-*-*-*-* Item *-*-*-*-*/
export const Item = (params: {}) =>
	makeStyles((theme: Theme) => {
		/*-*-*-*-* properties *-*-*-*-*/
		const {} = params;

		/*-*-*-*-* component *-*-*-*-*/
		return createStyles({
			Item: {},
			"Grid-contaniner": {},

			"Grid-item": {
				position: "relative",
				lineHeight: 0,
				borderRadius: theme.shape.borderRadius,
				"&:first-child": {
					borderTopRightRadius: 0,
					borderBottomRightRadius: 0,
				},
				"&:last-child": {
					borderTopLeftRadius: 0,
					borderBottomLeftRadius: 0,
				},
			},
			"item-Paper": {
				borderRadius: "inherit",
				overflow: "hidden",
			},
			"item-img": {
				width: "100%",
				objectFit: "cover",
			},
			"item-btn": {
				position: "absolute",
				top: 0,
				left: 0,
				width: "100%",
				height: "100%",
				backgroundColor: colorPicker("brandBlack", 0.5),
				zIndex: 1,
			},
			"item-borderBox": {
				position: "absolute",
				top: "10%",
				left: "5%",
				width: "90%",
				height: "80%",
				zIndex: 2,
				border: `solid 1px white`,
			},
		});
	})();

export const ImgButton = (params: {}) =>
	makeStyles((theme: Theme) => {
		const {} = params;

		return createStyles({
			image: {
				position: "relative",
				height: 200,
				width: "100%",
				[theme.breakpoints.down("xs")]: {
					width: "100% !important", // Overrides inline-style
					height: 100,
				},
				"&:hover, &$focusVisible": {
					zIndex: 1,
					"& $imageBackdrop": {
						opacity: 0.15,
					},
					"& $imageMarked": {
						opacity: 0,
					},
					"& $imageTitle": {
						border: "4px solid currentColor",
					},
				},
			},
			focusVisible: {},
			imageButton: {
				position: "absolute",
				left: 0,
				right: 0,
				top: 0,
				bottom: 0,
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				color: theme.palette.common.white,
			},
			imageSrc: {
				position: "absolute",
				left: 0,
				right: 0,
				top: 0,
				bottom: 0,
				objectFit: "cover",
				width: "100%",
				height: "100%",
			},
			imageBackdrop: {
				position: "absolute",
				left: 0,
				right: 0,
				top: 0,
				bottom: 0,
				backgroundColor: theme.palette.common.black,
				opacity: 0.4,
				transition: theme.transitions.create("opacity"),
			},
			imageTitle: {
				position: "relative",
				padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
					theme.spacing(1) + 6
				}px`,
			},
			imageMarked: {
				height: 3,
				width: 18,
				backgroundColor: theme.palette.common.white,
				position: "absolute",
				bottom: -2,
				left: "calc(50% - 9px)",
				transition: theme.transitions.create("opacity"),
			},
		});
	})();

/*
export const Root = (params: {}) =>
    makeStyles((theme: Theme) => {
		const {} = params;

		return createStyles({
			Root: {},
		});
    })();
*/
