import readline from 'readline';
import chalk from 'chalk';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * Выводит в консоль подтверждения
 * @param {string} message - сообщение подтверждения
 * @returns {Promise<boolean>} - признак подтверждения
 */
export const confirm = (message: string): Promise<boolean> => {
  return new Promise((resolve) => {
    const yes = chalk.green('y');
    const no = chalk.red('n');

    return rl.question(`${message} (${yes}/${no}): `, (answer) => {
      resolve(answer.toLowerCase() === 'y');
    });
  });
};
