cordova build --release android
cd platforms/android/build/outputs/apk

jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore my-release-key.keystore android-release-unsigned.apk alias_name
rm CardapioRU.apk
/usr/lib/android-sdk-linux/build-tools/24.0.0/zipalign -v 4 ./platforms/android/build/outputs/apk/android-release-unsigned.apk  ./CardapioRU.apk
