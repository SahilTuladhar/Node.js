const {readFile , writeFile} = require('fs')

const getItem = (path) => {
    return new Promise((resolve , reject) => {
        readFile(path , 'utf8' , (err , data) => {
            if (err){
                reject(err)
            }else{
                resolve(data)
            }
        })
    })
}


getItem('../content/first.txt')
.then((result) => console.log(result))
.catch((err) => console.log(err));

