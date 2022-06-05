import Db from "./DbServices";

const DB_EXEC = Db.getConnection();

export const getItens  = async ()=>{
  let results = await DB_EXEC(` select * from  tbtreinos `);
  return results.rows._array;
};

export const insertItens = async (params)=>{
  let results = await DB_EXEC(`INSERT INTO tbtreinos (data_exercicio, descricao_exercicio, tempo_exercicio, peso)
  values(?,?,?,?)`,[params.data_exercicio, params.descricao_exercicio, params.tempo_exercicio ]);
  return results.rowsAffected;
};
