# Budget-Tracker

This work builds onto an existing Budget Tracker application to allow for offline access and functionality. The user can add expenses and deposits to their budget with or without a connection. When transactions are entered offline they are stored and and added to the database when brought back online.

Offline functionality is implemented utilizing a Webpack Manifest, Service Worker, and IndexedDB.

## User Story

```
AS AN avid traveller
I WANT to be able to track my withdrawals and deposits with or without a data/internet connection
SO THAT my account balance is accurate when I am traveling
```

## Acceptance Criteria

```
GIVEN a user is on Budget App without an internet connection
WHEN the user inputs a withdrawal or deposit
THEN that will be shown on the page, and added to their transaction history when their connection is back online.
```

# Application Usage

## Node.js

Download application package and open folder in Node.js

Install node dependencies:

```
npm install
```

Install MongoDB (if you do not have it already) and start the Mongo shell - for assistance visit: https://docs.mongodb.com/manual/installation/

Start the server:

```
npm run start
```

Open a web browser and navigate to localhost:3000 to demo the application

## Web Browser

To run a demo of this application, visit:

https://track-this-budget.herokuapp.com/

# Credits

Application files were provided by:
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved
