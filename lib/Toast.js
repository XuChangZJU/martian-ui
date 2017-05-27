/**
 * Created by lavystord on 16/8/31.
 */
import Toast from 'react-native-root-toast';

class MtToast  {
    static show(message, option = { position: Toast.positions.CENTER }) {
        Toast.show(message,option);
    }

    static positions = Toast.positions;
    static durations = Toast.durations;

}

module.exports = MtToast;

