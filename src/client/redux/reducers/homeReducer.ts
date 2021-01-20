//  actions
import * as HomeAction from "@src/client/redux/actions/homeAction";

/*-*-*-*-* basic interface *-*-*-*-*/
export interface Status {}
const initStatus: Status = {};
export interface Data {}
const initData: Data = {};
export interface Environment {}
const initEnvironment: Environment = {};

export interface StateProps {
	status: Status;
	data: Data;
	env: Environment;
}
const initStateProps: StateProps = {
	status: initStatus,
	data: initData,
	env: initEnvironment,
};

/*-*-*-*-* reducer **-*-*-*-*/
const reducer = (
	state: StateProps = initStateProps,
	action: HomeAction.ActionProps
) => {
	switch (action.type) {
		/*-*-*-*-* actions **-*-*-*-*/

		/*-*-*-*-* default **-*-*-*-*/
		default:
			return state;
	}
};

/*-*-*-*-* default **-*-*-*-*/
export default reducer;
