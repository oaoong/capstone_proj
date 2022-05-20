from asyncio.windows_events import NULL
from flask import Blueprint, Flask, request, make_response, jsonify
from bson.json_util import dumps
from bson.objectid import ObjectId
from flask_pymongo import pymongo
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
    print(data)
    
    if (data != NULL):
        return jsonify({'alerts': dumps(data)})
    else:
        return 'error to get alerts'
    
@streaming_api.route('/removeAlerts/<alert_id>',methods=["POST"])
def removeAlerts(alert_id):
    print(alert_id)
    db.info.delete_one({"_id":ObjectId(alert_id)})

#get_streaming_video
# get_streaming_info
# get_alert_info
# get_statistics_info
