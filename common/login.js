const client = require('./client')

// 查询数据
function login(username,password,res){
  let sql = "select * from login where username='"+username+"'"
  let password1 = password
  client.query(sql,function (error, results) {
    if (results[0].password == password1){
      res.send(username)
    }
    res.send('fail') 
  });
}
module.exports = login