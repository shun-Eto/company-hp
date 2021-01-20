import * as React from "react";

//	components

//	materials
import { Hidden, Typography } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//	styles
import * as useStyles from "./_useStyles";

//	types
import * as EnvTypes from "@src/types/environment";

/*-*-*-*-* component props *-*-*-*-*/
interface ComponentProps {
	labels: {
		start: string;
		center: string;
		end: string;
	};
	width?: number;
}
type Props = ComponentProps;
export const Square: React.FC<Props> = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const { labels, width } = props;
	//	states
	//	styles
	const classes = useStyles.Square({ width });

	/*-*-*-*-* handlers *-*-*-*-*/

	/*-*-*-*-* lifeCycles *-*-*-*-*/

	/*-*-*-*-* component *-*-*-*-*/
	return (
		<div className={classes.wrapper}>
			<div className={classes.Square}>
				<div className={classes["Square-start"]}>{labels.start}</div>
				<div className={classes["Square-center"]}>{labels.center}</div>
				<div className={classes["Square-end"]}>{labels.end}</div>
			</div>
		</div>
	);
};
