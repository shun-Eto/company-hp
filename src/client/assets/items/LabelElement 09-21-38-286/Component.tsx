import * as React from "react";

//	components

//	materials
import { Hidden } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//	styles
import * as useStyles from "./_useStyles";

//	types
import * as EnvTypes from "@src/types/environment";
import { basicStyles } from "../../styles/basicStyles";
import { colorPicker } from "../../styles/origStyles";

/*-*-*-*-* Basic *-*-*-*-*/
interface BasicProps {
	text: string;
	theme?: EnvTypes.Theme;
	type?: "outsource";
}
export const Basic: React.FC<BasicProps> = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const { text, type } = props;
	const outsourceTheme: EnvTypes.Theme = {
		fontSize: basicStyles["fontSize-xs"],
		padding: "2px 4px",
		bgColor: colorPicker("brown-500"),
		color: colorPicker("brandWhite"),
		margin: "0 4px 0 0",
	};
	const origTheme: EnvTypes.Theme | undefined = React.useMemo(() => {
		switch (type) {
			case "outsource":
				return outsourceTheme;
			default:
				return props.theme;
		}
	}, [type]);
	//	styles
	const classes = useStyles.Basic({ origTheme });

	/*-*-*-*-* component *-*-*-*-*/
	return <span className={classes.Basic}>{text}</span>;
};
