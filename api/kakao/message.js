
let postMessage = (req, res)=> {
    res.set('Content-Type', 'application/json; charset=utf-8');

    return res.json({
        "message" : {
            "text" : "test"
        }
    });
};

module.exports = {
    'initialize' : function (app, options) {
        app.post('/api/kakao/message', postMessage);
    }
};