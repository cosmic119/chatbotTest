/**
 * Created by cosmi on 2017-07-28.
 */
/**
 * Created by cosmi on 2017-07-28.
 */
'use strict';

let getKeyboard = (req, res) => {
    res.set('Content-Type', 'application/json; charset=utf-8');

    return res.json({
        "type" : "text"
    });
};

module.exports = {
    'initialize' : function (app, options) {
        app.get('/api/kakao/keyboard', getKeyboard());
    }
};
