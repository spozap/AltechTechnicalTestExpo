# AltechTechnicalTest

First of all, to clone the repository, use the following command on console:
```
git clone https://github.com/spozap/AltechTechnicalTest.git
```

After that, you must install all the packages of the project using:
```
yarn install
```

Once you are done, run the project with:
```
npx react-native run-android
```

Once you open the app, you will appear on the Login screen, you will have to register an user first of all so click on the register button,
you will be redirected to the register view. Once there, fill the username data, remember that there is some restrictions for registration:

### Name and surname: Must be letter-only
### Password: Must contain 8 or 8+ characters, with almost one capital letter, number and special symbol like "!,?,."...
### Email: A normal email address like "test@gmail.com"

If the registration is successfully an alert will show up and you will be redirected to the Login page again to type your credentials, if not,
a new alert will appear with an invalid registration message.

Once you log in, there will be a welcome message with the username's name. There's also a Logout button and a Profile button to modify the user's data.
Also, when the user logs in and closes the app, it will not be redirected to Login or Register view anymore until he logs out.

On the Profile view, you will see 3 inputs, one for the name, surname and email of the user which is not editable. The user will be able to modify name and
surname's data. Once is modified just click the submit button and data will be modified advising the user with an alert.
