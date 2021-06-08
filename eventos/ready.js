module.exports = (client) => {
  
  client.user.setPresence( 
    {
      status: "online", 
      game: { 
        name: `${process.env.PREFIX}ping`, 
        type: "PLAYING"
      }
    }
  );
 
  
};