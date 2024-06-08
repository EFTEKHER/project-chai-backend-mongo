import json
import base64
import hmac
import hashlib
import random
import string
import time

def base64url_encode(data):
    return base64.urlsafe_b64encode(data).rstrip(b'=').decode('utf-8')

def create_random_jwt(secret_key):
    # Create Header
    header = {"alg": "HS256", "typ": "JWT"}
    header_json = json.dumps(header, separators=(',', ':')).encode('utf-8')
    header_b64 = base64url_encode(header_json)

    # Create Payload with random data
    payload = {
        "sub": ''.join(random.choices(string.digits, k=10)),
        "name": ''.join(random.choices(string.ascii_letters + " ", k=8)),
        "iat": int(time.time())
    }
    payload_json = json.dumps(payload, separators=(',', ':')).encode('utf-8')
    payload_b64 = base64url_encode(payload_json)

    # Create Signature
    signature = hmac.new(secret_key.encode('utf-8'), f'{header_b64}.{payload_b64}'.encode('utf-8'), hashlib.sha256).digest()
    signature_b64 = base64url_encode(signature)

    # Combine Header, Payload, and Signature to get JWT
    jwt = f'{header_b64}.{payload_b64}.{signature_b64}'
    return jwt

# Generate a random secret key
secret_key = ''.join(random.choices(string.ascii_letters + string.digits, k=32))

# Create JWT
jwt = create_random_jwt(secret_key)
print(jwt)
