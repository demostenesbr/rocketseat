// client.js
import { Readable } from "node:stream";
import fetch from 'node-fetch'; // Se estiver em Node < 18

class OneToHundredStream extends Readable {
  index = 1;

  _read() {
    const i = this.index++;

    setTimeout(() => {
      if (i > 5) {
        this.push(null); // Fim da stream
      } else {
        const buffer = Buffer.from(String(i));
        console.log("Enviando:", i);
        this.push(buffer);
      }
    }, 100); // Reduzido para testes mais rápidos
  }
}

fetch("http://localhost:3334", {
  method: "POST",
  body: new OneToHundredStream(),
}).then(response => {
    return response.text();
}).then(data => {
    console.log(data);
});
