FROM python:3.13.5-alpine
WORKDIR /app
COPY requirements.txt .
# RUN python3 -m venv venv.        [No Need cause Docker conatiner is already an isolated process]
# RUN source venv/bin/activate
RUN pip install -r requirements.txt
COPY . .
EXPOSE 8000
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--reload"]