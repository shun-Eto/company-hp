import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import * as H from "history";

//	components

//	materials
import {
	AppBar,
	Button,
	ButtonBase,
	Container,
	FormLabel,
	Icon,
	IconButton,
	Menu,
	MenuItem,
	Paper,
	Toolbar,
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//	reudcers
import * as RootReducer from "@src/client/redux/reducers/rootReducer";

//	assets
import Img_Logo from "@src/client/assets/images/logo.png";
import Img_Sopherre_Icon from "@src/client/assets/images/sopherre-icon.png";
import Img_Sophic_Icon from "@src/client/assets/images/sophic-icon.png";

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
	const menuItems: EnvTypes.MenuItem[] = [
		{
			id: "sopherre",
			value: "sopherre",
			label: { jp: "Sopherre", en: "Sopherre" },
			img: Img_Sopherre_Icon,
			pathname: "https://www.sopherre.com",
		},
		{
			id: "sophic",
			value: "sophic",
			label: { jp: "Sophic", en: "Sophic" },
			img: Img_Sophic_Icon,
			pathname: "https://www.sophic.com",
		},
	];
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
						<OrigMenu lang={lang} menuItems={menuItems} />
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
interface OrigMenuProps {
	lang: keyof EnvTypes.Languages;
	menuItems: EnvTypes.MenuItem[];
}
const OrigMenu = (props: OrigMenuProps) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const { lang, menuItems } = props;
	//	states
	const [active, setActive] = React.useState(false);
	//	refs
	const anchor = React.useRef<HTMLButtonElement>(null);
	const itemRef = React.useRef<HTMLDivElement>(null);
	//	styles
	const classes = useStyles.OrigMenu({});

	React.useEffect(() => {
		console.log("itemRef", itemRef);
	}, [itemRef]);

	/*-*-*-*-* render *-*-*-*-*/
	return (
		<React.Fragment>
			<IconButton
				ref={anchor}
				//	handlers
				onClick={() => setActive(true)}
			>
				<FontAwesomeIcon
					icon={["fas", "th"]}
					className={classes["IconButton-faIcon"]}
				/>
			</IconButton>

			{/*-*-*-*-* Menu *-*-*-*-*/}
			<Menu
				anchorEl={anchor.current}
				getContentAnchorEl={null}
				open={active}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "center",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "center",
				}}
				MenuListProps={{ classes: { padding: classes.MenuList } }}
				//	handlers
				onClose={() => setActive(false)}
			>
				<Paper className={classes["Menu-Paper"]}>
					{menuItems.map((item, i) => (
						<MenuIcon key={i} item={item} lang={lang} />
					))}
				</Paper>
			</Menu>
		</React.Fragment>
	);
};

interface MenuIconProps {
	lang: keyof EnvTypes.Languages;
	item: EnvTypes.MenuItem;
}
const MenuIcon = (props: MenuIconProps) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const { item, lang } = props;
	//	styles
	const classes = useStyles.MenuIcon({});

	/*-*-*-*-* handlers *-*-*-*-*/
	//	handleOnClick_btn
	const handleOnClick_btn = () => {
		if (item.pathname) {
			const elm_a = document.createElement("a");
			elm_a.setAttribute("target", "_blank");
			elm_a.setAttribute("href", item.pathname);
			elm_a.click();
		}
	};

	/*-*-*-*-* render *-*-*-*-*/
	return (
		<ButtonBase
			className={classes.ButtonBase}
			//	handlers
			onClick={handleOnClick_btn}
		>
			{/*-*-*-*-* Icon *-*-*-*-*/}
			<Icon className={classes.Icon}>
				{item.img && <img src={item.img} className={classes["Icon-img"]} />}
			</Icon>

			{/*-*-*-*-* FormLabel *-*-*-*-*/}
			<FormLabel className={classes.FormLabel}>{item.label[lang]}</FormLabel>
		</ButtonBase>
	);
};

/*-*-*-*-* default *-*-*-*-*/
export default withRouter(Component);
