const fs = require('fs');
const superagent = require('superagent');

const readFilePro = (file) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject('I couldnot find the file');
      resolve(data);
    });
  });
};

const writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, (err) => {
      if (err) reject('could not write file');
      resolve('success');
    });
  });
};

const getDogPic = async () => {
  try {
    const data = await readFilePro(`${__dirname}/dog.txt`);
    console.log(`Breed: ${data}`);

    const res = await superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`,
    );
    console.log(res.body.message);

    await writeFilePro('dog-img.txt', res.body.message);
    console.log('random dog image saved to file');
  } catch (err) {
    console.log(err);
    throw err;
  }
  return '2:ready';
};

(async () => {
  try {
    console.log('1: wll get dog pics');
    const x = await getDogPic();
    console.log(x);
    console.log('2: done getting the log pics');
  } catch (err) {
    console.log('ERROR');
  }
})();

//!then and wait

/*
console.log('1: wll get dog pics');
getDogPic()
  .then((x) => {
    console.log(x);
    console.log('2: done getting the log pics');
  })
  .catch((err) => {
    console.log('ERROR');
  });

/*

readFilePro(`${__dirname}/dog.txt`)
  .then((data) => {
    console.log(`Breed: ${data}`);
    return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
  })
  .then((res) => {
    console.log(res.body.message);
    return writeFilePro('dog-img.txt', res.body.message);
  })
  .then((res) => {
    console.log('random dog image saved to file');
  })

  .catch((err) => {
    console.log(err);
  });
*/
