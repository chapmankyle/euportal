"""
Util functions
"""

from passlib.hash import sha512_crypt
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail
from datetime import date, datetime
from email_template import *

url = 'http://localhost:5000'


def get_password_hash(password, salt='THESALTISsaltyLi', rounds=99999):
    """
    used to obtain a users password hash, since password should not be stored in
    the database explicitly this function makes use of the sha512_crypt algorithm
    to make hashes with the default rounds.
    """
    return sha512_crypt.encrypt(password, salt=salt, rounds=rounds)


def get_password_verification(passwordhash, password):
    """
    used when the user is loging in or when the user is attemping to change the
    password. this function should be used by any function that wants to verify
    a user password given a user password hash
    """
    return sha512_crypt.verify(password, passwordhash)


def send_reset_password_email(toemail, fromemail='resetpassword@euportal.com'):
    """
    used when the user is loging in or when the user is attemping to change the
    password. this function should be used by any function that wants to verify
    a user password given a user password hash
    """
    subject = 'Password Changed'
    htmlcontent = get_reset_password_email_content()
    __send_email(fromemail, toemail, subject, htmlcontent)


def send_forgot_password_email(toemail, token, fromemail='forgotpassword@euportal.com'):
    """
    used to send account verification email to the user. This function is call
    only when the user needs to reset his/her password after loosing it.
    """
    verification_link = url + '/set-new-password/' + token
    subject = 'Forgot Password'
    htmlcontent = get_forgot_password_email_content(verification_link)
    __send_email(fromemail, toemail, subject, htmlcontent)


def send_account_verification_email(to_email, token, from_email='verifyaccount@euportal.com'):
    """
    used to send account verification email to the user. this function is used only once,
    this is when a user is creating an account for the first time.
    """
    verification_link = url + '/confirm-email/'+token
    subject = 'Account Verification'
    htmlcontent = get_verification_email_content(verification_link)
    __send_email(from_email, to_email, subject, htmlcontent)


def __send_email(fromemail, toemail, subject, htmlcontent):
    msg = Mail(
        from_email=fromemail,
        to_emails=toemail,
        subject=subject,
        html_content=htmlcontent
    )
    try:
        sg = SendGridAPIClient(
            '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')
        response = sg.send(msg)
    except Exception as e:
        print(e)
