import ajax_app
import random
from flask import jsonify

@ajax_app.app.route("/api/get_dice_roll/")
def dice_roll():
    """Return a JSONified RNG between 1 and 6, inclusive."""
    data = {"roll": random.randint(1, 6)}
    return jsonify(data)
