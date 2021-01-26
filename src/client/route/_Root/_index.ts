import Component from "./Root";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { AppStateProps } from "@src/client/redux/store";

//	actions
import * as RootAction from "@src/client/redux/actions/rootAction";

//	reudcers

//	types
import * as EnvTypes from "@src/types/environment";

/*-*-*-*-* State *-*-*-*-*/
const mapStateToProps = (state: AppStateProps) => {
	return {
		root: state.root,
	};
};

/*-*-*-*-* Dispatch *-*-*-*-*/
type DispatchProps = RootAction.Update_ScrollTop;
const mapDispatchToProps = (dispatch: Dispatch<DispatchProps>) => {
	return {
		rootActions: {},
	};
};

/*-*-*-*-* default *-*-*-*-*/
export default connect(mapStateToProps, mapDispatchToProps)(Component);
