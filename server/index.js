const server = require("./src/server");
const { conn } = require("./src/DB_Connection");
const PORT = process.env.PORT;

conn
  .sync({ alter: true })
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));