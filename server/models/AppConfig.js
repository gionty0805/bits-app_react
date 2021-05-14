var mysql = require('mysql');
var dbconfig   = require('../routes/dbConnection.js');
var connection = mysql.createConnection(dbconfig);
connection.connect();

module.exports = {
  getList : function (){
    return new Promise ((resolve,reject) =>{
      connection.query(
        "select id,service_name,type,title,contents,flag,DATE_FORMAT(start_dt, '%Y-%m-%d %H:%i') as start_dt,DATE_FORMAT(end_dt, '%Y-%m-%d %H:%i') as end_dt,DATE_FORMAT(created_dt, '%Y-%m-%d %H:%i') as created_dt,DATE_FORMAT(updated_dt, '%Y-%m-%d %H:%i') as updated_dt from hyeban_notice order by id desc", function(err, results, fields){
        if(err){
          console.log(err);
          reject(err);
        }
        else {
          resolve(results);
        }
      });
    });
    connection.end();
  },
  saveData : function (m_id,m_type,m_service_name,m_title,m_contents,m_flag,m_start_dt,m_end_dt){
    var sql = '';
    if(m_id==''){
      sql += ' insert into hyeban_notice (service_name,type,title,contents,flag,created_dt,start_dt,end_dt) ';
      sql += " values ('"+m_service_name+"','"+m_type+"','"+m_title+"','"+m_contents+"','"+m_flag+"',sysdate(),'"+m_start_dt+"','"+m_end_dt+"') ";
    }
    else {
      sql += ' update hyeban_notice set ';
      sql += " type = '"+m_type+"',";
      sql += " service_name = '"+m_service_name+"',";
      sql += " title = '"+m_title+"',";
      sql += " contents = '"+m_contents+"',";
      sql += " flag = '"+m_flag+"',";
      sql += " start_dt = '"+m_start_dt+"',";
      sql += " end_dt = '"+m_end_dt+"',";
      sql += " updated_dt = sysdate()";
      sql += " where id = "+m_id+"";
    }
    return new Promise ((resolve,reject) =>{
      connection.query(sql, function(err, results, fields){
        if(err){
          console.log(err);
          reject(err);
        }
        else {
          resolve(results);
        }
      });
    });
    connection.end();
  },
  deleteData : function (m_id){
    var sql = '';
      sql += " delete from hyeban_notice where id = "+m_id+"";
    return new Promise ((resolve,reject) =>{
      connection.query(sql, function(err, results, fields){
        if(err){
          console.log(err);
          reject(err);
        }
        else {
          resolve(results);
        }
      });
    });
    connection.end();
  },
  userView : function (id){
    return new Promise ((resolve,reject) =>{
      connection.query(
        "select id,service_name,type,title,contents,flag,DATE_FORMAT(start_dt, '%Y-%m-%d %H:%i') as start_dt,DATE_FORMAT(end_dt, '%Y-%m-%d %H:%i') as end_dt,DATE_FORMAT(created_dt, '%Y-%m-%d %H:%i') as created_dt,DATE_FORMAT(updated_dt, '%Y-%m-%d %H:%i') as updated_dt from hyeban_notice where id="+id+" order by id desc", function(err, results, fields){
        if(err){
          console.log(err);
          reject(err);
        }
        else {
          resolve(results);
        }
      });
    });
    connection.end();
  },
  getQueryList : function (query){
    return new Promise ((resolve,reject) =>{
      connection.query(
        ""+query, function(err, results, fields){
        if(err){
          console.log(err);
          reject(err);
        }
        else {
          resolve([results,fields]);
        }
      });
    });
    connection.end();
  }
}
