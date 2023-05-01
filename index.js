function echo(value, count) {
  if (count === undefined) {
    count = 5;
  }

  for(let i=0;i<count;i++) {
    console.log('echo:', value);
  }
}

module.exports = { echo };
