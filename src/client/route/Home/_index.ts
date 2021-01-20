import Component from "./Component";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { AppStateProps } from "@src/client/redux/store";

//	actions
import * as RootAction from "@src/client/redux/actions/rootAction";

//	reducers

/* * * * * props * * * * */
const mapStateToProps = (state: AppStateProps) => {
	return {
		root: state.root,
	};
};

/* * * * * dispatch * * * * */
type DispatchProps = RootAction.Update_NavId | RootAction.Update_Footer;
const mapDispatchToProps = (dispatch: Dispatch<DispatchProps>) => {
	return {
		rootActions: {
			update_navId: (nav: string) => {
				return dispatch(RootAction.update_navId(nav));
			},
			update_footer: (active: boolean) => {
				return dispatch(RootAction.update_footer(active));
			},
		},
	};
};

/* * * * * default * * * * */
export default connect(mapStateToProps, mapDispatchToProps)(Component);
