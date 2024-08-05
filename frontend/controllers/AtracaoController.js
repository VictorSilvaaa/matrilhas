export default class AtracaoController {
    static async index(req, res) {
        const id = req.params.id;
        res.render('atracao', {id});
    }
}


