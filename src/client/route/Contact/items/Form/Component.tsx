import * as React from "react";

//	components

//	materials
import {
	Button,
	Container,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	TextField,
} from "@material-ui/core";
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
	const { lang } = props;
	//	states
	const [name, setName] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [subject, setSubject] = React.useState("");
	const [message, setMessage] = React.useState("");
	//	styles
	const classes = useStyles.Item({});
	const subjects: EnvTypes.MenuItem[] = [
		{
			id: "education",
			value: "education",
			label: { jp: "学習支援に関して", en: "Regarding education support" },
		},
		{
			id: "web",
			value: "web",
			label: {
				jp: "ウェブサイト製作に関して",
				en: "Regarding website production",
			},
		},
		{
			id: "application",
			value: "application",
			label: {
				jp: "アプリ開発に関して",
				en: "Regarding application production",
			},
		},
		{
			id: "other",
			value: "other",
			label: { jp: "その他", en: "Other" },
		},
	];

	/*-*-*-*-* handlers *-*-*-*-*/

	/*-*-*-*-* lifeCycles *-*-*-*-*/

	/*-*-*-*-* component *-*-*-*-*/
	return (
		<Container maxWidth="sm" className={classes.Item}>
			{/*-*-*-*-* name *-*-*-*-*/}
			<TextField
				value={name}
				fullWidth
				label="Name"
				type="text"
				variant="outlined"
				className={classes["item-root"]}
				InputProps={{ className: classes["item-input"] }}
			/>

			{/*-*-*-*-* email *-*-*-*-*/}
			<TextField
				value={email}
				fullWidth
				label="Email"
				type="email"
				variant="outlined"
				className={classes["item-root"]}
				InputProps={{ className: classes["item-input"] }}
			/>

			{/*-*-*-*-* subject *-*-*-*-*/}
			<FormControl
				variant="outlined"
				fullWidth
				className={classes["item-root"]}
			>
				<InputLabel>{"Subject"}</InputLabel>
				<Select
					value={subject}
					label={"Subject"}
					classes={{ select: classes["item-input"] }}
					onChange={(e) => setSubject(e.target.value as string)}
				>
					{subjects.map((item, i) => (
						<MenuItem key={i} value={item.value}>
							{item.label[lang]}
						</MenuItem>
					))}
				</Select>
			</FormControl>

			{/*-*-*-*-* message *-*-*-*-*/}
			<TextField
				value={message}
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
