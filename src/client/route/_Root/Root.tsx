import * as React from "react";
import {
	withRouter,
	RouteComponentProps,
	Route,
	Switch,
} from "react-router-dom";

//	components
import Header from "./components/Header/_index";
import Navigator from "./components/Navigator/_index";
import Footer from "./components/Footer/_index";

//	route components
import Home from "@src/client/route/Home/_index";

//	materials
import { Hidden } from "@material-ui/core";

//	styles
import * as useStyles from "./_useStyles";
import * as OrigStyles from "@src/client/assets/styles/origStyles";

//	assets
import * as LoadingWindow from "@src/client/assets/items/LoadingWindow/Component";
import Img_SopherreIcon from "@src/client/assets/images/sopherre-icon.png";

//	actions
import * as RootAction from "@src/client/redux/actions/rootAction";

//	reducers
import * as RootReducer from "@src/client/redux/reducers/rootReducer";

//	types
import * as EnvTypes from "@src/types/environment";

const origStyles = new OrigStyles.default();
const { colorPicker } = origStyles;

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
	//	states
	const [header, setHeader] = React.useState<HTMLDivElement>();
	const [nav, setNav] = React.useState<HTMLDivElement>();
	const [footer, setFooter] = React.useState<HTMLDivElement>();
	//	refs
	const headerRef = React.useRef<HTMLDivElement>(null);
	const navRef = React.useRef<HTMLDivElement>(null);
	const footerRef = React.useRef<HTMLDivElement>(null);
	//	styles
	const classes = useStyles.RootLg({ header, nav, footer });

	/*-*-*-*-* lifeCycles *-*-*-*-*/
	//	headerRef , navRef , footerRef
	React.useEffect(() => {
		if (headerRef.current && navRef.current && footerRef.current) {
			setHeader(headerRef.current);
			setNav(navRef.current);
			setFooter(footerRef.current);
		}
	}, [headerRef, navRef, footerRef]);

	/*-*-*-*-* component *-*-*-*-*/
	return (
		<div className={classes.Root}>
			{/*-*-*-*-* header *-*-*-*-*/}
			<div className={classes.header} ref={headerRef}>
				<Header />
			</div>

			{/*-*-*-*-* body *-*-*-*-*/}
			<div className={classes.body}>{props.children}</div>

			{/*-*-*-*-* navigator *-*-*-*-*/}
			<div className={classes.navigator} ref={navRef}>
				<Navigator />
			</div>

			{/*-*-*-*-* footer *-*-*-*-*/}
			<div className={classes.footer} ref={footerRef}>
				<Footer />
			</div>
		</div>
	);
};

/*-*-*-*-* default *-*-*-*-*/
export default withRouter(Component);
