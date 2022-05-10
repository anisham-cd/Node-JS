
app.post("/addUser", function (req, res) {
var username = req.body.username;
var email = req.body.email;
var profession = req.body.profession;
var obj = {};
var key = req.body.userid;
var newuser = {
name: username,
email: email,
profession: profession,
};
obj[key] = newuser;



















