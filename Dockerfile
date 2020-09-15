# base image
FROM node:alpine


COPY ./ ./

# install dependecnies
RUN npm install



# default cmd

CMD ["npm","start"]
