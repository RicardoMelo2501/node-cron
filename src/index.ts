const cron = require('node-cron');
const { exec } = require('child_process');

cron.schedule(`*/1 * * * *`, async () => {
  // Execute o script PHP usando o comando PHP
  exec('php seu_script.php', (error: unknown, stdout: string, stderr: string) => {
     if (error !== null && error !== undefined) {
      console.error(`Erro ao executar o script PHP: ${error}`);
      return;
    }
    console.log(`Saída do script PHP: ${stdout}`);
    console.error(`Erros do script PHP: ${stderr}`);
  });
});
