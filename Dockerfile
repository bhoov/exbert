FROM python:3.7-slim

# Need cmake for this project...
RUN apt update && apt install -y gcc clang clang-tools cmake
# Make bash the default shell
#SHELL [ "/bin/bash", "--login", "-c" ]
# RUN conda config --set auto_activate_base false

WORKDIR /app

# Backend
COPY requirements.txt requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

COPY server server

RUN pip install -e server/transformers
RUN pip install -e server/spacyface
RUN pip install -e server
RUN pip install --only-binary :all: fastapi==0.58.1
RUN python -m spacy download en_core_web_sm

# Frontend. Don't rebuild in the dockerfile?
RUN mkdir -p /client
COPY client/dist client/dist

#RUN chgrp -R 0 /app && \
#    chmod -R g=u /app

#ENV NUMBA_CACHE_DIR=/tmp

#COPY entrypoint.sh /usr/local/bin/
#ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]
#CMD ["sleep", "604800"]
# CMD ["jupyter", "lab", "--port", "14242"]]
# CMD ["uvicorn",  "--help"]
CMD ["uvicorn",  "--host=0.0.0.0", "--port=5050", "--log-level=debug", "server.main:app", "--no-server-header"]
# CMD ["uvicorn",  "--host=0.0.0.0", "--log-level=debug", "--app-dir=src", "test-app:app"]