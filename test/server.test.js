console.log('test started');

const expected = 'skala-devops';
const actual = 'skala-devops';

if (expected !== actual) {
  console.error('test failed');
  process.exit(1);
}

console.log('test passed');
process.exit(0);