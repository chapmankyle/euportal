# Instance name: modular-decoder-249913:us-central1:euportalsql
# Instance pswd: rw344euportal
import MySQLdb

conn = MySQLdb.connect(host=host, user=user, passwd=passwd, db=db)
cursor = conn.cursor()

# cursor.execute('SELECT COUNT(MemberID) as count FROM Members WHERE id = 1')
# row = cursor.fetchone()
# conn.close()
# print(row)