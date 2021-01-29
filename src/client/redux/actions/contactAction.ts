//  reudcers
import * as ContactReducer from "@src/client/redux/reducers/contactReducer";

//	types
import * as EnvTypes from "@src/types/environment";

/*-*-*-*-* action types *-*-*-*-*/
export const types = {
	update_fetching: "[ Contact ] : update_fetching",
	update_fetched: "[ Contact ] : update_fetched",
};

/*-*-*-*-* methods *-*-*-*-*/
//	== Status
//	update_fetching
export interface Update_Fetching {
	type: typeof types.update_fetching;
	payload: { key: keyof ContactReducer.Status; fetching: boolean };
}
export function update_fetching(
	key: keyof ContactReducer.Status,
	fetching: boolean
): Update_Fetching {
	return {
		type: types.update_fetching,
		payload: { key, fetching },
	};
}
//	update_fetched
export interface Update_Fetched {
	type: typeof types.update_fetched;
	payload: { key: keyof ContactReducer.Status; fetched: boolean };
}
export function update_fetched(
	key: keyof ContactReducer.Status,
	fetched: boolean
): Update_Fetched {
	return {
		type: types.update_fetched,
		payload: { key, fetched },
	};
}

/*-*-*-*-* ActionProps *-*-*-*-*/
export type ActionProps = Update_Fetching & Update_Fetched;
