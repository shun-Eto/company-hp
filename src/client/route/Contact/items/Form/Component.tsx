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

//	modules
import * as OrigModule from "@src/client/assets/modules/origModule";
import * as ContactMethodModule from "@src/client/route/Contact/modules/methodsModule";

//	styles
import * as useStyles from "./_useStyles";

//	types
import * as EnvTypes from "@src/types/environment";
import * as ContactMethodTypes from "@src/types/contact/methods";

//	classes
const origClass = new OrigModule.default();
const contactMethod = new ContactMethodModule.default();

/*-*-*-*-* component props *-*-*-*-*/
interface ComponentProps {
	lang: keyof EnvTypes.Languages;
}
type Props = ComponentProps;
const Component: React.FC<Props> = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const { lang } = props;
	//	states
	const [name, setName] = React.useState("test");
	const [email, setEmail] = React.useState("prog.shun0830@gmail.com");
	const [subject, setSubject] = React.useState(origClass.get_query("subject"));
	const [message, setMessage] = React.useState("message");
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
	const handleOnClick_submit = () => {
		const body: ContactMethodTypes.Submit_Message_Body = {
			lang,
			form: { name, email, message, subject },
		};
		contactMethod
			.submit_message(body)
			.then((val) => {
				console.log("val", val);
			})
			.catch((err) => {
				console.log("err", err);
			});
	};

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
				//	handlers
				onChange={(e) => setName(e.target.value)}
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
				//	handlers
				onChange={(e) => setEmail(e.target.value)}
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
					MenuProps={{
						getContentAnchorEl: null,
						anchorOrigin: { horizontal: "left", vertical: "bottom" },
						transformOrigin: { horizontal: "left", vertical: "top" },
					}}
					//	handlers
					onChange={(e) => setSubject(e.target.value as string)}
				>
					{subjects.map((item, i) => (
						<MenuItem key={i} value={item.label[lang]}>
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
				//	handlers
				onChange={(e) => setMessage(e.target.value)}
			/>

			{/*-*-*-*-* submit *-*-*-*-*/}
			<Button
				variant="contained"
				className={classes.submit}
				color="primary"
				//	handlers
				onClick={handleOnClick_submit}
			>
				Submit
			</Button>
		</Container>
	);
};

/*-*-*-*-* default *-*-*-*-*/
export default Component;
