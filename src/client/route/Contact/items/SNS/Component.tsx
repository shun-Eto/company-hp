import * as React from "react";

//	components

//	materials
import { ButtonBase, Container, Grid, Typography } from "@material-ui/core";
import {} from "@fortawesome/react-fontawesome";

//	assets
import Img_SNS_Twitter from "@src/client/assets/images/contact-sns-twitter.png";
import Img_SNS_Instagram from "@src/client/assets/images/contact-sns-instagram.png";

//	styles
import * as useStyles from "./_useStyles";

//	types
import * as EnvTypes from "@src/types/environment";

/*-*-*-*-* component props *-*-*-*-*/
interface ComponentProps {
	lang: keyof EnvTypes.Languages;
}
type Props = ComponentProps;
const Component: React.FC<Props> = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const { lang } = props;
	//	states
	//	styles
	const classes = useStyles.Item({});
	//	items
	const snsItems: EnvTypes.MenuItem[] = [
		{
			id: "twitter",
			value: "twitter",
			label: { jp: "Twitter", en: "Twitter" },
			pathname: "https://twitter.com/Sopherre_1111",
			img: Img_SNS_Twitter,
		},
		{
			id: "instagram",
			value: "instagram",
			label: { jp: "Instagram", en: "Instagram" },
			pathname: "https://www.instagram.com/sopherre_1111/",
			img: Img_SNS_Instagram,
		},
	];

	/*-*-*-*-* handlers *-*-*-*-*/

	/*-*-*-*-* lifeCycles *-*-*-*-*/

	/*-*-*-*-* component *-*-*-*-*/
	return (
		<Container maxWidth="md" className={classes.Item}>
			<Grid container className={classes["Grid-contaniner"]}>
				{snsItems.map((item, i) => (
					<Grid key={i} item xs={6} className={classes["Grid-item"]}>
						<ImgButton lang={lang} item={item} />
					</Grid>
				))}
			</Grid>
		</Container>
	);
};

interface ImgButtonProps {
	lang: keyof EnvTypes.Languages;
	item: EnvTypes.MenuItem;
}
const ImgButton: React.FC<ImgButtonProps> = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const { lang, item } = props;
	const classes = useStyles.ImgButton({});

	/*-*-*-*-* handlers *-*-*-*-*/
	const handelOnClick_btn = () => {
		if (item.pathname) {
			const elem_a = document.createElement("a");
			elem_a.setAttribute("target", "_blank");
			elem_a.setAttribute("href", item.pathname);
			elem_a.click();
		}
	};

	/*-*-*-*-* render *-*-*-*-*/
	return (
		<ButtonBase
			focusRipple
			className={classes.image}
			focusVisibleClassName={classes.focusVisible}
			//	handlers
			onClick={handelOnClick_btn}
		>
			<img src={item.img} alt="" className={classes.imageSrc} />
			<span className={classes.imageBackdrop} />
			<span className={classes.imageButton}>
				<Typography
					component="span"
					variant="subtitle1"
					color="inherit"
					className={classes.imageTitle}
				>
					{item.label[lang]}
					<span className={classes.imageMarked} />
				</Typography>
			</span>
		</ButtonBase>
	);
};

/*-*-*-*-* default *-*-*-*-*/
export default Component;
