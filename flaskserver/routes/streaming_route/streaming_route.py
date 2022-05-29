from asyncio.windows_events import NULL
from flask import Blueprint, Flask, request, make_response, jsonify
from bson.json_util import dumps
from bson.objectid import ObjectId
from flask_pymongo import pymongo
from sympy import true
from flaskserver.server import db

streaming_api = Blueprint('streaming',__name__, url_prefix='/api/streaming')

@streaming_api.route('/')
def streaming_page():
    # db.streaming_collection.insert_one({'success':True})
    return 'welcome to streaming page'

@streaming_api.route('/getAddress',methods=["GET"])
def getAddress():
    data = list(db.streaming.find_one({"address":"http://192.168.0.69:8090"}).values())
    print(data)
    
    if (data != NULL):
        return jsonify({'body': dumps(data)})
    
    else:
        return 'error to get address'
    
@streaming_api.route('/getAlerts',methods=["GET"])
def getAlerts():
    data = list(db.info.find())
    data = sorted(data, key=lambda x : x['_id'])
    print(data)
    
    if (data != NULL):
        return jsonify({'alerts': dumps(data)})
    else:
        return 'error to get alerts'
    
@streaming_api.route('/removeAlerts/<alert_id>',methods=["POST"])
def removeAlerts(alert_id):
    print(alert_id)
    db.info.delete_one({"_id":ObjectId(alert_id)})
    return jsonify({'success': True})
    
@streaming_api.route('/getContents',methods=["GET"])
def getContents():
    result = db.statistics.aggregate([{'$group': {'_id': '$data.contents', 'total': {'$sum': 1}}}])
    result = sorted(result, key=lambda x : x['total'])
    if (result != NULL):
        return jsonify({'contents': dumps(result, ensure_ascii = False)})
    else:
        return 'error to get contents'
    
@streaming_api.route('/getMonth',methods=["GET"])
def getMonth():
    result = db.statistics.aggregate([{"$project": { "formattedRegDate": { "$dateToString": {"format":"%Y-%m", "date":'$data.timestamp'}} } }, {"$group":{"_id":"$formattedRegDate", "count":{"$sum":1}}}])
    result = sorted(result, key=lambda x : x['_id'])
    if (result != NULL):
        return jsonify({'month': dumps(result, ensure_ascii = False)})
    else:
        return 'error to get month'
