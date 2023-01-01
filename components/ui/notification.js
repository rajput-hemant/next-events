import { useContext } from "react";

import NotificationContext from "../../store/notification-context";

const Notification = ({ title, message, status }) => {
	const notifCtx = useContext(NotificationContext);

	let statusClasses = "";

	if (status === "success") {
		statusClasses = "bg-green-500";
	}

	if (status === "error") {
		statusClasses = "bg-red-500";
	}

	if (status === "pending") {
		statusClasses = "bg-blue-500";
	}

	const activeClasses = `fixed bottom-0 left-0 rounded-t-md h-20 w-full flex justify-between items-center text-white px-[10%] py-2 shadow-md ${statusClasses}`;

	return (
		<div className={activeClasses} onClick={notifCtx.hideNotification}>
			<h2 className="m-0 text-3xl text-white font-bold">{title}</h2>
			<p className="text-lg italic">{message}</p>
		</div>
	);
};

export default Notification;
