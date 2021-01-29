import Component from "./Component";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { AppStateProps } from "@src/client/redux/store";

//	actions
import * as ContactAction from "@src/client/redux/actions/contactAction";

//	reducers
import * as ContactReducer from "@src/client/redux/reducers/contactReducer";

/* * * * * props * * * * */
const mapStateToProps = (state: AppStateProps) => {
	return {
		store: {
			contact: state.contact,
		},
	};
};

/* * * * * dispatch * * * * */
type DispatchProps =
	| ContactAction.Update_Fetching
	| ContactAction.Update_Fetched;
const mapDispatchToProps = (dispatch: Dispatch<DispatchProps>) => {
	return {
		contactActions: {
			update_fetching: (
				key: keyof ContactReducer.Status,
				fetching: boolean
			) => {
				return dispatch(ContactAction.update_fetching(key, fetching));
			},
			update_fetched: (key: keyof ContactReducer.Status, fetched: boolean) => {
				return dispatch(ContactAction.update_fetched(key, fetched));
			},
		},
	};
};

/* * * * * default * * * * */
export default connect(mapStateToProps, mapDispatchToProps)(Component);
