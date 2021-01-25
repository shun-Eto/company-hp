import * as React from "react";

//	components

//	materials
import { Button, Container, TextField } from "@material-ui/core";
import {} from "@fortawesome/react-fontawesome";

//	styles
import * as useStyles from "./_useStyles";

//	types
import * as EnvTypes from "@src/types/environment";

/*-*-*-*-* component props *-*-*-*-*/
interface ComponentProps {
	lang: keyof EnvTypes.Languages;
}
type Props = ComponentProps;
const Component: React.FC<Props> = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const {} = props;
	//	states
	//	styles
	const classes = useStyles.Item({});

	/*-*-*-*-* handlers *-*-*-*-*/

	/*-*-*-*-* lifeCycles *-*-*-*-*/

	/*-*-*-*-* component *-*-*-*-*/
	return (
		<Container maxWidth="sm" className={classes.Item}>
			{/*-*-*-*-* name *-*-*-*-*/}
			<TextField
				fullWidth
				label="Name"
				type="text"
				variant="outlined"
				className={classes["item-root"]}
				InputProps={{ className: classes["item-input"] }}
			/>

			{/*-*-*-*-* email *-*-*-*-*/}
			<TextField
				fullWidth
				label="Email"
				type="email"
				variant="outlined"
				className={classes["item-root"]}
				InputProps={{ className: classes["item-input"] }}
			/>

			{/*-*-*-*-* message *-*-*-*-*/}
			<TextField
				multiline
				fullWidth
				rows={8}
				type="text"
				label="Message"
				variant="outlined"
				className={classes["item-root"]}
				InputProps={{ className: classes["item-input"] }}
			/>

			{/*-*-*-*-* submit *-*-*-*-*/}
			<Button variant="contained" className={classes.submit} color="primary">
				Submit
			</Button>
		</Container>
	);
};

/*-*-*-*-* default *-*-*-*-*/
export default Component;
