import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';
import { COLORS } from "../../assets/styles/colors";

export const styles = EStyleSheet.create({
    parent: {
        width: '80%',
        borderRadius: "1rem",
        alignSelf: 'center',
        backgroundColor: COLORS.white,
        marginTop: "1rem",
        shadowColor: COLORS.shadow_grey,
        shadowOffset: { width: 0.5, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
    },
    img: {
        alignSelf: "center",
        aspectRatio: 2,
        width: "100%",
        resizeMode: 'contain',
        marginTop: "5%",
    },
    title: {
        marginLeft: 'auto',
        marginRight: 'auto',
        color: COLORS.dark_blue,
        width: '90%',
        fontSize: '1rem',
        textAlign: 'center',
        margin: '0.2rem'
    }
});