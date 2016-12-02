"use strict"

var db = require('../db');

var USERID = 1; //TODO >> Update this to where it grabs a real userID.

class Controller {

    getIndex(req, res) {
        db.all('SELECT * FROM alarms WHERE USERID=?', USERID, 
        function(err, times) {
            if(err) {
                console.error(err);
                return res.sendStatus(500);
            }
            res.render('index', {
                alarms: times
            });
        })
    }

    getLogin(req,res) {
        res.render('login', {

        });
    }

    getAlarm(req,res) {
        res.render('alarm', {

        });
    }

    getAlarmData(req,res) {
        db.all('SELECT * FROM alarms WHERE USERID=? AND dayID =?', USERID, new Date().getDay(),
        function(err, alarmData) {
            if(err) {
                console.error(err);
                return res.sendStatus(500);
            }
            res.send(alarmData);
        })
    }

    // Updates database with alarm time changes.
    setAlarm(req,res) {

        // Update Monday alarm
        var MonON = 0;
        var MonAMPM = 1; 
        if(typeof req.body.AMPM_Mon == "undefined") {
            MonAMPM = 0;
        }
        if(typeof req.body.alarmON_Mon == "undefined") {
            MonON = 1;
        }
       db.run("UPDATE alarms SET hours=?, minutes=?, ampm=?, alarmON=? WHERE userID=? AND dayID=?", parseInt(req.body.hourSlider_Mon), parseInt(req.body.minuteSlider_Mon), MonAMPM, MonON, 1, 1);

        // Update Tuesday alarm
        var TueON = 0;
        var TueAMPM = 1; 
        if(typeof req.body.AMPM_Tue == "undefined") {
            TueAMPM = 0;
        }
        if(typeof req.body.alarmON_Tue == "undefined") {
            TueON = 1;
        }
       db.run("UPDATE alarms SET hours=?, minutes=?, ampm=?, alarmON=? WHERE userID=? AND dayID=?", parseInt(req.body.hourSlider_Tue), parseInt(req.body.minuteSlider_Tue), TueAMPM, TueON, 1, 2);

        // Update Wednesday alarm
        var WedON = 0;
        var WedAMPM = 1; 
        if(typeof req.body.AMPM_Wed == "undefined") {
            WedAMPM = 0;
        }
        if(typeof req.body.alarmON_Wed == "undefined") {
            WedON = 1;
        }
       db.run("UPDATE alarms SET hours=?, minutes=?, ampm=?, alarmON=? WHERE userID=? AND dayID=?", parseInt(req.body.hourSlider_Wed), parseInt(req.body.minuteSlider_Wed), WedAMPM, WedON, 1, 3);

        // Update Thursday alarm
        var ThurON = 0;
        var ThurAMPM = 1; 
        if(typeof req.body.AMPM_Thur == "undefined") {
            ThurAMPM = 0;
        }
        if(typeof req.body.alarmON_Thur == "undefined") {
            ThurON = 1;
        }
       db.run("UPDATE alarms SET hours=?, minutes=?, ampm=?, alarmON=? WHERE userID=? AND dayID=?", parseInt(req.body.hourSlider_Thur), parseInt(req.body.minuteSlider_Thur), ThurAMPM, ThurON, 1, 4);

        // Update Friday alarm
        var FriON = 0;
        var FriAMPM = 1; 
        if(typeof req.body.AMPM_Fri == "undefined") {
            FriAMPM = 0;
        }
        if(typeof req.body.alarmON_Fri == "undefined") {
            FriON = 1;
        }
       db.run("UPDATE alarms SET hours=?, minutes=?, ampm=?, alarmON=? WHERE userID=? AND dayID=?", parseInt(req.body.hourSlider_Fri), parseInt(req.body.minuteSlider_Fri), FriAMPM, FriON, 1, 5);

        // Update Saturday alarm
        var SatON = 0;
        var SatAMPM = 1; 
        if(typeof req.body.AMPM_Sat == "undefined") {
            SatAMPM = 0;
        }
        if(typeof req.body.alarmON_Sat == "undefined") {
            SatON = 1;
        }
       db.run("UPDATE alarms SET hours=?, minutes=?, ampm=?, alarmON=? WHERE userID=? AND dayID=?", parseInt(req.body.hourSlider_Sat), parseInt(req.body.minuteSlider_Sat), SatAMPM, SatON, 1, 6);

        // Update Sunday alarm
        var SunON = 0;
        var SunAMPM = 1; 
        if(typeof req.body.AMPM_Sun == "undefined") {
            SunAMPM = 0;
        }
        if(typeof req.body.alarmON_Sun == "undefined") {
            SunON = 1;
        }
       db.run("UPDATE alarms SET hours=?, minutes=?, ampm=?, alarmON=? WHERE userID=? AND dayID=?", parseInt(req.body.hourSlider_Sun), parseInt(req.body.minuteSlider_Sun), SunAMPM, SunON, 1, 7);

        
       res.redirect("/");        
    }


}

module.exports = exports = new Controller();