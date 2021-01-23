import { CSSProperties } from "@material-ui/core/styles/withStyles";
import * as React from "react";

//
import * as useStyles from "./_useStyles";

/*-*-*-*-* BarCode *-*-*-*-*/
interface BarCodeProps {
	color?: string;
}
export const BarCode: React.FC<BarCodeProps> = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const { color } = props;
	//	styles
	const classes = useStyles.BarCode({ color });

	/*-*-*-*-* component *-*-*-*-*/
	return <div className={classes.BarCode}></div>;
};

/*-*-*-*-* Dot *-*-*-*-*/
interface DotProps {
	color?: string;
}
export const Dot: React.FC<DotProps> = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const { color } = props;
	//	styles
	const classes = useStyles.Dot({ color });

	/*-*-*-*-* component *-*-*-*-*/
	return <div className={classes.Dot}></div>;
};

/*-*-*-*-* BackSlash *-*-*-*-*/
interface BackSlashProps {
	color?: string;
}
export const BackSlash: React.FC<BackSlashProps> = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const { color } = props;
	//	styles
	const classes = useStyles.BackSlash({ color });

	/*-*-*-*-* component *-*-*-*-*/
	return <div className={classes.BackSlash}></div>;
};

/*-*-*-*-* Mesh *-*-*-*-*/
interface MeshProps {
	color?: string;
	style?: CSSProperties;
}
export const Mesh: React.FC<MeshProps> = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const { color, style } = props;
	//	styles
	const classes = useStyles.Mesh({ color });

	/*-*-*-*-* component *-*-*-*-*/
	return <div className={classes.Mesh} style={style}></div>;
};
