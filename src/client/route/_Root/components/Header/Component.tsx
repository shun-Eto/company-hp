import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import * as H from "history";

//	components

//	materials
import { AppBar, Container, Toolbar } from "@material-ui/core";
import {} from "@fortawesome/react-fontawesome";

//	reudcers
import * as RootReducer from "@src/client/redux/reducers/rootReducer";

//	assets
import Img_Logo from "@src/client/assets/images/logo.png";

//	styles
import * as useStyles from "./_useStyles";

//	types
import * as EnvTypes from "@src/types/environment";

/*-*-*-*-* component props *-*-*-*-*/
interface OwnProps extends RouteComponentProps {
	history: H.History;
	root: RootReducer.StateProps;
}
interface ComponentProps {}
type Props = OwnProps & ComponentProps;
const Component: React.FC<Props> = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const {} = props;
	const { root } = props;
	const { lang } = root.env;
	//	states
	//	styles
	const classes = useStyles.Root({});

	/*-*-*-*-* handlers *-*-*-*-*/

	/*-*-*-*-* lifeCycles *-*-*-*-*/

	/*-*-*-*-* component *-*-*-*-*/
	return (
		<AppBar position="relative" className={classes.AppBar}>
			<Toolbar className={classes.Toolbar}>
				<Container className={classes.Container}>
					{/*-*-*-*-* Logo *-*-*-*-*/}
					<div className={classes.Logo}>
						<Logo />
					</div>

					{/*-*-*-*-* Menu *-*-*-*-*/}
					<div className={classes.Menu}>
						<Menu />
					</div>
				</Container>
			</Toolbar>
		</AppBar>
	);
};

/*-*-*-*-* Logo *-*-*-*-*/
const Logo = () => {
	/*-*-*-*-* properties *-*-*-*-*/
	const classes = useStyles.Logo({});

	/*-*-*-*-* render *-*-*-*-*/
	return <img src={Img_Logo} className={classes.Logo} />;
};

/*-*-*-*-* Menu *-*-*-*-*/
const Menu = () => {
	return <div>Menu</div>;
};

/*-*-*-*-* default *-*-*-*-*/
export default withRouter(Component);
