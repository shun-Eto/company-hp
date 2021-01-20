import Component from "./Root";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { AppStateProps } from "@src/client/redux/store";

//	actions

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
type DispatchProps = any;
const mapDispatchToProps = (dispatch: Dispatch<DispatchProps>) => {
	return {};
};

/*-*-*-*-* default *-*-*-*-*/
export default connect(mapStateToProps, mapDispatchToProps)(Component);
