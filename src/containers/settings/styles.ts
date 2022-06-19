import EStyleSheet from 'react-native-extended-stylesheet';
import { COLORS } from "../../assets/styles/colors";
export const styles = EStyleSheet.create({

    darkBgColor: {
        backgroundColor: COLORS.dark_blue
    },
    lightBgColor: {
        backgroundColor: COLORS.white
    },
    switchText: {
        fontSize: '1rem',
    },
    darkColor: {
        color: COLORS.white
    },
    lightColor: {
        fontSize: '1.1rem',
        color: COLORS.dark_blue
    },
    switchContainer: {
        flexDirection: 'row',
        width: '90%',
        paddingVertical: '1rem',
        alignSelf: 'center',
        justifyContent: 'space-between'
    }
});
