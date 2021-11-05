let user = { name: "Иван",
secondName: "Ivan"};

let admin = {}; 

for (key in user){
    admin[key]=user[key];
}
let clone = {};
Object.assign(clone, user);

console.log(user, admin, clone);