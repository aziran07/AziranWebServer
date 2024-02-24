FROM python:3.12-alpine

COPY requirements.txt /mnt/laby/requirements.txt
COPY /src /mnt/src

WORKDIR /mnt/laby
RUN pip install --no-cache-dir --upgrade -r requirements.txt
