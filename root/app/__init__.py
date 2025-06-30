from flask import Flask
from dotenv import load_dotenv
import os
import secrets


def create_app(config_class=Config):
    app = Flask(__name__,
                static_folder='../static',
                template_folder='../templates')
    load_dotenv()
    
    # Secret Key
    app.secret_key = os.getenv('SECRET_KEY') or secrets.token_hex(16)

    # Register Blueprint
    from .routes import main
    app.register_blueprint(main)

    return app
