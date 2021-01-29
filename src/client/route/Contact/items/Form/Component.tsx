import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router";
import * as H from "history";
import { useSnackbar } from "notistack";

//	components
import * as LoadingWindow from "@src/client/assets/items/LoadingWindow/Component";

//	materials
import {
	Button,
	Container,
	FormControl,
	FormHelperText,
	FormLabel,
	InputLabel,
	MenuItem,
	OutlinedInput,
	Select,
} from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//	modules
import * as OrigModule from "@src/client/assets/modules/origModule";
import * as ContactMethodModule from "@src/client/route/Contact/modules/methodsModule";

//	actions
import * as ContactAction from "@src/client/redux/actions/contactAction";

//	reducers
import * as ContactReducer from "@src/client/redux/reducers/contactReducer";

//	styles
import * as useStyles from "./_useStyles";

//	types
import * as EnvTypes from "@src/types/environment";
import * as ContactMethodTypes from "@src/types/contact/methods";

//	classes
const origClass = new OrigModule.default();
const contactMethod = new ContactMethodModule.default();

/*-*-*-*-* component props *-*-*-*-*/
interface OwnProps extends RouteComponentProps {
	history: H.History;
	lang: keyof EnvTypes.Languages;
	//	store
	store: {
		contact: ContactReducer.StateProps;
	};
	//	actions
	contactActions: {
		update_fetching: typeof ContactAction.update_fetching;
		update_fetched: typeof ContactAction.update_fetched;
	};
}
interface ComponentProps {}
type Props = OwnProps & ComponentProps;
const Component: React.FC<Props> = (props) => {
	/*-*-*-*-* properties *-*-*-*-*/
	const { lang, store, contactActions } = props;
	const message_status = store.contact.status.message;
	//	states
	const [name, setName] = React.useState("");
	const [email, setEmail] = React.useState("");
	const [subject, setSubject] = React.useState(origClass.get_query("subject"));
	const [message, setMessage] = React.useState("");
	const [nameError, setNameError] = React.useState<EnvTypes.Languages>();
	const [emailError, setEmailError] = React.useState<EnvTypes.Languages>();
	const [subjectError, setSubjectError] = React.useState<EnvTypes.Languages>();
	const [messageError, setMessageError] = React.useState<EnvTypes.Languages>();
	//	memo
	const nameCount = React.useMemo(() => {
		return `[ ${name.length} / ${contactMethod.default.maxCount.name} ]`;
	}, [name]);
	const messageCount = React.useMemo(() => {
		return `[ ${message.length} / ${contactMethod.default.maxCount.message} ]`;
	}, [message]);
	//	useSnackbar
	const snack = useSnackbar().enqueueSnackbar;
	const snackbar_props = contactMethod.default.snackbar;
	//	styles
	const classes = useStyles.Item({ submitted: message_status.fetched });
	//	const list
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
	//	handleOnClick_submit
	const handleOnClick_submit = () => {
		const body: ContactMethodTypes.Submit_Message_Body = {
			lang,
			form: { name, email, message, subject: get_subjectLabel(subject) },
		};

		const valid_status = contactMethod.validation_submit_message(body);

		if (valid_status.error) {
			/*-*-*-*-* exist error *-*-*-*-*/
			set_errorComponent(valid_status);
		} else {
			/*-*-*-*-* submit messasge *-*-*-*-*/
			contactActions.update_fetching("message", true);
			contactMethod
				.submit_message(body)
				.then((val) => {
					contactActions.update_fetching("message", false);
					const { status } = val;
					if (status.error) {
						set_errorComponent(status);
					} else {
						contactActions.update_fetched("message", true);
						snack(snackbar_props.message.success[lang], { variant: "success" });
						setName("");
						setEmail("");
						setSubject("");
						setMessage("");
					}
				})
				.catch((err) => {
					contactActions.update_fetching("message", false);
					snack(snackbar_props.message.error[lang], { variant: "error" });
					props.history.push("/");
				});
		}
	};

	/*-*-*-*-* functions *-*-*-*-*/
	//	set_errorComponent
	function set_errorComponent(error_status: EnvTypes.Status) {
		if (error_status?.errorList?.["name"])
			setNameError(error_status.errorList["name"]);
		if (error_status?.errorList?.["email"])
			setEmailError(error_status.errorList["email"]);
		if (error_status?.errorList?.["subject"])
			setSubjectError(error_status.errorList["subject"]);
		if (error_status?.errorList?.["message"])
			setMessageError(error_status.errorList["message"]);

		//	snackbar
		snack(snackbar_props.message.error[lang], { variant: "warning" });
	}
	//	get_subjectLabel
	function get_subjectLabel(value: string): string {
		return subjects.filter((val) => val.value === value)[0]?.label[lang] || "";
	}

	/*-*-*-*-* lifeCycles *-*-*-*-*/

	/*-*-*-*-* component *-*-*-*-*/
	return (
		<React.Fragment>
			<LoadingWindow.OrigModal open={message_status.fetching} />

			<Container maxWidth="sm" className={classes.Item}>
				{/*-*-*-*-* name *-*-*-*-*/}
				<FormControl
					fullWidth
					variant="outlined"
					className={classes["item-root"]}
					error={!!nameError}
				>
					<InputLabel>Name</InputLabel>
					<FormLabel className={classes["item-countLabel"]}>
						{nameCount}
					</FormLabel>
					<OutlinedInput
						value={name}
						label="Name"
						className={classes["item-input"]}
						type="text"
						//	handlers
						onChange={(e) => {
							setName(e.target.value);
							setNameError(undefined);
						}}
					/>
					{!!nameError && <FormHelperText>{nameError[lang]}</FormHelperText>}
				</FormControl>

				{/*-*-*-*-* email *-*-*-*-*/}
				<FormControl
					fullWidth
					variant="outlined"
					className={classes["item-root"]}
					error={!!emailError}
				>
					<InputLabel>Email</InputLabel>
					<OutlinedInput
						value={email}
						label="Email"
						className={classes["item-input"]}
						type="email"
						//	handlers
						onChange={(e) => {
							setEmail(e.target.value);
							setEmailError(undefined);
						}}
					/>
					{!!emailError && <FormHelperText>{emailError[lang]}</FormHelperText>}
				</FormControl>

				{/*-*-*-*-* subject *-*-*-*-*/}
				<FormControl
					variant="outlined"
					fullWidth
					className={classes["item-root"]}
					error={!!subjectError}
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
						onChange={(e) => {
							setSubject(e.target.value as string);
							setSubjectError(undefined);
						}}
					>
						{subjects.map((item, i) => (
							<MenuItem key={i} value={item.value}>
								{item.label[lang]}
							</MenuItem>
						))}
					</Select>
					{!!subjectError && (
						<FormHelperText>{subjectError[lang]}</FormHelperText>
					)}
				</FormControl>

				{/*-*-*-*-* message *-*-*-*-*/}
				<FormControl
					fullWidth
					variant="outlined"
					className={classes["item-root"]}
					error={!!messageError}
				>
					<InputLabel>Message</InputLabel>
					<FormLabel className={classes["item-countLabel"]}>
						{messageCount}
					</FormLabel>
					<OutlinedInput
						value={message}
						label="Message"
						className={classes["item-input"]}
						type="text"
						multiline
						rows={8}
						//	handlers
						onChange={(e) => {
							setMessage(e.target.value);
							setMessageError(undefined);
						}}
					/>
					{!!messageError && (
						<FormHelperText>{messageError[lang]}</FormHelperText>
					)}
				</FormControl>

				{/*-*-*-*-* submit *-*-*-*-*/}
				{!message_status.fetched ? (
					<Button
						variant="contained"
						className={classes.submit}
						color="primary"
						//	handlers
						onClick={handleOnClick_submit}
					>
						Submit
					</Button>
				) : (
					<Button
						variant="contained"
						className={`${classes.submitted} ${classes.submit}`}
						color="primary"
					>
						<FontAwesomeIcon
							icon={["fas", "check"]}
							className={classes["submit-faIcon"]}
						/>
						Submitted
					</Button>
				)}
			</Container>
		</React.Fragment>
	);
};

/*-*-*-*-* default *-*-*-*-*/
export default withRouter(Component);
