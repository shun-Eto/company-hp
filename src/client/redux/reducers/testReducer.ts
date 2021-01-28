import * as TestAction from "@src/client/redux/actions/testAction";

export interface StateProps {
	value: string;
	message: string;
}
const initProps: StateProps = {
	value: "1234",
	message: "Hello",
};

//
const reducer = (
	state: StateProps = initProps,
	action: TestAction.ActionProps
) => {
	switch (action.type) {
		case TestAction.types.update_value:
			return {
				...state,
				value: action.payload.value,
			};

		default:
			return { ...state };
	}
};

export default reducer;
