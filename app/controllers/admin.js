const { validationResult } = require('express-validator/check');

module.exports.formulario_inclusao_noticia = function(app, req, res) {
  res.render('admin/form_add_noticia', {validacao: {}, noticia : {}});
};

module.exports.noticias_salvar = function(app, req, res) {
  let noticia = req.body;

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.render('admin/form_add_noticia', {validacao : errors.array(), noticia : noticia });
    return;
  }

  let conn = app.config.dbConnection();
  let noticiasModel = new app.app.models.NoticiasDAO(conn)

  noticiasModel.salvarNoticia(noticia, (error, result) => {
    res.redirect('/noticias')
  })
};
