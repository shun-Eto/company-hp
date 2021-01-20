import * as React from "react";

//	components

//	materials
import { Badge, Typography } from "@material-ui/core";
import {
	FontAwesomeIcon,
	FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

//	styles
import * as useStyles from "./_useStyles";

//	types
import * as EnvTypes from "@src/types/environment";

/*-*-*-*-* component props *-*-*-*-*/
interface ComponentProps {
	faIcon: FontAwesomeIconProps;
	rightButton?: {
		label: string;
		theme?: EnvTypes.Theme;
	};
}
type Props = ComponentProps;
const Component: React.FC<Props> = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const { faIcon, rightButton } = props;
	//	states
	//	memo
	//	styles
	const classes = useStyles.Badge({ origTheme: rightButton?.theme });

	/*-*-*-*-* handlers *-*-*-*-*/

	/*-*-*-*-* lifeCycles *-*-*-*-*/

	/*-*-*-*-* component *-*-*-*-*/
	return (
		<Badge>
			<FontAwesomeIcon
				{...faIcon}
				size="lg"
				className={classes["Badge-faIcon"]}
				fixedWidth
			/>
			{rightButton && (
				<span className={classes["label-rightButton"]}>
					{rightButton.label}
				</span>
			)}
		</Badge>
	);
};

/*-*-*-*-* default *-*-*-*-*/
export default Component;
