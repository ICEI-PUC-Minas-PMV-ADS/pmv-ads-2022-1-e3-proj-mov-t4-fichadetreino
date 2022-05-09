import * as SQLite from 'expo-sqlite';

const Db = {
  getConnection: ()=>{
    const db = SQLite.openDatabase('ficha_de_treino.db');
    // o db recebe parametros e faz algo com eles nessa transacao;
    try {
      db.transaction((tx)=>{
        tx.executeSql(
          ' create table if not exists tbtreinos (id integer primary key not null, data_exercicio int not null, descricao_exercicio text not null, tempo_exercicio integer not null,peso integer ); '
          );
      })
    } catch (error) {
      console.log(error);
    }

    const executeQuery = async (sql, params = [])=>{
      new Promise ((resolve,reject) =>{
          db.transaction((trans)=>{
            tx.executeSql(
              sql,
              params,
              (trans,result) => {
                resolve(result);
              },
              (error) => {
                reject(error);
              }
              )

          })

      })
      return executeQuery;
    }


  }

}

export default Db;
