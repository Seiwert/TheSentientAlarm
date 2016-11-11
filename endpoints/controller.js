"use strict"

var db = require('../db');

class Controller {
    getIndex(req, res) {

        res.render('index', {

        });
    }

    getLogin(req,res) {
        res.render('login', {

        });
    }

    setAlarm(req,res) {
        console.log(req.body);
        console.log(req);
    }


}

module.exports = exports = new Controller();