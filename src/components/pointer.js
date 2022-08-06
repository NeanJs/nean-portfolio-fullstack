import React from "react";
import "../assets/styles/pointer.scss";
import $ from "jquery";
function Pointer() {
	$(document).mousemove((e) => {
		$(".pointer").css({
			left: e.pageX,
			top: e.pageY,
		});
	});

	return (
		<div>
			<div id="pointer" className="pointer"></div>
			<div className="pointer pointer2"></div>
			<div className="pointer pointer3"></div>
			<div className="pointer pointer4"></div>
			<div className="pointer pointer5"></div>
		</div>
	);
}

export default Pointer;
