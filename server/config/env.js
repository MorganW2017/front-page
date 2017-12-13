// LOCAL DEV VARIABLES
let env = {
	NODE_ENV: 'development',
	PORT: 3000,
	DBPROTOCOL: 'mongodb',
	DBUSERNAME: 'admin',
	DBPASSWORD: 'setcheese4',
	DBHOST: 'ds259855.mlab.com:59855',
	DBNAME: 'primary-db',
	SERVERNAME: 'Primary DB'
}
Object.keys(env).forEach(v => {
	process.env[v] = process.env[v] || env[v]
}) 

env.CONNECTIONSTRING = `${env.DBPROTOCOL}://${env.DBUSERNAME}:${env.DBPASSWORD}@${env.DBHOST}/${env.DBNAME}`
process.env.CONNECTIONSTRING = env.CONNECTIONSTRING

exports = env
