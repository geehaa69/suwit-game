from flask import Flask
from .views import view


def create_app():
    # create app
    app = Flask(__name__)
    app.config['SECRET_KEY'] = 'ns@ha;ppskas8asha'

    # register our route
    app.register_blueprint(view, url_prefix='/')

    # return the app to the browser
    return app