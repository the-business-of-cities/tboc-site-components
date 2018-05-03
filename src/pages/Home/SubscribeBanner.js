import styled from "styled-components";
import { compose, withState, withHandlers, } from "recompose";
import fetchJsonp from "fetch-jsonp";

import { Icon, Button, } from "src/components/common/toolbox";

import * as mixins from "codogo-utility-functions";

// --------------------------------------------------

const gutter = "0.75em";

const Wrapper = styled.div`
	background-color: ${ R.path([ "theme", "nav", ]) };
	color: white;
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	padding: ${ gutter };
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	z-index: 1;
	line-height: 1;
	transform: translateY(${ props => (props.visible ? "0" : "100%") });
	transition: 0.2s ease-in transform;
	font-size: 0.8em;

	${ mixins.shadow(1) } ${ mixins.xs`
		flex-direction: column;
		font-size: 0.75em;
		padding: 1.25em;
		align-items: flex-start
	` };
`;

const Text = styled.div`
	margin-right: ${ gutter };
	${ mixins.xs`
		margin-bottom: 1em;
	` };
`;

const Input = styled.input`
	font-size: 1em;
	font-family: inherit;
	margin-right: ${ gutter };
	color: white;
	background-color: rgba(255, 255, 255, 0.2);
	outline: 0;
	border: 0;
	line-height: 1;
	padding: 0.33em 0.67em;
	width: 16em;

	${ mixins.xs`
		padding: 0.7em;
	` } &::placeholder {
		color: rgba(255, 255, 255, 0.5);
	}
`;

const CloseButton = styled.div`
	position: absolute;
	top: 0;
	right: 0.5em;
	bottom: 0;
	display: flex;
	align-items: center;
	font-size: 1.5em;
	padding: 0.5em;
	cursor: pointer;
	${ mixins.xs`
		right: 0.17em;
	` };
`;

const email = "testing1@email.com";

const enhance = compose(
	withState("visible", "setVisible", true),
	withState("email", "setEmail", ""),
	withHandlers({
		hide: ({ setVisible, }) => () => setVisible(false),
		submit: ({ email, setVisible, }) => () =>
			fetchJsonp(
				"https://thebusinessofcities.us14.list-manage.com/subscribe/post-json?" +
					"u=b767bfc077f3ac0858f7fd6d1" +
					"&amp;id=9565d842da" +
					`&EMAIL=${ encodeURIComponent(email) }`,
				{
					jsonpCallback: "c",
					timeout: 20000,
				},
			)
				.then(x => x.json())
				.then(({ result, msg, }) => {
					if (result && msg) {
						if (result === "success") {
							window.alert("Success! " + msg);
							setVisible(false);
						} else if (result === "error") {
							window.alert("Subscription failed. " + msg);
						} else {
							throw new Error();
						}
					} else {
						throw new Error();
					}
				})
				.catch(() => {
					window.alert(
						"Something went wrong. Please try again another time.",
					);
				}),
	}),
	withHandlers({
		onChangeEmail: ({ setEmail, }) => e => {
			setEmail(e.target.value);
		},
		onKeyDownEmail: ({ submit, }) => e => {
			if (e.keyCode === 13) {
				submit();
			}
		},
	}),
);

const Comp = ({
	hide,
	visible,
	submit,
	email,
	onChangeEmail,
	onKeyDownEmail,
}) => (
	<Wrapper visible = { visible }>
		<Text>Sign up to our newsletter for weekly updates:</Text>
		<div>
			<Input
				placeholder = "Your email address"
				onChange = { onChangeEmail }
				onKeyDown = { onKeyDownEmail }
				value = { email }
			/>
			<Button color = "white" onClick = { submit }>
				Subscribe
			</Button>
		</div>

		<CloseButton onClick = { hide }>
			<Icon type = "times" />
		</CloseButton>
	</Wrapper>
);

export default enhance(Comp);
