from flask import Blueprint
from flask_pymongo import pymongo
from flaskserver.server import db

arduino_api = Blueprint('arduino',__name__, url_prefix='/api/arduino')

@arduino_api.route('/')
def arduino_page():
    # db.arduino_collection.insert_one({'success':True})
    print(db)
    return 'welcome to arduino page'

@arduino_api.route('/register')
def arduino_register():
    return "arduino registered"

