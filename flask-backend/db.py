# Instance name:    modular-decoder-249913:us-central1:euportalsql
# Instance IP:      35.226.105.22
# Instance pswd:    rw344euportal
# gcloud: gcloud sql connect euportalsql --user=root --quiet
import mysql.connector
from mysql.connector import Error

try:
    connection = mysql.connector.connect(host='35.226.105.22', database='dummy', user='default', password='rw344euportal')
    if connection.is_connected():
        db_Info = connection.get_server_info()
        print("Connected to MySQL Server version ", db_Info)
except Error as e:
    print("Error while connecting to MySQL", e)

def register_staff(name, password, email, _type, session):
    cursor = connection.cursor()
    add_staff = ("INSERT INTO staff (name, password, email, type, session_id) VALUES (%s, %s, %s, %s, %s)")
    staff_info = (name, password, email, _type, session)
    cursor.execute(add_staff, staff_info)
    connection.commit()
    cursor.close()
    print("Added new staff user to DB")

def register_customer(firstname, surname, password, email, session):
    cursor = connection.cursor()
    add_customer = ("INSERT INTO customers (firstname, surname, password, email, session_id) VALUES (%s, %s, %s, %s, %s)")
    customer_info = (firstname, surname, password, email, session)
    cursor.execute(add_customer, customer_info)
    connection.commit()
    cursor.close()
    print("Added new customer user to DB")
