import json
from flask import Flask
from flask import render_template
import mimetypes

mimetypes.add_type('application/javascript', '.js')

app = Flask(__name__)

@app.route("/")
def index():
  return render_template('index.html') 

if __name__ == '__main__':
  app.config['TEMPLATES_AUTO_RELOAD'] = True
  app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0
  app.run()