import EStyleSheet from 'react-native-extended-stylesheet';
import { COLORS } from "../../assets/styles/colors";
export const styles = EStyleSheet.create({

    darkContainer: {
        backgroundColor: COLORS.dark_blue
    },
    lightContainer: {
        backgroundColor: COLORS.white
    },
    searchContainer: {
        width: '90%',
        flexDirection: "row",
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: COLORS.light_grey,
        borderRadius: "0.7rem",
        marginHorizontal: "3%",
        alignItems: "center",
        paddingLeft: "5%",
    }
});
