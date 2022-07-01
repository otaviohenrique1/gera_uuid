const uuid = require('uuid');

function gera_lista_uuid_v4(quantidade) {
  let lista_uuid_v4 = [];
  for (let index = 0; index < quantidade; index++) {
    lista_uuid_v4.push(uuid.v4());
  }
  return lista_uuid_v4;
}

function exibe_lista_resultado(quantidade) {
  let lista_resultado = gera_lista_uuid_v4(quantidade);
  lista_resultado.forEach((item, index) => {
    console.log(item);
  })
}

exibe_lista_resultado(3);
