import * as React from "react";

//	components

//	materials
import { Fade, Slide } from "@material-ui/core";
import {} from "@fortawesome/react-fontawesome";

//	assets
import Img_Main from "@src/client/assets/images/aboutUs-main.png";

//	styles
import * as useStyles from "./_useStyles";

//	types
import * as EnvTypes from "@src/types/environment";

/*-*-*-*-* component props *-*-*-*-*/
interface ComponentProps {
	lang: keyof EnvTypes.Languages;
}
type Props = ComponentProps;
const Component: React.FC<Props> = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const {} = props;
	//	states
	//	styles
	const classes = useStyles.Item({});

	/*-*-*-*-* handlers *-*-*-*-*/

	/*-*-*-*-* lifeCycles *-*-*-*-*/

	/*-*-*-*-* component *-*-*-*-*/
	return (
		<Slide direction="left" in={true} timeout={1000}>
			<div className={classes.Item}>
				<Fade in={true} timeout={3000}>
					<div className={classes.wrapper}>
						<img src={Img_Main} alt="" className={classes.img} />
					</div>
				</Fade>
			</div>
		</Slide>
	);
};

/*-*-*-*-* default *-*-*-*-*/
export default Component;
