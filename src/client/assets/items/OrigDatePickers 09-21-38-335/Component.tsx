import * as React from "react";
import ReactDatePicker from "react-datepicker";

//	components

//	materials
import { Hidden, InputBase } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//	styles
import * as useStyles from "./_useStyles";

//	types
import * as EnvTypes from "@src/types/environment";

/*-*-*-*-* component props *-*-*-*-*/
interface ComponentProps {
	lang: keyof EnvTypes.Languages;
	theme?: EnvTypes.Theme;
}
type Props = ComponentProps;
export const Basic: React.FC<Props> = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const { lang } = props;
	//	states
	const [date, setDate] = React.useState<Date | null>(null);
	const dateFormat = React.useMemo(() => {
		return lang === "jp" ? "yy年MM月dd日" : "dd MMMM yyyy";
	}, [lang]);
	//	styles
	const classes = useStyles.Item({ origTheme: props.theme });

	/*-*-*-*-* handlers *-*-*-*-*/
	//	handleOnChange_date
	const handleOnChange_date = (data: Date | [Date, Date] | null) => {
		if (!Array.isArray(data)) {
			setDate(data);
		}
	};

	/*-*-*-*-* lifeCycles *-*-*-*-*/

	/*-*-*-*-* component *-*-*-*-*/
	return (
		<ReactDatePicker
			selected={date}
			className={classes.Item}
			dateFormat={dateFormat}
			wrapperClassName={classes["Item-wrapper"]}
			customInput={<InputBase classes={{ input: classes["Item-input"] }} />}
			//	handlers
			onChange={handleOnChange_date}
		/>
	);
};
