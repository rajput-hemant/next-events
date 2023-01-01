import { useContext } from "react";

import MainHeader from "./main-header";
import Notification from "../ui/notification";
import NotificationContext from "../../store/notification-context";

const Layout = ({ children }) => {
	const notifCtx = useContext(NotificationContext);
	const activeNotification = notifCtx.notification;

	return (
		<>
			<MainHeader />
			<main>{children}</main>
			{activeNotification && (
				<Notification
					title={activeNotification.title}
					status={activeNotification.status}
					message={activeNotification.message}
				/>
			)}
		</>
	);
};

export default Layout;
