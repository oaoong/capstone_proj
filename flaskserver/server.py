from flask import Flask, render_template, jsonify, request
from flask_cors import CORS
from flask_pymongo import pymongo
from .config.dev import mongoURI

app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})

client = pymongo.MongoClient(mongoURI)
db = client.get_database('flask_mongodb_atlas')
# user_collection = pymongo.collection.Collection(db, 'user_collection')

@app.route('/')
def flask_mongodb_atlas():
    db.access.insert_one({"success": True})
    return "Connected to the data base!"

if __name__ == '__main__':
    from .routes.streaming_route.streaming_route import streaming_api
    from .routes.rasberry_route.rasberry_route import rasberry_api
    from .routes.arduino_route.arduino_route import arduino_api
    app.register_blueprint(streaming_api)
    app.register_blueprint(rasberry_api)
    app.register_blueprint(arduino_api)
    app.run()
