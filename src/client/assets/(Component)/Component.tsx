import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import * as H from "history";

//	components

//	materials
import {} from "@material-ui/core";
import {} from "@fortawesome/react-fontawesome";

//	reudcers
import * as RootReducer from "@src/client/redux/reducers/rootReducer";

//	styles
import * as useStyles from "./_useStyles";

//	types
import * as EnvTypes from "@src/types/environment";

/*-*-*-*-* component props *-*-*-*-*/
interface OwnProps extends RouteComponentProps {
	history: H.History;
	root: RootReducer.StateProps;
}
interface ComponentProps {}
type Props = OwnProps & ComponentProps;
const Component: React.FC<Props> = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const {} = props;
	const { root } = props;
	const { lang } = root.env;
	//	states
	//	styles
	const classes = useStyles.Root({});

	/*-*-*-*-* handlers *-*-*-*-*/

	/*-*-*-*-* lifeCycles *-*-*-*-*/

	/*-*-*-*-* component *-*-*-*-*/
	return <div className={classes.Root}>Component</div>;
};

/*-*-*-*-* default *-*-*-*-*/
export default withRouter(Component);
