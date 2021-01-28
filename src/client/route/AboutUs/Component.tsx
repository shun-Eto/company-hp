import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import * as H from "history";

//	components
import * as OrigTransitions from "@src/client/assets/items/OrigTranstions/Component";

//	item compoentns
import Item_Top from "./items/Top/Component";
import Item_CompanyInfo from "./items/CompanyInfo/Component";
import Item_Members from "./items/Members/Component";
import Item_Collaborators from "./items/Collaborators/Component";

//	materials
import { Container, Fade, FormLabel, Hidden, Slide } from "@material-ui/core";
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
		"company-info": { jp: "会社概要", en: "Overview" },
		member: { jp: "メンバー", en: "Members" },
		collaborators: { jp: "協力メンバー", en: "Collaborator" },
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
	scrollTop: number;
}
const Component: React.FC<Props> = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const {} = props;
	const { root } = props;
	const { lang, scrollTop } = root.env;
	//	states
	//	styles
	const classes = useStyles.Root({});

	/*-*-*-*-* handlers *-*-*-*-*/

	/*-*-*-*-* lifeCycles *-*-*-*-*/

	/*-*-*-*-* comnPorps *-*-*-*-*/
	const comnProps: ComnProps = { lang, scrollTop };

	/*-*-*-*-* component *-*-*-*-*/
	return (
		<React.Fragment>
			{/*-*-*-*-* small *-*-*-*-*/}
			<Hidden smUp>
				<AboutUsSm {...comnProps} />
			</Hidden>

			{/*-*-*-*-* large *-*-*-*-*/}
			<Hidden xsDown>
				<AboutUsLg {...comnProps} />
			</Hidden>
		</React.Fragment>
	);
};

const AboutUsSm: React.FC<ComnProps> = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const { lang } = props;
	//	styles
	const classes = useStyles.AboutUsSm({});

	/*-*-*-*-* render *-*-*-*-*/
	return (
		<React.Fragment>
			{/*-*-*-*-* Top *-*-*-*-*/}
			<div className={classes.Top}>
				<OrigTransitions.SlideLeft in={true}>
					<Item_Top lang={lang} />
				</OrigTransitions.SlideLeft>
			</div>

			{/*-*-*-*-* CompnayInfo *-*-*-*-*/}
			<div className={classes.CompanyInfo}>
				<OrigTransitions.SlideLeft in={true}>
					<CategoryLabel label={selfClass.labels["company-info"][lang]} />
					<Item_CompanyInfo lang={lang} />
				</OrigTransitions.SlideLeft>
			</div>

			{/* Members */}
			<div className={classes.Members}>
				<CategoryLabel label={selfClass.labels.member[lang]} />
				<Item_Members lang={lang} />
			</div>

			{/* Collaborators */}
			<div className={classes.Collaborators}>
				<CategoryLabel label={selfClass.labels.collaborators[lang]} />
				<Item_Collaborators lang={lang} />
			</div>
		</React.Fragment>
	);
};

const AboutUsLg: React.FC<ComnProps> = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const { lang, scrollTop } = props;
	//	states
	//	refs
	const topRef = React.useRef<HTMLDivElement>(null);
	//	styles
	const classes = useStyles.AboutUsLg({});

	/*-*-*-*-* lifeCyles *-*-*-*-*/
	React.useEffect(() => {
		console.log(topRef);
	}, [scrollTop]);

	/*-*-*-*-* render *-*-*-*-*/
	return (
		<React.Fragment>
			{/*-*-*-*-* Top *-*-*-*-*/}
			<div ref={topRef} className={classes.Top}>
				<OrigTransitions.SlideLeft in={true}>
					<Item_Top lang={lang} />
				</OrigTransitions.SlideLeft>
			</div>

			{/*-*-*-*-* CompnayInfo *-*-*-*-*/}
			<div className={classes.CompanyInfo}>
				<OrigTransitions.SlideLeft in={true}>
					<CategoryLabel label={selfClass.labels["company-info"][lang]} />
					<Item_CompanyInfo lang={lang} />
				</OrigTransitions.SlideLeft>
			</div>

			{/* Members */}
			<div className={classes.Members}>
				<CategoryLabel label={selfClass.labels.member[lang]} />
				<Item_Members lang={lang} />
			</div>

			{/* Collaborators */}
			<div className={classes.Collaborators}>
				<CategoryLabel label={selfClass.labels.collaborators[lang]} />
				<Item_Collaborators lang={lang} />
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
