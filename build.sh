virtualenv venv
source venv/bin/activate
pip install -r requirements.txt
nodeenv -p
deactivate
source venv/bin/activate
npm install -g bower
