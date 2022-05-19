from flask import Blueprint
from flask_pymongo import pymongo
from flaskserver.server import db


rasberry_api = Blueprint('rasberry',__name__, url_prefix='/api/rasberry')

@rasberry_api.route('/')
def rasberry_page():
    # db.rasberry_collection.insert_one({'success':True})
    print(db)
    return 'welcome to rasberry page'

@rasberry_api.route('/register')
def rasberry_register():
    return "rasberry registered"

