import * as React from "react";

//	components

//	materials
import { CircularProgress, FormLabel, LinearProgress } from "@material-ui/core";
import {
	FontAwesomeIcon,
	FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

//	styles
import * as useStyles from "./_useStyles";

//	types
import * as EnvTypes from "@src/types/environment";

interface BasicProps {
	label?: string;
	faIcon?: FontAwesomeIconProps;
	linear?: boolean;
	theme?: EnvTypes.Theme;
	img?: string;
}
export const Basic: React.FC<BasicProps> = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const { faIcon, label, linear, theme, img } = props;
	const classes = useStyles.Basic({ origTheme: theme });

	/*-*-*-*-* component *-*-*-*-*/
	return (
		<div className={classes.Basic}>
			{/*-*-*-*-* linear *-*-*-*-*/}
			{linear !== false && (
				<LinearProgress
					className={classes["Basic-linear"]}
					classes={{
						bar1Indeterminate: classes["linear-bar1Indeterminate"],
						bar2Indeterminate: classes["linear-bar2Indeterminate"],
					}}
				/>
			)}

			{/* container */}
			<div className={classes["Basic-container"]}>
				{/* wrapper */}
				<div className={classes["Basic-wrapper"]}>
					{/*-*-*-*-* icon *-*-*-*-*/}
					<div className={classes["Basic-icon"]}>
						{/* CircularProgress */}
						{!img && <CircularProgress className={classes["icon-faIcon"]} />}

						{/* icon */}
						{img ? (
							<img src={img} className={classes["icon-img"]} />
						) : faIcon ? (
							<FontAwesomeIcon
								{...faIcon}
								size="lg"
								className={classes["icon-faIcon"]}
							/>
						) : (
							<FontAwesomeIcon
								icon={["fas", "cloud"]}
								size="lg"
								className={classes["icon-faIcon"]}
							/>
						)}
					</div>

					{/*-*-*-*-* label *-*-*-*-*/}
					<FormLabel className={classes["Basic-label"]}>
						{label ? label : "Loading..."}
					</FormLabel>
				</div>
			</div>

			{/*-*-*-*-* linear *-*-*-*-*/}
			{linear !== false && (
				<LinearProgress
					className={classes["Basic-linear"]}
					classes={{
						bar1Indeterminate: classes["linear-bar1Indeterminate"],
						bar2Indeterminate: classes["linear-bar2Indeterminate"],
					}}
				/>
			)}
		</div>
	);
};
