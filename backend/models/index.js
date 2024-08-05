const Atracao = require('./Atracao'); 
const Categoria = require('./Categoria');
const Destino = require('./Destino'); 
const DestinoImagem = require('./DestinoImagem'); 
const Estabelecimento = require('./Estabelecimento'); 
const AtracaoImagem = require('./AtracaoImagem'); 
const AtracaoEstabelecimento = require('./AtracaoEstabelecimento'); 
const AtracaoCategoria = require('./AtracaoCategoria'); 
const Estado = require('./Estado'); 

// Define os relacionamentos entre os modelos
Atracao.hasMany(AtracaoImagem, { foreignKey: 'atracao_id', as: 'imagens' });
Atracao.belongsToMany(Categoria, { through: AtracaoCategoria, foreignKey: 'atracao_id', as: 'categorias' });
Atracao.belongsToMany(Estabelecimento, { through: AtracaoEstabelecimento, foreignKey: 'atracao_id', as: 'estabelecimentos'});
Atracao.belongsTo(Destino, { foreignKey: 'destino_id' });

AtracaoImagem.belongsTo(Atracao, { foreignKey: 'atracao_id' });

Destino.hasMany(Atracao, { foreignKey: 'destino_id', as: 'atracoes'});
Destino.hasMany(DestinoImagem, { foreignKey: 'destino_id', as: 'imagens' });

DestinoImagem.belongsTo(Destino, { foreignKey: 'destino_id'} );

Categoria.belongsToMany(Atracao, { through: AtracaoCategoria, foreignKey: 'categoria_id' });
Estabelecimento.belongsToMany(Atracao, { through: AtracaoEstabelecimento, foreignKey: 'estabelecimento_id' });

module.exports = {
  Atracao,
  Categoria,
  Destino,
  DestinoImagem,
  Estabelecimento,
  AtracaoImagem,
  AtracaoEstabelecimento,
  AtracaoCategoria,
  Estado,
};
