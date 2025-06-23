// Netflix & Spotify

// Importação de clientes via CSV (Excel)
// 1Gb - 1.000.000 de linhas
// POST /upload import.csv

//10Mb/s - 100s

// 1.000.000 / 100 = 10.000 linhas/s

// 10mb/s -> 10.000

/// Readable Streams / Writable Streams

// stdin => Lê dados do terminal
// stdout => Escreve dados no terminal

// Streams -->

import { Readable, Writable, Transform } from "node:stream";

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

class InverseNumberStreamTransform extends Transform {
  _transform(chunk, encoding, callback) {
    const transformed = Number(chunk.toString()) * -1;
    callback(null, Buffer.from(String(transformed)));
  }
}

class MultiplyByTenStream extends Writable {
  _write(chunk, encoding, callback) {
    console.log(Number(chunk.toString()) * 10);
    callback(); // Indica que o dado foi processado
  }
}

new OneToHundredStream()
  .pipe(new InverseNumberStreamTransform())
  .pipe(new MultiplyByTenStream());
