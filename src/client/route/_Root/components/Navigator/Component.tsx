import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import * as H from "history";

//	components

//	materials
import { ButtonBase, Divider, Typography, Zoom } from "@material-ui/core";
import {} from "@fortawesome/react-fontawesome";

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
	const navItems: EnvTypes.MenuItem[] = [
		{
			id: "home",
			value: "home",
			label: { jp: "Home", en: "Home" },
			pathname: "/",
			onClick: () => props.history.push("/"),
		},
		{
			id: "acount-us",
			value: "acount-us",
			label: { jp: "About Us", en: "About Us" },
			pathname: "/about-us",
			onClick: () => props.history.push("/about-us"),
		},
		{
			id: "work",
			value: "work",
			label: { jp: "Work", en: "Work" },
			pathname: "/work",
			onClick: () => props.history.push("/work"),
		},
		{
			id: "contact",
			value: "contact",
			label: { jp: "Contact", en: "Contact" },
			pathname: "/contact",
			onClick: () => props.history.push("/contact"),
		},
		{
			id: "download",
			value: "download",
			label: { jp: "Download", en: "Download" },
			pathname: "/download",
			onClick: () => props.history.push("/download"),
		},
	];
	//	styles
	const classes = useStyles.Root({});

	/*-*-*-*-* handlers *-*-*-*-*/

	/*-*-*-*-* lifeCycles *-*-*-*-*/

	/*-*-*-*-* render *-*-*-*-*/
	return (
		<div className={classes.Root}>
			{navItems.map((item, i) => (
				<NavItem key={i} lang={lang} item={item} />
			))}
		</div>
	);
};

interface NavItemProps {
	lang: keyof EnvTypes.Languages;
	item: EnvTypes.MenuItem;
}
const NavItem = (props: NavItemProps) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const { lang, item } = props;
	//	states
	const [active, setActive] = React.useState(false);
	//	styles
	const classes = useStyles.NavItem({});

	/*-*-*-*-* handlers *-*-*-*-*/
	//	handleOnClick_btn
	const handleOnClick_btn = () => {
		if (item.onClick) item.onClick();
	};

	/*-*-*-*-* render *-*-*-*-*/
	return (
		<ButtonBase
			className={classes.ButtonBase}
			//	handlers
			onClick={handleOnClick_btn}
		>
			<div className={classes.NavItem}>
				<Typography className={classes.Typography}>
					{item.label[lang]}
				</Typography>
				<Zoom in={active}>
					<Divider className={classes.Divider} />
				</Zoom>
			</div>
		</ButtonBase>
	);
};

/*-*-*-*-* default *-*-*-*-*/
export default withRouter(Component);
