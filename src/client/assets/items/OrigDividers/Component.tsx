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
}
export const Mesh: React.FC<MeshProps> = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const { color } = props;
	//	styles
	const classes = useStyles.Mesh({ color });

	/*-*-*-*-* component *-*-*-*-*/
	return <div className={classes.Mesh}></div>;
};
