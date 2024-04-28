import fs from "fs";
import { yarg } from "./config/plugins/args.plugin";

const { b: base, l: limit, s: showTable } = yarg;

const headerMessage: string = `
=============================
TABLA DEL ${base}
=============================\n
`;

let outputMessage = "";

for (let index = 1; index <= limit; index++) {
  outputMessage += `${base} x ${index} = ${base * index}\n`;
}

outputMessage = headerMessage + outputMessage;

const outputPath = `outputs`;

fs.mkdirSync(outputPath, { recursive: true });
fs.writeFile(`${outputPath}/tabla-${base}.txt`, outputMessage, (error) => {
  if (error) {
    return new Error(`Ha ocurrido un error al crear el archivo`);
  }
  if (showTable) console.log(outputMessage);
});
