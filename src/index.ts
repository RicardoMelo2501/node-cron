import cron from 'node-cron';
const { exec } = require('child_process');

cron.schedule(`*/1 * * * *`, async () => {
  console.log(`running your task...`);

    // Substitua 'seu_script.php' pelo caminho do seu script PHP
  const comandoPHP = 'php teste.php';

  // Execute o script PHP usando o comando PHP
  exec(comandoPHP, (error, stdout, stderr) => {
    if (error) {
      console.error(`Erro ao executar o script PHP: ${error}`);
      return;
    }
    console.log(`Saída do script PHP: ${stdout}`);
    console.error(`Erros do script PHP: ${stderr}`);
  });
});
