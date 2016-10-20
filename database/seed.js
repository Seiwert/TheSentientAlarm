var sqlite3 = require('sqlite3'),
    db = new sqlite3.Database('./alarm_database.sqlite3');

db.serialize(function() {
    
    // Table to store users
    // userID is primary ID that associates to a user.
    // password is corresponding users password.
    db.run("CREATE TABLE users (userID INTEGER PRIMARY KEY, password TEXT)");

    // Table to store the alarms for a given user
    // dayID is the primary key where each ID corresponds to a day of the week.
    // time is the current set time for the alarm on a given day. Represented in military time.
    // alarmON is a boolean int value that determines if the alarm should be on for that day.
    // this table relates to users table.
    db.run("CREATE TABLE alarms(dayID INTEGER PRIMARY KEY, time INTEGER, alarmON INTEGER, FOREIGN KEY(userID) REFERENCES users(userID))");

});