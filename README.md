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

Note: I couldn't make it work on iOS as I don't own a Mac machine and couldn't use the one at work.



