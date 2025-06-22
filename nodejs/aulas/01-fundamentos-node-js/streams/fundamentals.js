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

import { Readable } from 'node:stream';

class OneToHundredStream extends Readable {
  index = 1

  _read() {
    const i = this.index++

    setTimeout(() => {
      if (i > 100) {
        this.push(null);
      } else {
        const buf = Buffer.from(String(i))

        this.push(buf)
      }
    }, 1000);
  }
}


new OneToHundredStream()
  .pipe(process.stdout)


/*
process.stdin
    .pipe(process.stdout) */