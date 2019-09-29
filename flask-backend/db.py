# Instance name:    modular-decoder-249913:us-central1:euportalsql
# Instance IP:      35.226.105.22
# Instance pswd:    rw344euportal
# gcloud: gcloud sql connect euportalsql --user=root --quiet
import mysql.connector
import time

try:
    connection = mysql.connector.connect(
        host='35.226.105.22', database='dummy', user='default', password='rw344euportal')
    if connection.is_connected():
        db_Info = connection.get_server_info()
        print("Connected to MySQL Server version ", db_Info)
except Exception as e:
    print("Error while connecting to MySQL", e)


def generate_session_id(name):
    return name + str(int(round(time.time() * 1000)))

def execute_query(query, query_info):
    cursor = connection.cursor()
    cursor.execute(query, query_info)
    connection.commit()
    cursor.close()

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


def edit_profile_details(firstname, surname, password, email, session):
    query = (
        "UPDATE customers SET firstname=%s, surname=%s, password=%s, email=%s WHERE session_id=%s")
    query_info = (firstname, surname, password, email, session)
    execute_query(query, query_info)
    print("Updated Profile Details")

def get_customer(session):
    query = ("SELECT * FROM customer WHERE session_id=%s")
    query_info = (session)
    execute_query(query, query_info)
    print("Updated Profile Details")


