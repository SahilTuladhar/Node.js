// built in module : OS

const os = require('node:os');

const currentOS = {
    name: os.type(), // returns OS name
    release: os.release(), // Returns OS version
    totalmem : os.totalmem(), // Returns total memory in bytes
    freemem: os.freemem(), // Returns free memory in bytes
    uptime: os.uptime(), // how long PC is in use
    user: os.userInfo(), // info about current user

}

console.log(currentOS);
