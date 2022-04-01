FROM node:14  

WORKDIR /myfolder/


COPY ./package.json /myfolder
COPY ./yarn.lock /myfolderer


RUN yarn install


COPY . /myfolder/


CMD node index.js
