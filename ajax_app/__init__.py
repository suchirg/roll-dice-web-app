import flask

app = flask.Flask(__name__) # create WSGI app w/ name "ajax_app"

import ajax_app.routes.api
import ajax_app.routes.views
