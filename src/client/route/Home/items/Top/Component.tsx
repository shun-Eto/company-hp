import * as React from "react";

//	components

//	materials
import { Fade } from "@material-ui/core";
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
	const anchor = React.useRef<HTMLDivElement>(null);
	//	states
	const [active, setActive] = React.useState(false);
	//	styles
	const classes = useStyles.Item({});

	/*-*-*-*-* handlers *-*-*-*-*/

	/*-*-*-*-* lifeCycles *-*-*-*-*/
	React.useEffect(() => {
		if (anchor.current) setActive(true);
	}, [anchor.current]);

	/*-*-*-*-* component *-*-*-*-*/
	return (
		<div className={classes.Item} ref={anchor}>
			<Fade in={active} timeout={3000}>
				<div className={classes.wrapper}>
					<img src={Img_homeMain} alt="" className={classes.img} />
				</div>
			</Fade>
		</div>
	);
};

/*-*-*-*-* default *-*-*-*-*/
export default Component;
