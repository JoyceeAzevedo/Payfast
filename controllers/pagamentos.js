

module.exports = function(app){


app.get('/pagamentos', function(req, res){
    console.log('recebida requisicao de teste na portinha 3000.')
    res.send ('OK');
     
  });

  app.post ('/pagamento/pagamento', function (req, res){

    let pagamento = req.body;
    console.log ('processando uma req de um novo pagamento');

    pagamento.status = "CRIADO";
    pagamento.data = new Date;


     res.send ('pagamento');        

  })
}