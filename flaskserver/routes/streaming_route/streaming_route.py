from asyncio.windows_events import NULL
from flask import Blueprint, Flask, request, make_response, jsonify
from bson.json_util import dumps
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
    

#get_streaming_video
# get_streaming_info
# get_alert_info
# get_statistics_info
