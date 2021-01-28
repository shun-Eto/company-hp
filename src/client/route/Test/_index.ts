import Component from "./Component";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { AppStateProps } from "@src/client/redux/store";

//	actions
import * as TestAction from "@src/client/redux/actions/testAction";

//	reducers

/* * * * * props * * * * */
const mapStateToProps = (state: AppStateProps) => {
	return {
		root: state.root,
		test: state.test,
	};
};

/* * * * * dispatch * * * * */
type DispatchProps = TestAction.Update_Value;
const mapDispatchToProps = (dispatch: Dispatch<DispatchProps>) => {
	return {
		testActions: {
			update_value: (value: string) => {
				dispatch(TestAction.update_value(value));
			},
		},
	};
};

/* * * * * default * * * * */
export default connect(mapStateToProps, mapDispatchToProps)(Component);
