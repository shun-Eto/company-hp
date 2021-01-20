import { makeStyles, Theme, createStyles } from "@material-ui/core";

/*-*-*-*-* BarCode *-*-*-*-*/
export const BarCode = (params: { color?: string }) =>
	makeStyles((theme: Theme) => {
		/*-*-*-*-* properties *-*-*-*-*/
		const { color } = params;
		const diviColor = color ? color : "#777";
		/*-*-*-*-* component *-*-*-*-*/
		return createStyles({
			BarCode: {
				border: 0,
				height: 16,
				background: `repeating-linear-gradient(90deg,${diviColor},${diviColor} 1px,rgba(0,0,0,0) 1px ,rgba(0,0,0,0) 4px) `,
			},
		});
	})();

/*-*-*-*-* Dot *-*-*-*-*/
export const Dot = (params: { color?: string }) =>
	makeStyles((theme: Theme) => {
		const { color } = params;
		const diviColor = color ? color : "#777";
		return createStyles({
			Dot: {
				height: 4,
				background: `repeating-linear-gradient(90deg,${diviColor},${diviColor} 4px,rgba(0,0,0,0) 4px ,rgba(0,0,0,0) 12px) `,
			},
		});
	})();

/*-*-*-*-* BackSlash *-*-*-*-*/
export const BackSlash = (params: { color?: string }) =>
	makeStyles((theme: Theme) => {
		const { color } = params;
		const diviColor = color ? color : "#777";
		return createStyles({
			BackSlash: {
				height: 8,
				backgroundImage: `repeating-linear-gradient(45deg,${diviColor} 0,${diviColor} 1px,rgba(0,0,0,0) 0,rgba(0,0,0,0) 50%)`,
				backgroundSize: "8px 8px",
			},
		});
	})();

/*-*-*-*-* Mesh *-*-*-*-*/
export const Mesh = (params: { color?: string }) =>
	makeStyles((theme: Theme) => {
		const { color } = params;
		const diviColor = color ? color : "#777";
		return createStyles({
			Mesh: {
				height: 8,
				backgroundImage:
					`repeating-linear-gradient(45deg,${diviColor} 0,${diviColor} 1px,rgba(0,0,0,0) 0,rgba(0,0,0,0) 50%),` +
					`repeating-linear-gradient(135deg,${diviColor} 0,${diviColor} 1px,rgba(0,0,0,0) 0,rgba(0,0,0,0) 50%)`,
				backgroundSize: "8px 8px",
			},
		});
	})();

/*
export const Root = (params: {}) =>
    makeStyles((theme: Theme) => {
		const {} = params;

		return createStyles({
			Root: {},
		});
    })();
*/
