from flask import jsonify

from services import *

def register_routes(app):

    @app.route("/api/prices")
    def prices():

        return jsonify(
            load_prices().to_dict(
                orient="records"
            )
        )

    @app.route("/api/events")
    def events():

        return jsonify(
            load_events().to_dict(
                orient="records"
            )
        )

    @app.route("/api/change-point")
    def change_point():

        return jsonify(
            load_summary().iloc[0].to_dict()
        )
