import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import * as H from "history";

//	components

//	materials
import { Link, Typography } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//	reudcers
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
const Component: React.FC<Props> = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const {} = props;
	const { root } = props;
	const { lang } = root.env;
	//	states
	const links: EnvTypes.MenuItem[] = [
		{
			id: "privacy-policy",
			value: "privacy-policy",
			label: { jp: "プライバシーポリシー", en: "Privacy Policy" },
		},
		{
			id: "terms-of-service",
			value: "terms-of-service",
			label: { jp: "利用規約", en: "Terms of service" },
		},
	];
	//	styles
	const classes = useStyles.Root({});

	/*-*-*-*-* handlers *-*-*-*-*/

	/*-*-*-*-* lifeCycles *-*-*-*-*/

	/*-*-*-*-* component *-*-*-*-*/
	return (
		<div className={classes.Root}>
			{/*-*-*-*-* Copyright *-*-*-*-*/}
			<div className={classes.Copyright}>
				<Copyright />
			</div>

			{/*-*-*-*-* Links *-*-*-*-*/}
			<div className={classes.Links}>
				{links.map((item, i) => (
					<OrigLink key={i} lang={lang} item={item} />
				))}
			</div>
		</div>
	);
};

/*-*-*-*-* Copyright *-*-*-*-*/
interface CopyrightProps {}
const Copyright = (props: CopyrightProps) => {
	const classes = useStyles.Copyright({});
	return (
		<Typography className={classes.Typography}>
			Copyright
			<FontAwesomeIcon
				icon={["fas", "copyright"]}
				size="1x"
				className={classes["Typography-faIcon"]}
			/>
			2021 Apple Inc. All rights reserved.
		</Typography>
	);
};

/*-*-*-*-* OrigLink *-*-*-*-*/
interface OrigLinkPops {
	lang: keyof EnvTypes.Languages;
	item: EnvTypes.MenuItem;
}
const OrigLink = (props: OrigLinkPops) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const { item, lang } = props;
	//	styles
	const classes = useStyles.OrigLink({});

	/*-*-*-*-* component *-*-*-*-*/
	return (
		<Link className={classes.Link}>
			<FontAwesomeIcon
				icon={["fas", "file-signature"]}
				className={classes["Link-faIcon"]}
			/>
			{item.label[lang]}
		</Link>
	);
};

/*-*-*-*-* default *-*-*-*-*/
export default withRouter(Component);
