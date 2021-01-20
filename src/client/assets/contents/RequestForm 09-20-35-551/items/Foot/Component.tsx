import * as React from "react";

//	components

//	materials
import { Button, Hidden, Typography } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//	styles
import * as useStyles from "./_useStyles";

//	types
import * as EnvTypes from "@src/types/environment";

//	classes
const selfClass = new (class {
	form = {
		labels: {
			"mention-1":
				"注1):上記内容・添付資料が不明確、不明瞭の場合は作業に入れません。その場合は依頼書を返送させて頂くことがあります。",
			"mention-2":
				"注2):特記欄には、必要によりカタログ、図面集など販売資料には掲載されていない顧客ニーズを記述して下さい。",
			new: { jp: "依頼書の新規作成", en: "Create New Request" },
		},
	};
})();

/*-*-*-*-* component props *-*-*-*-*/
interface ComponentProps {
	lang: keyof EnvTypes.Languages;
}
type Props = ComponentProps;
const Component: React.FC<Props> = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const { lang } = props;
	//	states
	const labels = selfClass.form.labels;
	//	styles
	const classes = useStyles.Item({});

	/*-*-*-*-* handlers *-*-*-*-*/

	/*-*-*-*-* lifeCycles *-*-*-*-*/

	/*-*-*-*-* component *-*-*-*-*/
	return (
		<div className={classes.Item}>
			{/*-*-*-*-* mention *-*-*-*-*/}
			<div className={classes["Item-mention"]}>
				<Typography className={classes["mention-1"]}>
					{labels["mention-1"]}
				</Typography>
				<Typography className={classes["mention-2"]}>
					{labels["mention-2"]}
				</Typography>
			</div>

			{/*-*-*-*-* action *-*-*-*-*/}
			<div className={classes["Item-action"]}>
				<Button
					variant={"contained"}
					color={"secondary"}
					className={classes["action-submitBtn"]}
				>
					{labels.new[lang]}
				</Button>
			</div>
		</div>
	);
};

/*-*-*-*-* default *-*-*-*-*/
export default Component;
