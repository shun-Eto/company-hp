//  actions
import * as ContactActions from "@src/client/redux/actions/contactAction";

//	types
import * as EnvTypes from "@src/types/environment";

/*-*-*-*-* status **-*-*-*-*/
export interface Status {
	message: { fetching: boolean; fetched: boolean };
}
const initStatus: Status = {
	message: { fetching: false, fetched: false },
};
export interface Data {}
export const initData: Data = {};
export interface Environment {}
const initEnvironment: Environment = {};

/*-*-*-*-* state *-*-*-*-*/
export interface StateProps {
	status: Status;
	data: Data;
	env: Environment;
}
const initProps: StateProps = {
	status: initStatus,
	data: initData,
	env: initEnvironment,
};

/*-*-*-*-* reducer **-*-*-*-*/
const reducer = (
	state: StateProps = initProps,
	action: ContactActions.ActionProps
) => {
	switch (action.type) {
		/*-*-*-*-* actions **-*-*-*-*/
		//  update_fetching
		case ContactActions.types.update_fetching:
			return {
				...state,
				status: {
					...state.status,
					[action.payload.key]: {
						...state.status[action.payload.key],
						fetching: action.payload.fetching,
					},
				},
			};
		//  update_fetched
		case ContactActions.types.update_fetched:
			return {
				...state,
				status: {
					...state.status,
					[action.payload.key]: {
						...state.status[action.payload.key],
						fetched: action.payload.fetched,
					},
				},
			};

		/*-*-*-*-* default **-*-*-*-*/
		default:
			return state;
	}
};

/*-*-*-*-* default **-*-*-*-*/
export default reducer;
