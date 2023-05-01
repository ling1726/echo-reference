/**
 * Echo user provided value
 * 
 * @param {string} value - The value to echo
 * @param {object} options
 * @param {number} [options.count=5] - How many times to echo
 * @param {string} [options.prefix=echo:] - Prefix logged before echoing
 */
function echo(value, options) {
  const { count = 5, prefix = 'echo:'} = options

  for(let i=0;i<count;i++) {
    console.log(prefix, value);
  }
}

module.exports = { echo };
