import { getAnalytics, logEvent } from "firebase/analytics";
import app from './firebase';

export const sendEvent = (eventType, data) => {
    const analytics = getAnalytics(app);
    logEvent(analytics, eventType, data);
}

export const EVENT_TYPES = {
    SUBMIT_TEST: 'submit_test'
}