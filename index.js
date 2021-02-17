const customExpress = require("./config/customExpress");
const connection = require("./infra/bd");
const Tables = require('./infra/tables')

connection.connect((erro) => {
  if (erro) {
    console.log(erro);
  } else {
    console.log("Connected to DataBase");

    Tables.init(connection)
    const app = customExpress();

    app.listen(3535, () => console.log("esta funfando"));
  }
});
