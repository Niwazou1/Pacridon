const User = require('./src/models/user.js');

User.find(1).then((user) =>{
    console.log(user);
    user.toots().where({id: 3}).then((toots) =>{
        console.log(toots.length);
        console.dir(toots);
    });
});