module.exports = (client, message) => { 
  // Prevención de bucle infinito
  if(!message.content.startsWith(client.config.prefix)) return; 
  if(message.author.bot) return;

  // Argumentos y command  
  const args = message.content.slice(client.config.prefix.length).trim().split(/ +/g);  
  const command = args.shift().toLowerCase()

  // Colecciones
  let cmd = client.comandos.get(command);
  if(!cmd) return;
  
  cmd(client, message, args);
  
}