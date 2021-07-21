FROM node:12.22.3-buster

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN yarn install

# If you are building your code for production
# RUN npm ci --only=production
ARG GOOGLE_APPLICATION_CREDENTIALS=firebase-adminsdk.json
# Bundle app source
COPY . .
RUN yarn run prisma:generate
#RUN rm -rf node_modules && yarn install --frozen-lockfile
RUN yarn run build
#attach static files volume here
VOLUME [ "/usr/src/app/dist/public" ] 
VOLUME [ "/usr/src/app/$GOOGLE_APPLICATION_CREDENTIALS" ]

EXPOSE 3000

CMD [ "yarn","start" ]
