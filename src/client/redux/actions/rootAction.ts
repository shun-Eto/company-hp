//	reducers
import * as RootReducer from "@src/client/redux/reducers/rootReducer";

//	types
import * as EnvTypes from "@src/types/environment";

/*-*-*-*-* action types *-*-*-*-*/
export const types = {
	update_lang: "[ Root ] : update_lang",
	update_scrollTop: "[ Root ] : update_scrollTop",
	update_deviceHeight: "[ Root ] : update_deviceHeight",
};

/*-*-*-*-* methods *-*-*-*-*/
//	Update_Lang
export interface Update_Lang {
	type: typeof types.update_lang;
	payload: { lang: keyof EnvTypes.Languages };
}
export function update_lang(lang: keyof EnvTypes.Languages): Update_Lang {
	return {
		type: types.update_lang,
		payload: { lang },
	};
}
//	Update_ScrollTop
export interface Update_ScrollTop {
	type: typeof types.update_scrollTop;
	payload: { scrollTop: number };
}
export function update_scrollTop(scrollTop: number): Update_ScrollTop {
	return {
		type: types.update_scrollTop,
		payload: { scrollTop },
	};
}
//	Update_DeviceHeight
export interface Update_DeviceHeight {
	type: typeof types.update_deviceHeight;
	payload: { height: number };
}
export function update_deviceHeight(height: number): Update_DeviceHeight {
	return {
		type: types.update_deviceHeight,
		payload: { height },
	};
}

/*-*-*-*-* ActionProps *-*-*-*-*/
export type ActionProps = Update_Lang & Update_ScrollTop & Update_DeviceHeight;
