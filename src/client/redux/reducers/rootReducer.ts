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
	scrollTop: number;
	device: {
		sizeType: "sp" | "pc";
	};
}
const initEnvironment: Environment = {
	id: localStorage.getItem("id") || "",
	token: localStorage.getItem("token") || "",
	lang: (localStorage.getItem("lang") as "jp" | "en") || "jp",
	scrollTop: 0,
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
		//	update_lang
		case RootAction.types.update_lang:
			return {
				...state,
				env: {
					...state.env,
					lang: action.payload.lang,
				},
			};
		//	update_scrollTop
		case RootAction.types.update_scrollTop:
			return {
				...state,
				env: {
					...state.env,
					scrollTop: action.payload.scrollTop,
				},
			};

		/*-*-*-*-* default **-*-*-*-*/
		default:
			return state;
	}
};

/*-*-*-*-* default **-*-*-*-*/
export default reducer;
