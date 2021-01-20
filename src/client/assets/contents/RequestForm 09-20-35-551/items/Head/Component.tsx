import * as React from "react";

//	components

//	materials
import {
	FormControlLabel,
	FormLabel,
	Hidden,
	Radio,
	RadioGroup,
	Typography,
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//	styles
import * as useStyles from "./_useStyles";

//	types
import * as EnvTypes from "@src/types/environment";
import * as RequestFormTypes from "@src/client/assets/contents/RequestForm/requestForm";

//	classes
const selfClass = new (class {
	form = {
		labels: {
			subTitle: { jp: "(様式C防音GH01-1-改1)", en: "(様式C防音GH01-1-改1)" },
			title: {
				jp: "受注検討(技術)依頼書兼書類送付書(防音)",
				en: "受注検討(技術)依頼書兼書類送付書(防音)",
			},
			"action-new": { jp: "新規", en: "新規" },
			"action-continue": { jp: "継続", en: "継続" },
		},
	};
})();

/*-*-*-*-* component props *-*-*-*-*/
interface ComponentProps {
	lang: keyof EnvTypes.Languages;
	formType: RequestFormTypes.FormType;
}
type Props = ComponentProps;
const Component: React.FC<Props> = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const { lang, formType } = props;
	//	states
	const labels = selfClass.form.labels;
	//	styles
	const classes = useStyles.Item({});

	/*-*-*-*-* handlers *-*-*-*-*/

	/*-*-*-*-* lifeCycles *-*-*-*-*/

	/*-*-*-*-* component *-*-*-*-*/
	return (
		<div className={classes.Item}>
			{/*-*-*-*-* label *-*-*-*-*/}
			<div className={classes["Item-label"]}>
				<Typography className={classes["label-subTitle"]}>
					{labels.subTitle[lang]}
				</Typography>
				<Typography className={classes["label-title"]}>
					{labels.title[lang]}
				</Typography>
			</div>

			{/*-*-*-*-* action *-*-*-*-*/}
			<div className={classes["Item-action"]}>
				<FormLabel>(</FormLabel>
				<RadioGroup row value={formType}>
					<FormControlLabel
						value="new"
						className={classes["action-FormControlLabel"]}
						label={labels["action-new"][lang]}
						control={<Radio size="small" />}
					/>
					<FormControlLabel
						value="continue"
						className={classes["action-FormControlLabel"]}
						label={labels["action-continue"][lang]}
						control={<Radio size="small" />}
					/>
				</RadioGroup>
				<FormLabel className={classes["action-label"]}>)</FormLabel>
			</div>
		</div>
	);
};

/*-*-*-*-* default *-*-*-*-*/
export default Component;
