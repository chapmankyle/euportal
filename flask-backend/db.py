# Instance name:    modular-decoder-249913:us-central1:euportalsql
# Instance IP:      35.226.105.22
# Instance pswd:    rw344euportal
# gcloud: gcloud sql connect euportalsql --user=root --quiet
import mysql.connector
import time

try:
    connection = mysql.connector.connect(host='35.226.105.22', database='dummy', user='default', password='rw344euportal')
    if connection.is_connected():
        db_Info = connection.get_server_info()
        print("Connected to MySQL Server version ", db_Info)
except Exception as e:
    print("Error while connecting to MySQL", e)

def generate_session_id(name):
    return name + str(int(round(time.time() * 1000)))

def register_staff(name, password, email, _type):
    cursor = connection.cursor()
    session = generate_session_id(name)
    add_staff = ("INSERT INTO staff (name, password, email, type, session_id) VALUES (%s, %s, %s, %s, %s)")
    staff_info = (name, password, email, _type, session)
    cursor.execute(add_staff, staff_info)
    connection.commit()
    cursor.close()
    print("Added new staff user to DB")

def register_customer(firstname, surname, password, email):
    cursor = connection.cursor()
    session = generate_session_id(firstname)
    add_customer = ("INSERT INTO customers (firstname, surname, password, email, session_id) VALUES (%s, %s, %s, %s, %s)")
    customer_info = (firstname, surname, password, email, session)
    cursor.execute(add_customer, customer_info)
    connection.commit()
    cursor.close()
    print("Added new customer user to DB")
