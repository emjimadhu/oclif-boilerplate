import { expect, test } from '@oclif/test';

const getStdOut = test.stdout();

describe('hello command', () => {
  getStdOut
    .command(['hello'])
    .it('should expect hello world', context => {
      expect(context.stdout).to.equal('hello world from ./src/commands/hello.ts\n');
    });

  getStdOut
    .command(['hello', '--name', 'madhu'])
    .it('should expect hello madhu', context => {
      expect(context.stdout).to.equal('hello madhu from ./src/commands/hello.ts\n');
    });

  getStdOut
    .command(['hello', './package.json', '-f'])
    .it('should expect hello world with force flag and file name', context => {
      expect(context.stdout).to.equal(
        'hello world from ./src/commands/hello.ts\n' +
      'you input --force and --file: ./package.json\n'
      );
    });

  getStdOut
    .command(['hello', './package.json', '-f', '--name', 'madhu'])
    .it('should expect hello madhu with force flag and file name', context => {
      expect(context.stdout).to.equal(
        'hello madhu from ./src/commands/hello.ts\n' +
      'you input --force and --file: ./package.json\n'
      );
    });
});
