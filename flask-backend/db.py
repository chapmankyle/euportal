# Instance name:    modular-decoder-249913:us-central1:euportalsql
# Instance IP:      35.226.105.22
# Instance pswd:    rw344euportal
# gcloud: gcloud sql connect euportalsql --user=root --quiet
import mysql.connector
import time
import json

try:
    connection = mysql.connector.connect(
        host='35.226.105.22', database='dummy', user='default', password='rw344euportal', autocommit=True)
    if connection.is_connected():
        db_Info = connection.get_server_info()
        print("Connected to MySQL Server version ", db_Info)
        connection.autocommit(True)
except Exception as e:
    print("Error while connecting to MySQL", e)


def generate_session_id(name):
    return name + str(int(round(time.time() * 1000)))

def execute_query(query, query_info, return_data=False):
    data = None
    cursor = connection.cursor(buffered=True)
    cursor.execute(query, query_info)
    if return_data:
        data = cursor.fetchall()  
    connection.commit()
    cursor.close()
    return data

def login_user(email, password):
    query = (
        "SELECT session_id FROM customers WHERE email=%s AND password=%s")
    query_info = (email, password)
    session = execute_query(query, query_info)
    if (session == []):
        return ""
    return str(session[0][0])

def register_staff(name, password, email, _type):
    session = generate_session_id(name)
    query = (
        "INSERT INTO staff (name, password, email, type, session_id) VALUES (%s, %s, %s, %s, %s)")
    query_info = (name, password, email, _type, session)
    execute_query(query, query_info)
    print("Added new staff user to DB")
    return session

def register_customer(firstname, surname, password, email):
    session = generate_session_id(firstname)
    query = (
        "INSERT INTO customers (firstname, surname, password, email, session_id) VALUES (%s, %s, %s, %s, %s)")
    query_info = (firstname, surname, password, email, session)
    execute_query(query, query_info)
    print("Added new customer user to DB")
    return session

def get_customer(session):
    query = ("SELECT * FROM customers WHERE session_id like \"%s\"" %session )
    query_info = session
    data = execute_query(query, query_info, True)
    print("Getting Customer")
    return data

def update_customer(firstname, surname, password, email, session):
    query = 'UPDATE customers SET firstname=%s, surname=%s, password=%s, email=%s WHERE session_id like %s' 
    query_info = (firstname, surname, password, email, session)
    execute_query(query, query_info)
    print("Updating Customer")
    return get_customer(session)


