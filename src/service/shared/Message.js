export default class Message {
    json = (message, req, res) => {
        return () => { res.json({message: message}); }
    };

    send = (message, req, res) => {
        return () => { res.send(message); }
    };

    constructor() {

    }
}
