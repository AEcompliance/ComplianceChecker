from flask import Blueprint, render_template, request, flash, redirect, url_for
from flask_mail import Mail, Message
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail as SendGridMail
import os

# Create the Blueprint
main = Blueprint('main', __name__)

# Move mail configuration to __init__.py
mail = Mail()

@main.route('/')
def home():
    return render_template('home.html', title='Home')

@main.route('/contact')
def contact():
    return render_template('contact.html', title='Contact')

# Move send_email to the Blueprint
@main.route('/send_email', methods=['POST'])
def send_email():
    try:
        # Get form data
        name = request.form.get('name')
        organization = request.form.get('organization')
        email = request.form.get('email')
        subject = request.form.get('subject')
        message_text = request.form.get('message')

        # Create email content
        email_content = f"""
        New Contact Form Submission
        
        From: {name}
        Organization: {organization}
        Email: {email}
        Subject: {subject}
        
        Message:
        {message_text}
        """

        message = SendGridMail(
            from_email=os.getenv('MAIL_DEFAULT_SENDER'),
            to_emails='info@compliance-checker.org',
            subject=f'Contact Form: {subject}',
            plain_text_content=email_content
        )
        sg = SendGridAPIClient(os.getenv('SENDGRID_API_KEY'))
        sg.send(message)
         
        flash('Your message has been sent successfully!', 'success')

    except Exception as e:
        flash('There was an error sending your message. Please try again or send an e-mail to info@compliance-checker.org', 'error')
        print(str(e))
    
    return redirect(url_for('main.contact'))