// Promise , allows for a resolver function to be passed
let p = new Promise((resolve, reject) => resolve(5));
// then determines a resolve state
p.then((val) => console.log(val)); // 5
// or a rejected state to execute
p.catch((e) => console.log(e)); // due to automatic resolve this does not execute
