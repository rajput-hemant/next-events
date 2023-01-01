import { createContext, useEffect, useState } from "react";

const NotificationContext = createContext({
	notification: null, // { title, message, status }
	showNotification: (notificationData) => {},
	hideNotification: () => {},
});

export const NotificationContextProvider = ({ children }) => {
	const [activeNotification, setActiveNotification] = useState();

	useEffect(() => {
		if (
			activeNotification &&
			(activeNotification.status !== "error" ||
				activeNotification.status !== "success")
		) {
			const timer = setTimeout(() => {
				setActiveNotification(null);
			}, 3000);

			return () => {
				clearTimeout(timer);
			};
		}
	}, [activeNotification]);

	const showNotificationHandler = (notificationData) => {
		setActiveNotification(notificationData);
	};

	const hideNotificationHandler = () => {
		setActiveNotification(null);
	};

	const context = {
		notification: activeNotification,
		showNotification: showNotificationHandler,
		hideNotification: hideNotificationHandler,
	};

	return (
		<NotificationContext.Provider value={context}>
			{children}
		</NotificationContext.Provider>
	);
};

export default NotificationContext;
