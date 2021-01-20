import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import * as H from "history";

//	components

//	item compoentns

//	materials
import { Fade, Hidden } from "@material-ui/core";
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
	//	actions
	rootActions: {
		update_navId: typeof RootAction.update_navId;
		update_footer: typeof RootAction.update_footer;
	};
}
interface ComponentProps {}
type Props = OwnProps & ComponentProps;
interface ComnProps {
	lang: keyof EnvTypes.Languages;
	navId: string;
	//	handlers
	onChange_navId: (nav: string) => void;
	onChange_footer: (active: boolean) => void;
}
const Component: React.FC<Props> = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const { root } = props;
	const { lang, navId } = root.env;
	//	states
	//	styles

	/*-*-*-*-* handlers *-*-*-*-*/

	/*-*-*-*-* lifeCycles *-*-*-*-*/

	/*-*-*-*-* comnProps *-*-*-*-*/
	const comnProps: ComnProps = {
		lang,
		navId,
		//	handlers
		onChange_navId: (nav: string) => props.rootActions.update_navId(nav),
		onChange_footer: (active: boolean) =>
			props.rootActions.update_footer(active),
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

	/*-*-*-*-* component *-*-*-*-*/
	return <div></div>;
};

/*-*-*-*-* large Home *-*-*-*-*/
const HomeLg: React.FC<ComnProps> = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const { navId, lang } = props;
	//	states
	const menuCount = 2;
	const [height, setHeight] = React.useState(0);
	const [scrooling, setScrooling] = React.useState(false);
	//	memo
	const endHeight = React.useMemo(() => {
		return height * (menuCount - 1) - 100;
	}, [height, menuCount]);
	//	anchors
	const anchor = React.useRef<HTMLDivElement>(null);
	const anchorPhilosophy = React.useRef<HTMLDivElement>(null);
	const anchorProfile = React.useRef<HTMLDivElement>(null);
	//	styles
	const classes = useStyles.HomeLg({});

	/*-*-*-*-* handlers *-*-*-*-*/
	const handleOnScroll_root = (e: React.UIEvent<HTMLDivElement>) => {
		if (scrooling) return;

		const scrollTop = e.currentTarget.scrollTop;
		if (scrollTop < 100 && navId !== "philosophy") {
			props.onChange_navId("philosophy");
		} else if (
			height - 100 < scrollTop &&
			scrollTop < height + 100 &&
			navId !== "profile"
		) {
			props.onChange_navId("profile");
		}

		const end = endHeight <= scrollTop && scrollTop <= height * (menuCount - 1);
		props.onChange_footer(end);
	};

	/*-*-*-*-* lifeCycles *-*-*-*-*/
	//	anchor
	React.useEffect(() => {
		if (anchor.current) setHeight(anchor.current.clientHeight);
		props.onChange_navId("philosophy");
	}, [anchor]);
	//	navId
	React.useEffect(() => {
		setScrooling(true);

		if (navId === "philosophy" && anchorPhilosophy.current) {
			anchorPhilosophy.current.scrollIntoView(true);
		} else if (navId === "profile" && anchorProfile.current) {
			anchorProfile.current.scrollIntoView(true);
		}

		setTimeout(() => setScrooling(false), 500);
	}, [navId]);

	/*-*-*-*-* component *-*-*-*-*/
	return (
		<Fade in={true}>
			<div
				className={classes.Home}
				ref={anchor}
				//	handlers
				onScroll={handleOnScroll_root}
			>
			</div>
		</Fade>
	);
};

/*-*-*-*-* default *-*-*-*-*/
export default withRouter(Component);
