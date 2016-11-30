"use strict"

var db = require('../db');

var USERID = 1; //TODO >> Update this to where it grabs a real userID.

class Controller {
    getIndex(req, res) {

        res.render('index', {

        });
    }

    getLogin(req,res) {
        res.render('login', {

        });
    }

    // Updates database with alarm time changes.
    setAlarm(req,res) {
        console.log(req.body);
        console.log(req);

        // Update Monday alarm
        var MonTime = 0;
        var MonON = 0;
        if(typeof req.body.AMPM_Mon == "undefined") {
            MonTime += parseInt(req.body.hourSlider_Mon);
        } else {
            MonTime += parseInt(req.body.hourSlider_Mon) + 12; //PM was pressed
        }
        MonTime *= 100;
        MonTime += parseInt(req.body.minuteSlider_Mon);

        if(typeof req.body.alarmON_Mon == "undefined") {
            MonON = 1;
        }
       db.run("UPDATE alarms SET time=?, alarmON=? WHERE userID=? AND dayID=?", MonTime, MonON, 1, 1);

        // Update Tuesday alarm
        var TueTime = 0;
        var TueON = 0;
        if(typeof req.body.AMPM_Tue == "undefined") {
            TueTime += parseInt(req.body.hourSlider_Tue);
        } else {
            TueTime += parseInt(req.body.hourSlider_Tue) + 12; //PM was pressed
        }
        TueTime *= 100;
        TueTime += parseInt(req.body.minuteSlider_Tue);

        if(typeof req.body.alarmON_Tue == "undefined") {
            TueON = 1;
        }
       db.run("UPDATE alarms SET time=?, alarmON=? WHERE userID=? AND dayID=?", TueTime, TueON, 1, 2);

        // Update Wednesday alarm
        var WedTime = 0;
        var WedON = 0;
        if(typeof req.body.AMPM_Wed == "undefined") {
            WedTime += parseInt(req.body.hourSlider_Wed);
        } else {
            WedTime += parseInt(req.body.hourSlider_Wed) + 12; //PM was pressed
        }
        WedTime *= 100;
        WedTime += parseInt(req.body.minuteSlider_Wed);

        if(typeof req.body.alarmON_Wed == "undefined") {
            WedON = 1;
        }
       db.run("UPDATE alarms SET time=?, alarmON=? WHERE userID=? AND dayID=?", WedTime, WedON, 1, 3);

        // Update Thursday alarm
        var ThurTime = 0;
        var ThurON = 0;
        if(typeof req.body.AMPM_Thur == "undefined") {
            ThurTime += parseInt(req.body.hourSlider_Thur);
        } else {
            ThurTime += parseInt(req.body.hourSlider_Thur) + 12; //PM was pressed
        }
        ThurTime *= 100;
        ThurTime += parseInt(req.body.minuteSlider_Thur);

        if(typeof req.body.alarmON_Thur == "undefined") {
            ThurON = 1;
        }
       db.run("UPDATE alarms SET time=?, alarmON=? WHERE userID=? AND dayID=?", ThurTime, ThurON, 1, 4);

        // Update Friday alarm
        var FriTime = 0;
        var FriON = 0;
        if(typeof req.body.AMPM_Fri == "undefined") {
            FriTime += parseInt(req.body.hourSlider_Fri);
        } else {
            FriTime += parseInt(req.body.hourSlider_Fri) + 12; //PM was pressed
        }
        FriTime *= 100;
        FriTime += parseInt(req.body.minuteSlider_Fri);

        if(typeof req.body.alarmON_Fri == "undefined") {
            FriON = 1;
        }
       db.run("UPDATE alarms SET time=?, alarmON=? WHERE userID=? AND dayID=?", FriTime, FriON, 1, 5);

        // Update Saturday alarm
        var SatTime = 0;
        var SatON = 0;
        if(typeof req.body.AMPM_Sat == "undefined") {
            SatTime += parseInt(req.body.hourSlider_Sat);
        } else {
            SatTime += parseInt(req.body.hourSlider_Sat) + 12; //PM was pressed
        }
        SatTime *= 100;
        SatTime += parseInt(req.body.minuteSlider_Sat);

        if(typeof req.body.alarmON_Sat == "undefined") {
            SatON = 1;
        }
       db.run("UPDATE alarms SET time=?, alarmON=? WHERE userID=? AND dayID=?", SatTime, SatON, 1, 6);

        // Update Sunday alarm
        var SunTime = 0;
        var SunON = 0;
        if(typeof req.body.AMPM_Sun == "undefined") {
            SunTime += parseInt(req.body.hourSlider_Sun);
        } else {
            SunTime += parseInt(req.body.hourSlider_Sun) + 12; //PM was pressed
        }
        SunTime *= 100;
        SunTime += parseInt(req.body.minuteSlider_Sun);

        if(typeof req.body.alarmON_Sun == "undefined") {
            SunON = 1;
        }
       db.run("UPDATE alarms SET time=?, alarmON=? WHERE userID=? AND dayID=?", SunTime, SunON, 1, 7);
        
       res.redirect("/");        
    }


}

module.exports = exports = new Controller();