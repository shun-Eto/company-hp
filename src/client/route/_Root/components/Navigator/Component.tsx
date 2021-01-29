import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import * as H from "history";

//	components

//	materials
import {
	ButtonBase,
	Container,
	Divider,
	Grid,
	Hidden,
	Typography,
	Zoom,
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from "@material-ui/lab";

//	reudcers
import * as RootReducer from "@src/client/redux/reducers/rootReducer";

//	styles
import * as useStyles from "./_useStyles";
import * as OrigStylesModule from "@src/client/assets/styles/origStyles";

//	types
import * as EnvTypes from "@src/types/environment";

const origStyles = new OrigStylesModule.default();
const { colorPicker } = origStyles;

/*-*-*-*-* component props *-*-*-*-*/
interface OwnProps extends RouteComponentProps {
	history: H.History;
	root: RootReducer.StateProps;
}
interface ComponentProps {}
type Props = OwnProps & ComponentProps;
interface ComnProps {
	lang: keyof EnvTypes.Languages;
	navItems: EnvTypes.MenuItem[];
}
const Component: React.FC<Props> = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const { root } = props;
	const { lang } = root.env;
	//	states
	const navItems: EnvTypes.MenuItem[] = [
		{
			id: "home",
			value: "home",
			label: { jp: "Home", en: "Home" },
			pathname: "/",
			faIcon: { icon: ["fas", "home"] },
			theme: {
				color: colorPicker("brandBlack"),
				bgColor: colorPicker("red-50"),
			},
			//	handlers
			onClick: () => props.history.push("/"),
		},
		{
			id: "acount-us",
			value: "acount-us",
			label: { jp: "About Us", en: "About Us" },
			pathname: "/about-us",
			faIcon: { icon: ["fas", "address-card"] },
			theme: {
				color: colorPicker("brandBlack"),
				bgColor: colorPicker("green-50"),
			},
			//	handlers
			onClick: () => props.history.push("/about-us"),
		},
		{
			id: "work",
			value: "work",
			label: { jp: "Work", en: "Work" },
			pathname: "/work",
			faIcon: { icon: ["fas", "briefcase"] },
			theme: {
				color: colorPicker("brandBlack"),
				bgColor: colorPicker("blue-50"),
			},
			//	handlers
			onClick: () => props.history.push("/work"),
		},
		{
			id: "contact",
			value: "contact",
			label: { jp: "Contact", en: "Contact" },
			pathname: "/contact",
			faIcon: { icon: ["fas", "mail-bulk"] },
			theme: {
				color: colorPicker("brandBlack"),
				bgColor: colorPicker("yellow-50"),
			},
			//	handlers
			onClick: () => props.history.push("/contact"),
		},
	];
	//	styles
	const classes = useStyles.Root({});

	/*-*-*-*-* handlers *-*-*-*-*/

	/*-*-*-*-* lifeCycles *-*-*-*-*/

	/*-*-*-*-* render *-*-*-*-*/
	return (
		<div className={classes.Root}>
			{/*-*-*-*-* small *-*-*-*-*/}
			<Hidden smUp>
				<NavigatorSm lang={lang} navItems={[...navItems].reverse()} />
			</Hidden>

			{/*-*-*-*-* large *-*-*-*-*/}
			<Hidden xsDown>
				<NavigatorLg lang={lang} navItems={navItems} />
			</Hidden>
		</div>
	);
};

const NavigatorSm: React.FC<ComnProps> = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const { lang, navItems } = props;
	const [active, setActive] = React.useState(false);
	const classes = useStyles.NavigatorSm({ active });

	/*-*-*-*-* render *-*-*-*-*/
	return (
		<div className={classes.Navigator}>
			<SpeedDial
				ariaLabel="test"
				open={active}
				icon={<SpeedDialIcon />}
				direction={"up"}
				classes={{ actions: classes.actions }}
				//	handlers
				onClick={() => setActive(!active)}
			>
				{navItems.map((item, i) => (
					<SpeedDialAction
						key={i}
						icon={
							item.faIcon ? (
								<FontAwesomeIcon {...item.faIcon} color={item.theme?.color} />
							) : (
								<FontAwesomeIcon icon={["fas", "home"]} />
							)
						}
						tooltipTitle={item.label[lang]}
						tooltipOpen
						classes={{ staticTooltipLabel: classes.staticTooltipLabel }}
						FabProps={{ style: { backgroundColor: item.theme?.bgColor } }}
						//	handlers
						onClick={item.onClick}
					/>
				))}
			</SpeedDial>
		</div>
	);
};

/*-*-*-*-* large : Navigator *-*-*-*-*/
const NavigatorLg: React.FC<ComnProps> = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const { lang, navItems } = props;
	const classes = useStyles.NavigatorLg({});
	const anchor = React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {
		if (anchor.current) console.log(anchor.current.clientHeight);
	}, [anchor]);
	/*-*-*-*-* render *-*-*-*-*/
	return (
		<Container maxWidth="md" ref={anchor}>
			<Grid container className={classes.Navigator}>
				{navItems.map((item, i) => (
					<NavItem key={i} lang={lang} item={item} />
				))}
			</Grid>
		</Container>
	);
};

/*-*-*-*-* NavItem *-*-*-*-*/
interface NavItemProps {
	lang: keyof EnvTypes.Languages;
	item: EnvTypes.MenuItem;
}
const NavItem = (props: NavItemProps) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const { lang, item } = props;
	//	states
	const pathname = window.location.pathname;
	//	styles
	const classes = useStyles.NavItem({});

	/*-*-*-*-* handlers *-*-*-*-*/
	//	handleOnClick_btn
	const handleOnClick_btn = () => {
		if (item.onClick) item.onClick();
	};

	/*-*-*-*-* render *-*-*-*-*/
	return (
		<Grid item xs={3}>
			<ButtonBase
				className={classes.ButtonBase}
				//	handlers
				onClick={handleOnClick_btn}
			>
				<div className={classes.NavItem}>
					<Typography className={classes.Typography}>
						{item.label[lang]}
					</Typography>
					<Zoom in={pathname === item.pathname}>
						<Divider className={classes.Divider} />
					</Zoom>
				</div>
			</ButtonBase>
		</Grid>
	);
};

/*-*-*-*-* default *-*-*-*-*/
export default withRouter(Component);
