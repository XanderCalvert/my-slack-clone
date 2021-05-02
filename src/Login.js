import React from "react";
import "./Login.css";
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";

function Login() {
	const signIn = () => {
		auth
			.signInWithPopup(provider)
			.then((result) => {
				console.log(result);
			})
			.catch((error) => {
				alert(error.message);
			});
	};

	return (
		<div className="login">
			<div className="login__container">
				<img
					src="https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png"
					alt="slack logo"
				/>
				<h1>Sign in to Matt Calvert's Slack clone built in React</h1>
				<p>Calvert.media</p>
				<Button onClick={signIn}>Sign in with Google</Button>
			</div>
		</div>
	);
}

export default Login;
