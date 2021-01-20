const client = require('./client')

//查询所有数据

// 查询数据
function selectBy(sql,res){
  client.query(sql,function (error, results) {
    if (error){
      console.log('[SELECT ERROR] - ',error.message);
      return;
    }
    // console.log(results[0])
    console.log(results[0])
    res.send(results[0])
  });
}
// 插入一条数据
function insertData(sql,addSqlParams){
  client.query(sql,addSqlParams,function (error, results) {
    if (error){
      console.log('[INSERT ERROR] - ',error.message);
      return;
    }
    console.log('The solution is: ', results[0].password);
  });
}

/**
 * 更新一条数据
 * @param {*} table 数据表名
 * @param {*} sets 更新字段
 * @param {*} where 限制条件
 */
function updateData(){

}

// 删除一条数据
function deleteData(){

}
module.exports = {
  // selectAll,
  selectBy,
  insertData,
  deleteData,
  updateData,
}