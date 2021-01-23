import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import * as H from "history";

//	components

//	item compoentns
import Item_Top from "./items/Top/Component";
import Item_Form from "./items/Form/Component";
import Item_SNS from "./items/SNS/Component";

//	materials
import {
	Container,
	FormLabel,
	Hidden,
	Slide,
	Typography,
} from "@material-ui/core";
import {} from "@fortawesome/react-fontawesome";

//	reudcers
import * as RootReducer from "@src/client/redux/reducers/rootReducer";

//	styles
import * as useStyles from "./_useStyles";

//	types
import * as EnvTypes from "@src/types/environment";
import { CommonProps } from "@material-ui/core/OverridableComponent";

const selfClass = new (class {
	labels = {
		form: { jp: "お問い合わせ", en: "Contact" },
		sns: { jp: "SNS", en: "SNS" },
		service: { jp: "サービス", en: "Service" },
	};
})();

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
	const {} = props;
	const { root } = props;
	const { lang } = root.env;
	//	states
	//	styles
	const classes = useStyles.Root({});

	/*-*-*-*-* handlers *-*-*-*-*/

	/*-*-*-*-* lifeCycles *-*-*-*-*/

	/*-*-*-*-* comnPorps *-*-*-*-*/
	const comnProps: ComnProps = {
		lang,
	};

	/*-*-*-*-* component *-*-*-*-*/
	return (
		<React.Fragment>
			{/*-*-*-*-* small *-*-*-*-*/}
			<Hidden smUp>
				<AboutUsSm {...comnProps} />
			</Hidden>

			{/*-*-*-*-* large *-*-*-*-*/}
			<Hidden>
				<AboutUsLg {...comnProps} />
			</Hidden>
		</React.Fragment>
	);
};

const AboutUsSm: React.FC<ComnProps> = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const {} = props;
	//	styles
	const classes = useStyles.AboutUsSm({});

	/*-*-*-*-* render *-*-*-*-*/
	return <div></div>;
};

const AboutUsLg: React.FC<ComnProps> = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const { lang } = props;
	//	styles
	const classes = useStyles.AboutUsLg({});

	/*-*-*-*-* render *-*-*-*-*/
	return (
		<React.Fragment>
			{/*-*-*-*-* Top *-*-*-*-*/}
			<div className={classes.Top}>
				<Item_Top lang={lang} />
			</div>

			{/*-*-*-*-* Services *-*-*-*-*/}
			<div className={classes.Form}>
				<CategoryLabel label={selfClass.labels.form[lang]} />
				<Item_Form lang={lang} />
			</div>

			{/*-*-*-*-* SNS *-*-*-*-*/}
			<div className={classes.SNS}>
				<CategoryLabel label={selfClass.labels.sns[lang]} />
				<Item_SNS lang={lang} />
			</div>
		</React.Fragment>
	);
};

/*-*-*-*-* CategoryLabel *-*-*-*-*/
interface CategoryLabelProps {
	label: string;
}
const CategoryLabel: React.FC<CategoryLabelProps> = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const { label } = props;
	//	styles
	const classes = useStyles.CategoryLabel({});

	/*-*-*-*-* render *-*-*-*-*/
	return (
		<Container maxWidth="md" className={classes.CategoryLabel}>
			<FormLabel className={classes.label}>{label}</FormLabel>
		</Container>
	);
};

/*-*-*-*-* default *-*-*-*-*/
export default withRouter(Component);
