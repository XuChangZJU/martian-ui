/**
 * Created by lavystord on 17/2/19.
 */
import { Linking, Platform } from 'react-native';

class Call {
    callTo(number) {
        const url = `${Platform.OS === 'ios' ? 'telprompt:' : 'tel:'}${number}`;
        return Linking.canOpenURL(url).then(canOpen => {
            if (!canOpen) {
                return Promise.reject(new Error(`The URL is invalid: ${url}`))
            } else {
                return Linking.openURL(url).catch((err) => Promise.reject(err))
            }
        })
    }
}

module.exports = new Call();