import { createContext, useState } from "react";

const NotificationContext = createContext({
    notification: null,
    showNotification: () => {},
    hideNotification = ()=>{}
})

export const NotificationContextProvider = (props) => {
    <NotificationContext.Provider>
        {props.children}
    </NotificationContext.Provider>
}

export default NotificationContext