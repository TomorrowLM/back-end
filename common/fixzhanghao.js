const client = require('./client')
// let oldzhanghao = "select * from login where username='" + username.oldzhanghao + "'"
// 查询数据
function fixzhanghao(username, res) {
  let oldzhanghao = "select * from login where username='" + username.newzhanghao + "'"
  let newzhanghao = "update login set username='" + username.newzhanghao + "' where username='" + username.oldzhanghao + "'"
  client.query(oldzhanghao, function (error, results) {
    if(!results){
      client.query(newzhanghao, function (error, results) {
        console.log(results)
        res.send('success')
      });
    }
    res.send('fail')
  });
}
module.exports = fixzhanghao