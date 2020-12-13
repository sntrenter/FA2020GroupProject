import os
import sys
from flask import Flask, render_template, flash, request, redirect, url_for
from flask_wtf import Form
from wtforms import TextField, TextAreaField, validators, StringField, SubmitField, SelectField, FileField, BooleanField
from werkzeug.utils import secure_filename
import mysql.connector
import datetime

app = Flask(__name__)
app.config.from_object(__name__)
app.config['SECRET_KEY'] = '03948nn3498cnb34095c734n597'
app.config['MYSQL_HOST'] = 'derekjsmith.mysql.pythonanywhere-services.com'
app.config['MYSQL_USER'] = 'derekjsmith'
app.config['MYSQL_PASSWORD'] = 'abcde12345'
app.config['MYSQL_DB'] = 'derekjsmith$default'

@app.route('/', methods=['GET','POST'])
@app.route('/index', methods=['GET','POST'])
def index():
    if request.method=='GET' and 'feelings' in request.args and 'sleep' in request.args and 'symptoms' in request.args and 'time' in request.args:
        try:
            identifier = 1111111111
            feelings = request.args['feelings']
            sleep = request.args['sleep']
            symptoms = request.args['symptoms']
            time = request.args['time']
            cnx = mysql.connector.connect(user='derekjsmith',database='derekjsmith$default',host='derekjsmith.mysql.pythonanywhere-services.com',password='abcde12345')
            cursor = cnx.cursor()
            query = "INSERT INTO CS5500 (id,feelings,sleep,symptoms,time) VALUES ('%d','%s','%s','%s','%s')" % (identifier,feelings,sleep,symptoms,time)
            cursor.execute(query)
            cnx.commit()
            cursor.close()
        except Exception as e:
            return '''<html><head></head><body>Error.</body></html>'''
        return '''<html><head></head><body>Database updated.</body></html>'''
    elif request.method=='POST':
        try:
            json = request.get_json(force=True)
            cnx = mysql.connector.connect(user='derekjsmith',database='derekjsmith$default',host='derekjsmith.mysql.pythonanywhere-services.com',password='abcde12345')
            cursor = cnx.cursor()
            query = "INSERT INTO json (data) VALUES ('%s')" % (json)
            cursor.execute(query)
            cnx.commit()
            cursor.close()
        except Exception as e:
            return '''<html><head></head><body>Error.</body></html>'''
    return '''<html><head></head><body>No get request.</body></html>'''

