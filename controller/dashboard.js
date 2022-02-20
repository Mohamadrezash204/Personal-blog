function updateUser(req, res) {
    const user = req.session.user;
    //console.log(user);
    let edituser = {}
    req.body.username ? edituser.username = req.body.username : null;
    req.body.password ? edituser.password = req.body.password : null;
    req.body.firstName ? edituser.firstName = req.body.firstName : null;
    req.body.lastName ? edituser.lastName = req.body.lastName : null;
    req.body.phone ? edituser.phone = req.body.phone : null;
    req.body.gender ? edituser.gender = req.body.gender : null;

    Users.findByIdAndUpdate(user._id, edituser,
        function(err, docs) {
            if (err) {
                console.log(err)
            } else {
                Users.findById(user._id, function(err, docs) {
                    if (err) return res.send({ success: false, masage: err })
                    req.session.user = docs;
                    return res.redirect('/dashboard')

                })
            }
        })
}

function deleteUser(req, res) {
    const user = req.session.user;
    Users.findByIdAndDelete(user._id, function(err, docs) {
        if (err) {
            console.log(err)
        } else {
            res.send({ success: true, message: `deleted ${docs}` })
            res.redirect("/auth/register")
        }

    });
}
module.exports = { updateUser, deleteUser }