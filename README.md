# CSCI-4050-Section-B-Team-5

Frontend is deployed: https://bulldog-cinema.vercel.app/

Or to run frontend in dev:
cd frontend
npm install
npm run dev

To run backend:\n
Requirements:
- Python 3.10.6 (later versions are not working)
- Postgresql
- PgAdmin

cd backend
pip3 install -r requirements.txt
// maybe: pip3 install psycopg2-binary
// maybe: pip3 install --upgrade pip
pip3 install django-cors-headers
python3 manage.py migrate
python3 manage.py makemigrations
python3 manage.py runserver

To flush backend:
python3 manage.py flush
