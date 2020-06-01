const {initializeList, initialQuery} = require('./utils/initialize');
const db = require('./db/connection');


db.connect(err => {
    if (err) throw err;
    console.log('connected as id ' + db.threadId);
    console.log("welcome to employee taskmaster.");
    initializeList()

});
