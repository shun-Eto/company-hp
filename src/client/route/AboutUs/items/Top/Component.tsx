import * as React from "react";

//	components

//	materials
import { Container, Fade, Paper, Slide } from "@material-ui/core";
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
		<Container maxWidth="md" className={classes.Item}>
			<Paper className={classes.wrapper} elevation={6}>
				<img src={Img_Main} alt="" className={classes.img} />
			</Paper>
		</Container>
	);
};

/*-*-*-*-* default *-*-*-*-*/
export default Component;
