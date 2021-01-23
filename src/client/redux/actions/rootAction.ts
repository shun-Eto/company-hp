//	reducers
import * as RootReducer from "@src/client/redux/reducers/rootReducer";

//	types
import * as EnvTypes from "@src/types/environment";

/*-*-*-*-* action types *-*-*-*-*/
export const types = {
	update_lang: "[ Root ] update_lang",
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

/*-*-*-*-* ActionProps *-*-*-*-*/
export type ActionProps = Update_Lang;
