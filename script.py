DB_HOST = "ec2-184-73-198-174.compute-1.amazonaws.com"
DB_NAME = "d778unuru7gl7t"
DB_USER = "zkuqfpwfurgbxe"
DB_PASS = "dc2b34408de61a5baab4805577fcff6b49301b27d376887f10bc4ca643e4e669"

import psycopg2
import psycopg2.extras

from flask import Flask, redirect, url_for, request
app = Flask(__name__)

@app.route('/')
def success(name):
    conn = psycopg2.connect(dbname=DB_NAME, user=DB_USER, password=DB_PASS, host=DB_HOST)

    print("connected")
        #cur = conn.cursor(cursor_factory=psycopg2.extras.DictCursor)

        #cur.execute("CREATE TABLE student (id SERIAL PRIMARY KEY, name VARCHAR);")

        #cur.execute("INSERT INTO student (name) VALUES(%s)", ("Cristina",))

        #cur.execute("SELECT * FROM student;")

        #print(cur.fetchall())
    #with conn:
    #    with conn.cursor(cursor_factory=psycopg2.extras.DictCursor) as cur:
            #cur.execute("SELECT * FROM student WHERE id = %s;", (1,))

    #        cur.execute("SELECT * FROM student;")
    #        print(cur.fetchall())

            #print(cur.fetchone()['name'])

            #cur.execute("INSERT INTO student (name) VALUES(%s)", ("David",))

    #conn.commit()

    #cur.close()

    conn.close()
    return "asdasd"


if __name__ == '__main__':
   app.run(debug = True)