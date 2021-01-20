import * as React from "react";
import {
	withRouter,
	RouteComponentProps,
	Route,
	Switch,
} from "react-router-dom";

//	components

//	route components
import Home from "@src/client/route/Home/_index";

//	materials
import { Container, Hidden, Toolbar } from "@material-ui/core";

//	modules

//	styles
import * as useStyles from "./_useStyles";

//	actions
import * as RootAction from "@src/client/redux/actions/rootAction";

//	reducers
import * as RootReducer from "@src/client/redux/reducers/rootReducer";

//	types
import * as EnvTypes from "@src/types/environment";

//	props
interface OwnProps extends RouteComponentProps {
	root: RootReducer.StateProps;
}
interface FunctionProps {}
type Props = OwnProps & FunctionProps;

/*-*-*-*-* Component *-*-*-*-*/
const Component: React.FC<Props> = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/
	//	states
	const { root } = props;
	const { lang } = root.env;
	//	classes
	//	styles

	/*-*-*-*-* handlers *-*-*-*-*/

	/*-*-*-*-* lifeCycles *-*-*-*-*/

	/*-*-*-*-* return *-*-*-*-*/
	return (
		<Root>
			<Switch>
				{/*-*-*-*-* Home *-*-*-*-*/}
				<Route exact path={"/"} component={Home} />

			</Switch>
		</Root>
	);
};

/*-*-*-*-* Root *-*-*-*-*/
interface ComnProps {}
const Root: React.FC = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/

	//	styles
	const classes = useStyles.Root({});

	/*-*-*-*-* common props *-*-*-*-*/
	const comnProps: ComnProps = {};

	/*-*-*-*-* component *-*-*-*-*/
	return (
		<div className={classes.Root}>
			{/*-*-*-*-* small display *-*-*-*-*/}
			<Hidden smUp>
				<RootSm {...comnProps} children={props.children} />
			</Hidden>

			{/*-*-*-*-* large display *-*-*-*-*/}
			<Hidden xsDown>
				<RootLg {...comnProps} children={props.children} />
			</Hidden>
		</div>
	);
};

/*-*-*-*-* small : Root *-*-*-*-*/
const RootSm: React.FC<ComnProps> = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/
	//	styles
	const classes = useStyles.RootSm({});

	/*-*-*-*-* component *-*-*-*-*/
	return <div className={classes.Root}>{props.children}</div>;
};

/*-*-*-*-* large : Root *-*-*-*-*/
const RootLg: React.FC<ComnProps> = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/
	//	styles
	const classes = useStyles.RootLg({});

	/*-*-*-*-* component *-*-*-*-*/
	return (
		<div className={classes.Root}>
		</div>
	);
};

/*-*-*-*-* default *-*-*-*-*/
export default withRouter(Component);
