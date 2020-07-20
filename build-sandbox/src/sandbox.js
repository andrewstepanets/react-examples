
class App {
        run = async (name = 'Andrew') => {
            console.log(`Hello ${name}`);
            console.log([1,2,[2,3]].flat());
            
        };
}

const app = new App();
app.run()
    .then(() => console.log('DONE'))
    .catch(() => console.log('ERROR!'));
