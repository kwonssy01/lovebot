
module.exports = function() { 
	this.connection = require('mysql').createConnection({
                host : "aws-db.c15nddcrfkzn.ap-northeast-2.rds.amazonaws.com",
                port : 3306,
                user : "kwon",
                password : "12345678",
                database : "test"
	});
};
