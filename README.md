# WebChat App

This is web chat project.

## How to install

* Clone repository from GitHub `git clone`
* Go to project root folder
* Create python `venv`
* Install python libs with pip `pip install -r requirements.txt`
* Go to `/frontend` folder
* Install npm packages via command `npm install`

*Also you must have docker on machine*

## How to launch

1. Run redis docker `docker run -p 6379:6379 -d redis:5`
2. Go to root folder and run Django backend `python manage.py runserver`
3. Go to `/frontend` folder and run frontend `npm start`