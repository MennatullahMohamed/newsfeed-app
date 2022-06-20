# newsfeed-app
Newsfeed app for Musala Soft

clone the project
run: yarn
----------------------------------
for ios:
cd ios
run: pod install
cd ..
run: npx react-native run-ios
----------------------------------
for android:
run: npx react-native run-android
----------------------------------
to test deep linking on android
run: npx uri-scheme open newsfeedapp://{articleIndexValue} --android



