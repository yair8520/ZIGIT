# "User Info": Home Assignment ZIGIT

This project was done using:
* react.js
* Redux for state management.
* MATERIAL-UI components

## Loggin Page

* loading button
* An input error will be displayed in the textInput area (textInput.helperText) on (onChange event).
* General errors will appear below the button

Input integrity tests using rejex:
* Email input- only valid email
* Password input -at least 8 characters long,must contain at least one uppercase letter And one number.
Response TOKEN is save in the Redux Store

## INFO Page

Initial check if the user logged in on the previous page
if not return to Login Page,
then fetch User Data and display the data in REACT-TABLE.

UserInfo section:
* Made Dadeline (%)
* average score
* Number of projects

Table:
* All cells below a score of 70 will be marked in red
* All cells above a score of 90 will be marked in green
* The table can be sorted by each columnתYou have to click on the top of the column.

## Available Scripts

In the project directory, you can run:

### `npm run start`
