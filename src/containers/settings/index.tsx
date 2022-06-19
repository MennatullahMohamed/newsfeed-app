import React, { useState, useEffect } from 'react'
import { View, Text, SafeAreaView, I18nManager, Switch } from 'react-native'
import { useTranslation } from 'react-i18next';
import DropDownPicker from 'react-native-dropdown-picker';
import RNRestart from "react-native-restart";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector, useDispatch } from 'react-redux';
import { switchMode } from '../../redux/actions';
import { styles } from './styles';

interface ISettingsProps {
    navigation: any,
}
export function Settings(props: ISettingsProps) {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const theme = useSelector((state: any) => state.theme);
    const [value, setValue] = useState('');
    const [mode, setMode] = useState(theme.mode);
    const [open, setOpen] = useState(false);
    const [items, setItems] = useState([
        { label: 'English', value: 'en' },
        { label: 'العربية', value: 'ar' }
    ]);
    useEffect(() => {
        AsyncStorage.getItem('language', async (err, res) => {
            if (res) {
                console.log("resss", res)
                setValue(JSON.parse(res));
            }
        })
    }, [])
    const handleThemeChange = (value: boolean) => {
        setMode(value);
        if (value == true) {
            dispatch(switchMode('dark'));
            setMode(value)
        }
        else {
            dispatch(switchMode('light'));
        }

    }
    const changeLang = (item: any) => {
        AsyncStorage.setItem('language', JSON.stringify(item.value), async () => {
            if (item.value.toLowerCase() == 'ar') {
                await I18nManager.forceRTL(true);
                RNRestart.Restart();
            }
            else {
                if (I18nManager.isRTL) {
                    await I18nManager.forceRTL(false);
                    RNRestart.Restart();
                }
            }
        });
    }
    return (
        <SafeAreaView style={[{ height: '100%' }, theme.mode == 'dark' ? styles.darkBgColor : styles.lightBgColor]}>
            <DropDownPicker
                open={open}
                value={value}
                items={items}
                multiple={false}
                placeholder={t("settings:selectLanguage")}
                onSelectItem={(item: any) => changeLang(item)}
                containerStyle={{ width: '90%', alignSelf: 'center' }}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
            />
            <View style={styles.switchContainer}>
                <Text style={[styles.switchText, theme.mode == 'dark' ? styles.darkColor : styles.lightColor]}>{t('settings:darkMode')}</Text>
                <Switch value={mode}
                    onValueChange={(value: boolean) => handleThemeChange(value)} />
            </View>
        </SafeAreaView>
    )
}
