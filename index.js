function echo(value, options) {
  const { count = 5, prefix = 'echo:'} = options

  for(let i=0;i<count;i++) {
    console.log(prefix, value);
  }
}

module.exports = { echo };
