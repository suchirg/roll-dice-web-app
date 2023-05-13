import ajax_app
import flask

@ajax_app.app.route("/")
def index():
    return flask.render_template("index.html")