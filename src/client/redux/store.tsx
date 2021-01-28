import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

/*-*-*-*-* reducers *-*-*-*-*/
import * as RootReducer from "./reducers/RootReducer";
import * as HomeReducer from "./reducers/homeReducer";
import * as TestReducer from "./reducers/testReducer";

/*-*-*-*-* AppProps *-*-*-*-*/
export interface AppStateProps {
	root: RootReducer.StateProps;
	home: HomeReducer.StateProps;
	test: TestReducer.StateProps;
}

/*-*-*-*-* store *-*-*-*-*/
const storeEnhancers =
	(window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
	combineReducers<AppStateProps>({
		root: RootReducer.default,
		home: HomeReducer.default,
		test: TestReducer.default,
	}),
	storeEnhancers(applyMiddleware(thunk))
);

/*-*-*-*-* default *-*-*-*-*/
export default store;
