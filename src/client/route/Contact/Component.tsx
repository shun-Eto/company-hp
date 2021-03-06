import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import * as H from "history";
import queryString from "query-string";

//	components
import * as OrigTransitions from "@src/client/assets/items/OrigTranstions/Component";
import * as LoadingWindow from "@src/client/assets/items/LoadingWindow/Component";

//	item compoentns
import Item_Top from "./items/Top/Component";
import Item_Form from "./items/Form/_index";
import Item_SNS from "./items/SNS/Component";

//	materials
import { Container, FormLabel, Hidden } from "@material-ui/core";
import {} from "@fortawesome/react-fontawesome";

//	reudcers
import * as RootReducer from "@src/client/redux/reducers/rootReducer";

//	modules
import * as OrigModule from "@src/client/assets/modules/origModule";

//	actions
import * as ContactAction from "@src/client/redux/actions/contactAction";

//	reducers
import * as ContactReducer from "@src/client/redux/reducers/contactReducer";

//	styles
import * as useStyles from "./_useStyles";

//	types
import * as EnvTypes from "@src/types/environment";

//	classes
const origClass = new OrigModule.default();
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
	//	actions
	contactActions: {
		update_fetching: typeof ContactAction.update_fetching;
		update_fetched: typeof ContactAction.update_fetched;
	};
}
interface ComponentProps {}
type Props = OwnProps & ComponentProps;
const Component: React.FC<Props> = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const { root } = props;
	const { lang } = root.env;
	//	states
	const subject = origClass.get_query("subject");
	//	refs
	const topRef = React.useRef<HTMLDivElement>(null);
	const formRef = React.useRef<HTMLDivElement>(null);
	//	styles
	const classes = useStyles.Root({});
	/*-*-*-*-* handlers *-*-*-*-*/

	/*-*-*-*-* lifeCycles *-*-*-*-*/
	//	subject
	React.useEffect(() => {
		if (subject && formRef.current) {
			formRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
		} else if (topRef.current) {
			topRef.current.scrollIntoView({ behavior: "auto", block: "center" });
		}
	}, [subject, formRef]);

	/*-*-*-*-* component *-*-*-*-*/
	return (
		<React.Fragment>
			{/*-*-*-*-* Top *-*-*-*-*/}
			<div ref={topRef} className={classes.Top}>
				<OrigTransitions.SlideLeft in={true}>
					<Item_Top lang={lang} />
				</OrigTransitions.SlideLeft>
			</div>

			{/*-*-*-*-* Form *-*-*-*-*/}
			<div ref={formRef} className={classes.Form}>
				<OrigTransitions.SlideLeft in={true}>
					<CategoryLabel label={selfClass.labels.form[lang]} />
					<Item_Form lang={lang} />
				</OrigTransitions.SlideLeft>
			</div>

			{/*-*-*-*-* SNS *-*-*-*-*/}
			<div className={classes.SNS}>
				<OrigTransitions.SlideLeft in={true}>
					<CategoryLabel label={selfClass.labels.sns[lang]} />
					<Item_SNS lang={lang} />
				</OrigTransitions.SlideLeft>
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
