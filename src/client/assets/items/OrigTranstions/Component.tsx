import * as React from "react";

//	components

//	materials
import { Fade, Slide } from "@material-ui/core";
import {} from "@fortawesome/react-fontawesome";

//	styles
import * as useStyles from "./_useStyles";

//	types
import * as EnvTypes from "@src/types/environment";

/*-*-*-*-* Transition *-*-*-*-*/
interface SlideLeftProps {
	in?: boolean;
}
export const SlideLeft: React.FC<SlideLeftProps> = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const [active, setActive] = React.useState(true);
	//	styles
	const classes = useStyles.SlideLeft({});

	/*-*-*-*-* render *-*-*-*-*/
	return (
		<Slide direction="left" in={props.in} timeout={1000}>
			<div className={classes.container}>
				<Fade in={props.in} timeout={3000}>
					<div className={classes.wrapper}>{props.children}</div>
				</Fade>
			</div>
		</Slide>
	);
};
