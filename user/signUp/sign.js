app.post("/signin", function (req, res) {

    var username = req.body.username;

    var email = req.body.email;

    var password = req.body.password;

    var phone = req.body.phone;

    var hobby = req.body.hobby;
var obj = {};
    var newuser = {
        name: username,
        email: email,
        password: password,
        phone: phone,
        hobby: hobby,

    };

    obj[key] = newuser;
    response.send (username);