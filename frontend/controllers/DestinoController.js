export default class DestinoController {
    static async index(req, res) {
        const id = req.params.id;
        res.render('destino', {id});
    }
}


