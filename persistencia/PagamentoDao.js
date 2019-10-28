function PagamentoDao (connection){
    this._connection = connection;
}

PagamentoDao.prototype.salva = function(pagamento,callback){
  this._connection.query('INSERT INTO pagamento SET', paga )

}

PagamentoDao.prototype.lista = function (callback){
  this._connection.query('select * from pagamentos', callback)

}

PagamentoDao.prototype.lista = function (callback){
    this._connection.query('select * from pagamentos', callback)
  
  }

  PagamentoDao.prototype.buscarPorId = function (callback){
    this._connection.query("select * from pagamento where id ")
  
  }