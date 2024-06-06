const fetch = require('node-fetch');
const { program } = require('commander');

program
  .option('--help', 'Displays help information')
  .option('--view', 'Displays all the current expenses');

program.parse(process.argv);

const options = program.opts();

if (options.help) {
  console.log(`
    Usage: cli.js [options]
    Options:
      --help      Displays help information
      --view      Displays all the current expenses
  `);
} else if (options.view) {
  fetch('http://localhost:3001/expenses')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(err => console.error('Error:', err));
} else {
  console.log('Invalid option. Use --help for more information.');
}
