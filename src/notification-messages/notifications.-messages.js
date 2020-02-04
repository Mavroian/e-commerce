import { NotificationManager } from "react-notifications";
import "react-notifications/lib/notifications.css";

const createNotification = (type, message, error) => {
  switch (type) {
    case "info":
      NotificationManager.info(`${message}`);
      break;
    case "success":
      NotificationManager.success("Success", `${message}`, 1000);
      break;
    case "warning":
      NotificationManager.warning("Warning", `${message}`, 3000);
      break;
    case "error":
      NotificationManager.error("Try Again", `${error.message}`, 5000); //it can take a callback
      break;
    default:
      break;
  }
};
export default createNotification;
