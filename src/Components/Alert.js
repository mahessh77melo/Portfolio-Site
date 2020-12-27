import React from "react";
import "../Styles/Alert.scss";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

const Alert = ({ text }) => {
	return (
		<div className="alert">
			<div className="alert__text">{text}</div>
			<div
				className="alert__exit"
				onClick={() => {
					document.querySelector(".alert").style.display = "none";
				}}
			>
				<HighlightOffIcon />
			</div>
		</div>
	);
};

export default Alert;
