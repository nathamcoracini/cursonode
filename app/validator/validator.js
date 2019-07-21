const { check } = require('express-validator/check');

exports.novaNoticia = [check('titulo','Título é obrigatório').not().isEmpty(),
check('resumo','Resumo é obrigatório').not().isEmpty(),
check('resumo','Resumo tem que ter entre 10 a 100 caracteres').isLength({ min: 10, max: 100 }),
check('autor','Autor é obrigatório').not().isEmpty(),
check('data_noticia','Data é obrigatório').not().isEmpty(),
check('noticia','Notícia é obrigatória').not().isEmpty()];
