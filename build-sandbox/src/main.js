class App {
        run = async (name = 'Andrew') => {
            console.log(`Hello ${name}`);
        }
}

const app = new App();
app.run()
    .then(() => console.log('DONE'))
    .catch(() => console.log('ERROR!'));
