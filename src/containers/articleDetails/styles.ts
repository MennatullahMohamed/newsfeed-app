import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';
import { COLORS } from "../../assets/styles/colors";

const SCREEN_HEIGHT = Dimensions.get('window').height;
export const styles = EStyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: COLORS.white
    },
    detailsContainer: {
        flex: 1,
        padding: '0.5rem'
    },
    title: {
        fontSize: '1.2rem',
        fontWeight: 'bold',
        color: COLORS.dark_blue,

    },
    headers: {
        fontSize: '1rem',
        padding: '0.1rem',
        fontWeight: '500',
        color: COLORS.dark_blue,
    },
    details: {
        fontSize: '1rem',
        padding: '0.1rem',
        color: COLORS.dark_blue,
    },
    articleImage: {
        width: "100%",
        height: '15rem',
    }

});