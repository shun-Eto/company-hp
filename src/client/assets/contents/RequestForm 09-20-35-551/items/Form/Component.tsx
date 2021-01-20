import * as React from "react";

//	components
import Form_1 from "./Form-1/Component";
import Form_2 from "./Form-2/Component";

//	materials
import { Hidden } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

	/*-*-*-*-* handlers *-*-*-*-*/

	/*-*-*-*-* lifeCycles *-*-*-*-*/

	/*-*-*-*-* component *-*-*-*-*/
	return (
		<div className={classes.Item}>
			<Form_1 lang={lang} />
			<Form_2 lang={lang} />
		</div>
	);
};

/*-*-*-*-* default *-*-*-*-*/
export default Component;
