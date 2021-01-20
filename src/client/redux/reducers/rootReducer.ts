//  actions
import * as RootAction from "@src/client/redux/actions/rootAction";

//	types
import * as EnvTypes from "@src/types/environment";

/*-*-*-*-* status **-*-*-*-*/
export interface Status {}
const initStatus: Status = {};
export interface Data {}
export const initData: Data = {};
export interface Environment {
	id: string;
	token: string;
	lang: keyof EnvTypes.Languages;
	navId: string;
	footer: boolean;
	device: {
		sizeType: "sp" | "pc";
	};
}
const initEnvironment: Environment = {
	id: localStorage.getItem("id") || "",
	token: localStorage.getItem("token") || "",
	lang: "jp",
	navId: "",
	footer: false,
	device: {
		sizeType: navigator.userAgent.match(/iphone|ipad|ipod|android/i)
			? "sp"
			: "pc",
	},
};

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
	action: RootAction.ActionProps
) => {
	switch (action.type) {
		/*-*-*-*-* actions **-*-*-*-*/
		//	update_navigator
		case RootAction.types.update_navId:
			return {
				...state,
				env: {
					...state.env,
					navId: action.payload.navId,
				},
			};
		//
		case RootAction.types.update_footer:
			return {
				...state,
				env: {
					...state.env,
					footer: action.payload.footer,
				},
			};

		/*-*-*-*-* default **-*-*-*-*/
		default:
			return state;
	}
};

/*-*-*-*-* default **-*-*-*-*/
export default reducer;
