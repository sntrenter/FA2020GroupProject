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
app.config['SECRET_KEY'] = '?????????????????'
app.config['MYSQL_HOST'] = '?'
app.config['MYSQL_USER'] = '?'
app.config['MYSQL_PASSWORD'] = '?'
app.config['MYSQL_DB'] = '?'

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
            cnx = mysql.connector.connect(user='?',database='?',host='?',password='?')
            cursor = cnx.cursor()
            query = "INSERT INTO CS5500 (id,feelings,sleep,symptoms,time) VALUES ('%d','%s','%s','%s','%s')" % (identifier,feelings,sleep,symptoms,time)
            cursor.execute(query)
            cnx.commit()
            cursor.close()
        except Exception as e:
            return '''<html><head></head><body>Error.</body></html>'''
        return '''<html><head></head><body>Database updated.</body></html>'''
    return '''<html><head></head><body>No get request.</body></html>'''

