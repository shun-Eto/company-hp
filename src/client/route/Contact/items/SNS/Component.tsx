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
	const {} = props;
	//	states
	//	styles
	const classes = useStyles.Item({});

	/*-*-*-*-* handlers *-*-*-*-*/

	/*-*-*-*-* lifeCycles *-*-*-*-*/

	/*-*-*-*-* component *-*-*-*-*/
	return (
		<Container maxWidth="md" className={classes.Item}>
			<Grid container className={classes["Grid-contaniner"]}>
				<Grid item xs={6} className={classes["Grid-item"]}>
					<ImgButton img={{ src: Img_SNS_Twitter, title: "Twitter" }} />
				</Grid>
				<Grid item xs={6} className={classes["Grid-item"]}>
					<ImgButton img={{ src: Img_SNS_Instagram, title: "Instagram" }} />
				</Grid>
			</Grid>
		</Container>
	);
};

interface ImgButtonProps {
	img: { src: string; title: string };
}
const ImgButton: React.FC<ImgButtonProps> = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const { img } = props;
	const classes = useStyles.ImgButton({});

	/*-*-*-*-* render *-*-*-*-*/
	return (
		<ButtonBase
			focusRipple
			className={classes.image}
			focusVisibleClassName={classes.focusVisible}
		>
			<img src={img.src} alt="" className={classes.imageSrc} />
			<span className={classes.imageBackdrop} />
			<span className={classes.imageButton}>
				<Typography
					component="span"
					variant="subtitle1"
					color="inherit"
					className={classes.imageTitle}
				>
					{img.title}
					<span className={classes.imageMarked} />
				</Typography>
			</span>
		</ButtonBase>
	);
};

/*-*-*-*-* default *-*-*-*-*/
export default Component;
