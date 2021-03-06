import * as React from "react";

//	components

//	materials
import { Container, Fade, Paper, Slide } from "@material-ui/core";
import {} from "@fortawesome/react-fontawesome";

//	styles
import * as useStyles from "./_useStyles";

//	modules
import * as EnvModule from "@src/client/assets/modules/envModule";

//	assets
import Img_homeMain from "@src/client/assets/images/home-main.png";

//	types
import * as EnvTypes from "@src/types/environment";

//	classes
const envClass = new EnvModule.default();

/*-*-*-*-* component props *-*-*-*-*/
interface ComponentProps {}
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
		<Container maxWidth="md" className={classes.Item}>
			<Paper className={classes.wrapper} elevation={10}>
				<img src={Img_homeMain} alt="" className={classes.img} />
			</Paper>
		</Container>
	);
};

/*-*-*-*-* default *-*-*-*-*/
export default Component;
