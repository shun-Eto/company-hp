import * as React from "react";

//	components

//	item components
import Item_Head from "./items/Head/Component";
import Item_Form from "./items/Form/Component";
import Item_Foot from "./items/Foot/Component";
import Item_PlanCondition from "./items/PlanCondition/Component";

//	materials
import { Paper } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//	styles
import * as useStyles from "./_useStyles";

//	reudcers

//	assets json
import JSON_panelType from "./json/panelType.json";
import JSON_wallHeight from "./json/wallHeight.json";
import JSON_steelShape from "./json/steelShape.json";
import JSON_windLoad from "./json/windLoad.json";
import JSON_baseType from "./json/baseType.json";
import JSON_soilCondition from "./json/soilCondition.json";
import JSON_CoStrength from "./json/CoStrength.json";

//	types
import * as EnvTypes from "@src/types/environment";
import * as RequestFormTypes from "./requestForm";

const selfClass = new (class {
	form: { planConditions: EnvTypes.MenuItem[] } = {
		planConditions: [
			{ ...JSON_panelType, id: "panelType" },
			{ ...JSON_wallHeight, id: "wallHeight" },
			{ ...JSON_steelShape, id: "steelShape" },
			{ ...JSON_windLoad, id: "windLoad" },
			{ ...JSON_baseType, id: "baseType" },
			{ ...JSON_soilCondition, id: "soilCondition" },
			{ ...JSON_CoStrength, id: "CoStrength" },
			{ id: "memo", value: "memo", label: { jp: "メモ", en: "メモ" } },
		],
	};
})();

/*-*-*-*-* Form props *-*-*-*-*/
interface FormProps {
	lang: keyof EnvTypes.Languages;
	document: RequestFormTypes.Document;
	width?: number;
}
export const Form: React.FC<FormProps> = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const { lang, width, document } = props;
	//	states
	//	memo
	//	styles
	const classes = useStyles.RequestForm({ width });

	/*-*-*-*-* handlers *-*-*-*-*/

	/*-*-*-*-* lifeCycles *-*-*-*-*/

	/*-*-*-*-* component *-*-*-*-*/
	return (
		<div className={classes.wrapper}>
			<Paper className={classes.RequestForm} elevation={10}>
				{/*-*-*-*-* head *-*-*-*-*/}
				<div className={classes["RequestForm-head"]}>
					<Item_Head lang={lang} formType={document.form.formType} />
				</div>

				{/*-*-*-*-* form *-*-*-*-*/}
				<div className={classes["RequestForm-form"]}>
					<Item_Form lang={lang} />
				</div>

				{/*-*-*-*-* foot *-*-*-*-*/}
				<div className={classes["RequestForm-foot"]}>
					<Item_Foot lang={lang} />
				</div>
			</Paper>
		</div>
	);
};

/*-*-*-*-* PlanConditions *-*-*-*-*/
interface PlanConditions {
	lang: keyof EnvTypes.Languages;
	document: RequestFormTypes.Document;
	width?: number;
}
export const PlanConditions: React.FC<PlanConditions> = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const { lang, document, width } = props;
	//	states
	const ref = React.useRef<HTMLDivElement>(null);
	const [height, setHeight] = React.useState(0);
	const list = selfClass.form.planConditions;
	//	styles
	const classes = useStyles.PlanConditions({ width, height });

	/*-*-*-*-* handlers *-*-*-*-*/

	/*-*-*-*-* lifeCycles *-*-*-*-*/
	React.useEffect(() => {
		if (ref.current) setHeight(ref.current.clientHeight);
	}, [ref]);

	/*-*-*-*-* component *-*-*-*-*/
	return (
		<div className={classes.wrapper}>
			<div className={classes.PlanConditions} ref={ref}>
				{/*-*-*-*-* panel *-*-*-*-*/}
				{list.map((item, index) => (
					<div className={classes["PlanConditions-item"]} key={index}>
						<Item_PlanCondition
							lang={lang}
							label={item.label[lang]}
							list={item.list}
							type={item.id}
						/>
					</div>
				))}
			</div>
		</div>
	);
};
