FROM ubuntu:latest

EXPOSE 5173

SHELL ["/bin/bash", "-c"]

RUN apt update && apt install -y curl wget nano git

ENV NVM_DIR=/root/.nvm

RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash

RUN export NVM_DIR="/root/.nvm" && \
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" && \
    nvm install --lts && \
    nvm use --lts && \
    echo 'export NVM_DIR="/root/.nvm"' >> /root/.bashrc && \
    echo '[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"' >> /root/.bashrc && \
    echo 'export PATH="$NVM_DIR/versions/node/$(ls $NVM_DIR/versions/node)/bin:$PATH"' >> /root/.bashrc

ENV PATH="/root/.nvm/versions/node/$(ls /root/.nvm/versions/node)/bin:$PATH"

CMD ["bash", "-l"]