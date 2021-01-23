import * as React from "react";

//	components

//	materials
import { Container, Fade, Paper, Slide } from "@material-ui/core";
import {} from "@fortawesome/react-fontawesome";

//	styles
import * as useStyles from "./_useStyles";

//	assets
import Img_homeMain from "@src/client/assets/images/home-main.png";

//	types
import * as EnvTypes from "@src/types/environment";

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
		<Slide direction="left" in={true} timeout={1000}>
			<Container maxWidth="md" className={classes.Item}>
				<Fade in={true} timeout={3000}>
					<Paper className={classes.wrapper} elevation={10}>
						<img src={Img_homeMain} alt="" className={classes.img} />
					</Paper>
				</Fade>
			</Container>
		</Slide>
	);
};

/*-*-*-*-* default *-*-*-*-*/
export default Component;
