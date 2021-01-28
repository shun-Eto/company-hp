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
import AboutUs from "@src/client/route/AboutUs/_index";
import Work from "@src/client/route/Work/_index";
import Contact from "@src/client/route/Contact/_index";

//	materials
import { Hidden } from "@material-ui/core";

//	styles
import * as useStyles from "./_useStyles";
import * as OrigStyles from "@src/client/assets/styles/origStyles";

//	assets

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
	//	actions
	rootActions: {};
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

				{/*-*-*-*-* About Us *-*-*-*-*/}
				<Route exact path={"/about-us"} component={AboutUs} />

				{/*-*-*-*-* Work *-*-*-*-*/}
				<Route exact path={"/work"} component={Work} />

				{/*-*-*-*-* Contact *-*-*-*-*/}
				<Route exact path={"/contact"} component={Contact} />
			</Switch>
		</Root>
	);
};

/*-*-*-*-* Root *-*-*-*-*/
interface RootProps {}
interface ComnProps {}
const Root: React.FC<RootProps> = (props) => {
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
	const [header, setHeader] = React.useState<HTMLDivElement>();
	const headerRef = React.useRef<HTMLDivElement>(null);
	//	styles
	const classes = useStyles.RootSm({ header });

	/*-*-*-*-* lifeCycles *-*-*-*-*/
	React.useEffect(() => {
		if (headerRef.current) {
			setHeader(headerRef.current);
		}
	}, [headerRef]);

	/*-*-*-*-* component *-*-*-*-*/
	return (
		<div className={classes.Root}>
			{/*-*-*-*-* header *-*-*-*-*/}
			<div ref={headerRef} className={classes.header}>
				<Header />
			</div>

			{/*-*-*-*-* container *-*-*-*-*/}
			<div className={classes.container}>
				{/*-*-*-*-* body *-*-*-*-*/}
				{props.children}

				{/*-*-*-*-* footer *-*-*-*-*/}
				<div className={classes.footer}>
					<Footer />
				</div>
			</div>

			{/*-*-*-*-* navigator *-*-*-*-*/}
			<div className={classes.navigator}>
				<Navigator />
			</div>
		</div>
	);
};

/*-*-*-*-* large : Root *-*-*-*-*/
const RootLg: React.FC<ComnProps> = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const {} = props;
	//	states
	const [header, setHeader] = React.useState<HTMLDivElement>();
	const [nav, setNav] = React.useState<HTMLDivElement>();
	const [footer, setFooter] = React.useState<HTMLDivElement>();
	//	refs
	const headerRef = React.useRef<HTMLDivElement>(null);
	const footerRef = React.useRef<HTMLDivElement>(null);
	//	styles
	const classes = useStyles.RootLg({ header, nav, footer });

	/*-*-*-*-* lifeCycles *-*-*-*-*/
	//	headerRef , navRef , footerRef
	React.useEffect(() => {
		if (headerRef.current && footerRef.current) {
			setHeader(headerRef.current);
			setFooter(footerRef.current);
		}
	}, [headerRef, footerRef]);

	/*-*-*-*-* component *-*-*-*-*/
	return (
		<div className={classes.Root}>
			{/*-*-*-*-* header *-*-*-*-*/}
			<div className={classes.header} ref={headerRef}>
				<Header />
			</div>

			{/*-*-*-*-* body *-*-*-*-*/}
			<div className={classes.body}>{props.children}</div>

			{/*-*-*-*-* footer *-*-*-*-*/}
			<div className={classes.footer} ref={footerRef}>
				<Navigator />
				<Footer />
			</div>
		</div>
	);
};

/*-*-*-*-* default *-*-*-*-*/
export default withRouter(Component);
