import React, { useState, useEffect } from 'react'
import { View, TextInput, Text, SafeAreaView, FlatList, I18nManager } from 'react-native'
import { useTranslation } from 'react-i18next';
import DropDownPicker from 'react-native-dropdown-picker';
import { COLORS } from '../../assets/styles/colors';
import RNRestart from "react-native-restart";
import AsyncStorage from '@react-native-async-storage/async-storage';

interface ISettingsProps {
    navigation: any,
}
export function Settings(props: ISettingsProps) {
    const { t } = useTranslation();
    const [value, setValue] = useState('');
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
    const changeLang = (item: any) => {
        console.log("changeLang", item)
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
    console.log("valueee", value)
    return (
        <SafeAreaView style={{ height: '100%', backgroundColor: COLORS.white }}>
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
        </SafeAreaView>
    )
}
