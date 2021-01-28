import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import * as H from "history";

//	components
import * as OrigTransitions from "@src/client/assets/items/OrigTranstions/Component";

//	item compoentns
import Item_Top from "./items/Top/Component";

//	materials
import { Fade, Hidden, Slide } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//	actions
import * as RootAction from "@src/client/redux/actions/rootAction";

//	reducers
import * as RootReducer from "@src/client/redux/reducers/rootReducer";

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
interface ComnProps {
	lang: keyof EnvTypes.Languages;
}
const Component: React.FC<Props> = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const { root } = props;
	const { lang } = root.env;
	//	states
	//	styles

	/*-*-*-*-* handlers *-*-*-*-*/

	/*-*-*-*-* lifeCycles *-*-*-*-*/

	/*-*-*-*-* comnProps *-*-*-*-*/
	const comnProps: ComnProps = {
		lang,
	};

	/*-*-*-*-* component *-*-*-*-*/
	return (
		<React.Fragment>
			{/*-*-*-*-* small *-*-*-*-*/}
			<Hidden smUp>
				<HomeSm {...comnProps} />
			</Hidden>

			{/*-*-*-*-* large *-*-*-*-*/}
			<Hidden xsDown>
				<HomeLg {...comnProps} />
			</Hidden>
		</React.Fragment>
	);
};

/*-*-*-*-* small Home *-*-*-*-*/
const HomeSm: React.FC<ComnProps> = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const {} = props;
	const homeRef = React.useRef<HTMLDivElement>(null);
	const classes = useStyles.HomeSm({});

	React.useEffect(() => {
		if (homeRef.current) {
			homeRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
		}
	}, [homeRef]);

	/*-*-*-*-* component *-*-*-*-*/
	return (
		<React.Fragment>
			{/* Top */}
			<div ref={homeRef} className={classes.Home}>
				<OrigTransitions.SlideLeft in={true}>
					<Item_Top />
				</OrigTransitions.SlideLeft>
			</div>
		</React.Fragment>
	);
};

/*-*-*-*-* large Home *-*-*-*-*/
const HomeLg: React.FC<ComnProps> = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const { lang } = props;
	//	states
	//	memo
	//	anchors
	//	styles
	const classes = useStyles.HomeLg({});

	/*-*-*-*-* handlers *-*-*-*-*/

	/*-*-*-*-* lifeCycles *-*-*-*-*/

	/*-*-*-*-* component *-*-*-*-*/
	return (
		<React.Fragment>
			{/* Top */}
			<div className={classes.Home}>
				<OrigTransitions.SlideLeft in={true}>
					<Item_Top />
				</OrigTransitions.SlideLeft>
			</div>
		</React.Fragment>
	);
};

/*-*-*-*-* default *-*-*-*-*/
export default withRouter(Component);
