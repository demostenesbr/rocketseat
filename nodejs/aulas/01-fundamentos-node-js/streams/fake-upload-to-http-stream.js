import { Readable } from "node:stream";

class OneToHundredStream extends Readable {
  index = 1;

  _read() {
    const i = this.index++;

    setTimeout(() => {
      if (i > 100) {
        this.push(null); // Indica que não há mais dados
      } else {
        const buffer = Buffer.from(String(i));

        this.push(buffer); // Envia o dado para o próximo stream
      }
    }, 1000); // Simula um atraso de 1 segundo
  }
}

fetch("http://localhost:3334", {
  method: "POST",
  body: new OneToHundredStream(),
})