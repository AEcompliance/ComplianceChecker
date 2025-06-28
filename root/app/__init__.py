from flask import Flask
from app.config import Config
from flask_mail import Mail
from dotenv import load_dotenv
import os
import secrets

mail = Mail()

def create_app(config_class=Config):
    app = Flask(__name__,
                static_folder='../static',
                template_folder='../templates')
    load_dotenv()

    # Email Configuration
    app.config['MAIL_SERVER'] = 'smtp.gmail.com'
    app.config['MAIL_PORT'] = 587
    app.config['MAIL_USE_TLS'] = True
    app.config['MAIL_USERNAME'] = os.getenv('MAIL_USERNAME')
    app.config['MAIL_PASSWORD'] = os.getenv('MAIL_PASSWORD')
    app.config['MAIL_DEFAULT_SENDER'] = os.getenv('MAIL_DEFAULT_SENDER')
    
    # Secret Key
    app.secret_key = os.getenv('SECRET_KEY') or secrets.token_hex(16)

    # Initialize Flask-Mail
    mail.init_app(app)

    # Register Blueprint
    from .routes import main
    app.register_blueprint(main)

    return app