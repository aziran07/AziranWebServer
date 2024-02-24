FROM python:3.12-alpine

COPY requirements.txt ${LABY_WORK_DIR}/requirements.txt
COPY src ${LABY_WORK_DIR}/src

WORKDIR ${LABY_WORK_DIR}
RUN pip install --no-cache-dir --upgrade -r requirements.txt

RUN python
