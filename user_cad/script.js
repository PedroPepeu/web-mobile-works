function addToDb() {
    const fs = require('fs')

    let data = "account info"

    fs.writeFile('db.txt', data, (err) => {
        if (err) throw err;
    })
}

function save_acc() {
    var name = document.getElementById('usr_name');
    console.log(name);
    var name = document.getElementsByName('usr_name');
    console.log(name);
}