//	reducers
import * as RootReducer from "@src/client/redux/reducers/rootReducer";

//	types
import * as EnvTypes from "@src/types/environment";

/*-*-*-*-* action types *-*-*-*-*/
export const types = {
	update_navId: "[ Root ] update_navId",
	update_footer: "[ Root ] update_footer",
};

/*-*-*-*-* methods *-*-*-*-*/
//	update_navId
export interface Update_NavId {
	type: typeof types.update_navId;
	payload: { navId: string };
}
export function update_navId(navId: string): Update_NavId {
	return {
		type: types.update_navId,
		payload: { navId },
	};
}
//	update_footer
export interface Update_Footer {
	type: typeof types.update_footer;
	payload: { footer: boolean };
}
export function update_footer(active: boolean): Update_Footer {
	return {
		type: types.update_footer,
		payload: { footer: active },
	};
}

/*-*-*-*-* ActionProps *-*-*-*-*/
export type ActionProps = Update_NavId & Update_Footer;
