/**
 * Created by lavystord on 16/9/28.
 */
import { Dimensions } from 'react-native'

const scale = Dimensions.get('window').width / 320;

function normalize(size) {
    return Math.round(scale * size);
    // return size;
}

module.exports = normalize;