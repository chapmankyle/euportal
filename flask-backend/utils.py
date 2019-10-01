"""
Util functions
"""

from passlib.hash import sha512_crypt

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