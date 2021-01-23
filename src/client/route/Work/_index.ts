import Component from "./Component";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { AppStateProps } from "@src/client/redux/store";

//	actions

//	reducers

/* * * * * props * * * * */
const mapStateToProps = (state: AppStateProps) => {
	return {
		root: state.root,
	};
};

/* * * * * dispatch * * * * */
type DispatchProps = any | any;
const mapDispatchToProps = (dispatch: Dispatch<DispatchProps>) => {
	return {};
};

/* * * * * default * * * * */
export default connect(mapStateToProps, mapDispatchToProps)(Component);
