let promise = new Promise((fulfill, reject) => {
  reject(new Error("NO"));
});

let promise2 = Promise.reject(new Error("NO SECRET VALUE"));

promise2.catch(error => console.log(error.message));
