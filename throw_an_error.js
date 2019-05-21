parsePromised = json => {
  return new Promise((fulfill, reject) => {
    try {
      fulfill(JSON.parse(json));
    } catch (error) {
      reject(error);
    }
  });
};

parsePromised(process.argv[2]).then(null, error => console.log(error.message));
