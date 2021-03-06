import Component from "./Component";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { AppStateProps } from "@src/client/redux/store";

//	actions
import * as RootAction from "@src/client/redux/actions/rootAction";

//	reducers

//	types
import * as EnvTypes from "@src/types/environment";

/* * * * * props * * * * */
const mapStateToProps = (state: AppStateProps) => {
	return {
		root: state.root,
	};
};

/* * * * * dispatch * * * * */
type DispatchProps = RootAction.Update_Lang;
const mapDispatchToProps = (dispatch: Dispatch<DispatchProps>) => {
	return {
		rootActions: {
			update_lang: (lang: keyof EnvTypes.Languages) =>
				dispatch(RootAction.update_lang(lang)),
		},
	};
};

/* * * * * default * * * * */
export default connect(mapStateToProps, mapDispatchToProps)(Component);
