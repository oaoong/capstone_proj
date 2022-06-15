from flask import Blueprint, Flask, request, make_response, jsonify, render_template
from bson.json_util import dumps
from bson.objectid import ObjectId
from flask_pymongo import pymongo
from sympy import true
from flaskserver.server import db
import serial
import time

serialcom = serial.Serial('COM4', 9600)
serialcom.timeout = 1

arduino_api = Blueprint('arduino',__name__, url_prefix='/api/arduino')

def car():
    serialcom.write(str('car').encode())
    
def child():
	serialcom.write(str('child').encode())

@arduino_api.route('/',methods=["GET"])
def arduino_page():
    data = list(db.arduino.find())
    for alert in data:
        if(alert['data']['contents'] == '과속'):
            car()
            print('과속 알림')
        elif(alert['data']['contents'] == '보행자주의'):
            child()
            print('보행자주의 알림')
        db.arduino.delete_one({"_id":ObjectId(alert['_id'])})
        
    if (data != None):
        return jsonify({'success': True})
    else:
        return jsonify({'success': False})

@arduino_api.route('/register')
def arduino_register():
    return "arduino registered"

