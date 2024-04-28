import { yarg } from "./config/plugins/args.plugin";
import { ServerApp } from "./presentation/server-app";

// ! Función anónima auto-invocada
(async () => {
  await main();
})();

// * Punto de inicio de la aplicación
async function main() {
  const { b: base, l: limit, s: showTable, n: fileName, d:fileDestination } = yarg;
  ServerApp.run({ base, limit, showTable, fileName,fileDestination });
}
