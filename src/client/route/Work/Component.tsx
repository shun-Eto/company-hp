import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import * as H from "history";

//	components
import * as OrigTransitions from "@src/client/assets/items/OrigTranstions/Component";

//	item compoentns
import Item_Top from "./items/Top/Component";
import Item_Services from "./items/Services/Component";
import Item_PartnerCompany from "./items/PartnerCompany/Component";

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
		service: {
			jp: "サービス",
			en: "Service",
		},
		"partner-company": {
			jp: "提携先企業",
			en: "Partner Company",
		},
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
	const { root } = props;
	const { lang } = root.env;
	//	states
	const topRef = React.useRef<HTMLDivElement>(null);
	//	styles
	const classes = useStyles.Root({});

	/*-*-*-*-* handlers *-*-*-*-*/

	/*-*-*-*-* lifeCycles *-*-*-*-*/
	React.useEffect(() => {
		if (topRef.current) {
			topRef.current.scrollIntoView({ behavior: "auto", block: "end" });
		}
	}, [topRef]);

	/*-*-*-*-* comnPorps *-*-*-*-*/
	const comnProps: ComnProps = {
		lang,
	};

	/*-*-*-*-* component *-*-*-*-*/
	return (
		<React.Fragment>
			{/* Top */}
			<div ref={topRef} className={classes.Top}>
				<OrigTransitions.SlideLeft in={true}>
					<Item_Top lang={lang} />
				</OrigTransitions.SlideLeft>
			</div>

			{/* Services */}
			<div className={classes.Services}>
				<OrigTransitions.SlideLeft in={true}>
					<CategoryLabel label={selfClass.labels.service[lang]} />
					<Item_Services lang={lang} />
				</OrigTransitions.SlideLeft>
			</div>

			{/* Partner Company */}
			<div className={classes.PartnerCompany}>
				<OrigTransitions.SlideLeft in={true}>
					<CategoryLabel label={selfClass.labels["partner-company"][lang]} />
					<Item_PartnerCompany lang={lang} />
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
