import * as React from "react";

//	components

//	materials
import { Button, Container, TextField } from "@material-ui/core";
import {} from "@fortawesome/react-fontawesome";

//
import * as TestAction from "@src/client/redux/actions/testAction";

//	reducers
import * as TestReducer from "@src/client/redux/reducers/testReducer";

//	styles
import * as useStyles from "./_useStyles";

//	types
import * as EnvTypes from "@src/types/environment";

/*-*-*-*-* component props *-*-*-*-*/
interface OwnProps {
	test: TestReducer.StateProps;
	//
	testActions: {
		update_value: typeof TestAction.update_value;
	};
}
interface ComponentProps {}
type Props = OwnProps & ComponentProps;
const Component: React.FC<Props> = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const { test } = props;
	console.log("test", test);
	//	states
	//	styles
	const classes = useStyles.Item({});

	/*-*-*-*-* handlers *-*-*-*-*/
	const handleOnClick_btn = () => {
		props.testActions.update_value("handleOnClick_btn");
	};

	/*-*-*-*-* lifeCycles *-*-*-*-*/

	/*-*-*-*-* component *-*-*-*-*/
	return (
		<div className={classes.Item}>
			<Container maxWidth="sm" style={{ padding: 16 }}>
				<TextField
					value={test.value}
					fullWidth
					variant="outlined"
					InputProps={{ style: { backgroundColor: "white" } }}
				></TextField>

				<Button variant="contained" onClick={handleOnClick_btn}>
					test
				</Button>
			</Container>
		</div>
	);
};

/*-*-*-*-* default *-*-*-*-*/
export default Component;
