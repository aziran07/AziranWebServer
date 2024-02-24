FROM python:3.12-alpine

COPY ./requirements.txt /mnt/laby/requirements.txt

WORKDIR /mnt/laby
RUN pip install --no-cache-dir --upgrade -r requirements.txt

COPY ./laby/src /mnt/laby/src