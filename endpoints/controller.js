"use strict"

class Controller {
    getIndex(req, res) {

        res.render('index', {

        });
    }

    getLogin(req,res) {
        res.render('login', {

        });
    }
}

module.exports = exports = new Controller();