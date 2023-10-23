
// https://www.npmjs.com/package/screenfull#support
import screenfull from "screenfull";

export const turnOnFullScreen = () => {
    try {
        if (screenfull.isEnabled) {
            screenfull.request();
        }
    } catch (e) {
        console.log("Error in turnOnFullScreen", e);
    }
}

export const turnOffFullScreen = () => {
    if (screenfull.isEnabled) {
        screenfull.exit();
    }
}
