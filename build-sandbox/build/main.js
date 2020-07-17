"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class App {
  constructor() {
    _defineProperty(this, "run", async (name = 'Andrew') => {
      console.log(`Hello ${name}`);
    });
  }

}

const app = new App();
app.run().then(() => console.log('DONE')).catch(() => console.log('ERROR!'));