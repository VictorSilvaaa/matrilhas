const { Atracao, AtracaoImagem, AtracaoEstabelecimento, Estabelecimento, Categoria, AtracaoCategoria } = require('../models');

// Obtém todas as atrações
exports.getAllAttractions = async (req, res) => {
  try {
    const atracoes = await Atracao.findAll({
      include: [
        { model: AtracaoImagem, as: 'imagens' },
      ]
    });
    res.json(atracoes);
  } catch (error) {
    res.status(500).json({ erro: error});
  }
};

// Obtém uma atração pelo ID
exports.getAttractionById = async (req, res) => {
  try {
    const atracao = await Atracao.findByPk(req.params.id, {
      include: [
        { model: AtracaoImagem, as: 'imagens' },
        { model: Categoria, as: 'categorias' },
        { model: Estabelecimento, as: 'estabelecimentos' }
      ]
    });
    if (atracao) {
      res.json(atracao);
    } else {
      res.status(404).json({ error: 'Atração não encontrada' });
    }
  } catch (error) {
    res.status(500).json(error);
    //res.status(500).json({ error: 'Erro ao obter a atração' });
  }
};
