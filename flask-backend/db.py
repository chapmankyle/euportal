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
    """Generates a random session ID using a name and the current time."""
    return name + str(int(round(time.time() * 1000)))


def execute_query(query, query_info, return_data=False):
    """Executes a query into the database."""
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
    session = execute_query(query, query_info, True)
    if (session == []):
        query = (
            "SELECT session_id FROM staff WHERE email=%s AND password=%s")
        query_info = (email, password)
        session = execute_query(query, query_info, True)
        if (session == []):
            return ""
    return session[0][0]

def register_staff(name, password, email, _type):
    """Registers a staff member with all relevant details."""
    session = generate_session_id(name)
    query = ("INSERT INTO staff (name, password, email, type, session_id) VALUES (%s, %s, %s, %s, %s)")
    query_info = (name, password, email, _type, session)
    execute_query(query, query_info)
    print("Added new staff user to DB")
    return session


def register_customer(firstname, surname, password, email):
    """Registers a new customer."""
    session = generate_session_id(firstname)
    query = ("INSERT INTO customers (firstname, surname, password, email, session_id) VALUES (%s, %s, %s, %s, %s)")
    query_info = (firstname, surname, password, email, session)
    execute_query(query, query_info)
    print("Added new customer user to DB")
    return session


def register_product(name, description, price, stock):
    """Registers a new product and places it in the database."""
    query = ("INSERT INTO products (name, description, price, stock) VALUES (%s, %s, %s, %s)")
    query_info = (name, description, price, stock)
    execute_query(query, query_info)
    print("Added new product to DB")


def get_customer(session):
    """Gets a customer from the database using the session ID."""
    query = ("SELECT * FROM customers WHERE session_id like \"%s\"" %session )
    query_info = session
    data = execute_query(query, query_info, True)
    print("Getting Customer")
    if data:
        return data[0]
    else:
        return False


def get_product(name):
    """Gets a product by name."""
    query = ("SELECT * FROM products WHERE name=%s")
    query_info = (name)
    data = execute_query(query, query_info, True)
    print("Retrieved product")
    return data


def update_customer(firstname, surname, password, email, session):
    """Updates the details of a specified customer using their session ID."""
    query = ("UPDATE customers SET firstname=%s, surname=%s, password=%s, email=%s WHERE session_id like %s")
    query_info = (firstname, surname, password, email, session)
    execute_query(query, query_info)
    print("Updating Customer")
    return get_customer(session)


def delete_customer(session):
    query = (
        "DELETE FROM customers WHERE session_id=\"%s\"" % session)
    query_info = (session)
    execute_query(query, query_info)
    print("Deleted customer")
    return True

def delete_product(product_id):
    query = (
        "DELETE FROM products WHERE product_id=\"%s\"" % product_id)
    query_info = (product_id)
    execute_query(query, query_info)
    print("Deleted product with id %s" % product_id)
    return True


def get_products():
    query = ("SELECT * FROM products")
    query_info = ()
    data = execute_query(query, query_info, True)
    print("Getting Products")
    if data:
        return data
    else:
        return False

def get_product_id(id):
    query = ("SELECT * FROM products WHERE product_id=\"%d\"" % id)
    query_info = ()
    data = execute_query(query, query_info, True)
    print("Getting Single Product with id")
    if data:
        return data[0]
    else:
        return False
def update_product(name, description, price, stock):
    """Updates the details of a specified product."""
    query = ("UPDATE products SET name=%s, description=%s, price=%s, stock=%s")
    query_info = (name, description, price, stock)
    execute_query(query, query_info)
    print("Updating product")
    return get_product(name)


def delete_product(name):
    """Deletes a specified product."""
    query = ("DELETE FROM products WHERE name=%s")
    query_info = (name)
    execute_query(query, query_info)
    print("Deleted product")
