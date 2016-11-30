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
    db.run("CREATE TABLE alarms(dayID INTEGER PRIMARY KEY, hours INTEGER, minutes INTEGER, ampm INTEGER, alarmON INTEGER, userID INTEGER, FOREIGN KEY(userID) REFERENCES users(userID))");


    // Populate users table with an inital user (me).
    db.run("INSERT INTO users (password) VALUES ('asdf')") // TODO >> Need to encrypt or something.

    // Populate the alarms table with default data.
    // Monday 
    db.run("INSERT INTO alarms (hours, minutes, ampm, alarmON, userID) VALUES (8, 0, 0, 0, 1)")
    // Tuesday 
    db.run("INSERT INTO alarms (hours, minutes, ampm, alarmON, userID) VALUES (8, 0, 0, 0, 1)")
    // Wednesday 
    db.run("INSERT INTO alarms (hours, minutes, ampm, alarmON, userID) VALUES (8, 0, 0, 0, 1)")
    // Thursday 
    db.run("INSERT INTO alarms (hours, minutes, ampm, alarmON, userID) VALUES (8, 0, 0, 0, 1)")
    // Friday 
    db.run("INSERT INTO alarms (hours, minutes, ampm, alarmON, userID) VALUES (8, 0, 0, 0, 1)")
    // Saturday 
    db.run("INSERT INTO alarms (hours, minutes, ampm, alarmON, userID) VALUES (8, 0, 0, 0, 1)")
    // Sunday 
    db.run("INSERT INTO alarms (hours, minutes, ampm, alarmON, userID) VALUES (8, 0, 0, 0, 1)")
});