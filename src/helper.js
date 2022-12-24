const NUMBER = 4;

const choice = (arr) => {
  let ls = [];
  for (let i = 0; i < NUMBER; i++) {
    const rand = Math.floor(Math.random() * arr.length);
    ls.push(arr[rand]);
  }
  return ls;
};

export { choice };
