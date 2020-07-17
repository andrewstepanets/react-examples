class App {
    constructor(){
        this.run = (name = 'Andrew') => {
            console.log(`Hello ${name}`);
        }
    }
    
}

const app = new App();
app.run();