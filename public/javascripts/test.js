var bcrypt = require('bcrypt');

bcrypt.hash('mypassword', 10, function(err, hash) {
    if (err) { throw (err); }
    console.log(hash);
    bcrypt.compare('mypassword', hash, function(err, result) {
        if (err) { throw (err); }
        console.log(result);
    });
});
// const hash = "$2b$10$J4lBMgT1UcrfHGqLeLDWqO0knhWqK/Z4too39OpQopsyMD/f4g8m6"


// // const hashchek = bcrypt.compare('mypassword', hash, function(err, result) {
// //     if (err) { throw (err); }
// //     return result
// // });
// // console.log(hashchek);
// if (bcrypt.compare('mypasswor', hash)) console.log(false);