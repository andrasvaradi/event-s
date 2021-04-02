

![](https://res.cloudinary.com/dujun1hoe/image/upload/c_scale,w_204/v1617381223/event-s/1_z5v09c.png)


Event-s is an app which helps you find events based on your location and provides useful information to you as well as the host of the event.

## Screenshots

![](https://res.cloudinary.com/dujun1hoe/image/upload/v1617380242/event-s/Lavender_Just_Launched_Instagram_Post_clgiwf.jpg)

![](https://res.cloudinary.com/dujun1hoe/image/upload/v1617380242/event-s/Launch_Day_Instagram_Template_usor6c.jpg)

## Before you start

Please get a free API key from [Mapbox](https://www.mapbox.com) and [Cloudinary](https://cloudinary.com/homepage-2)

- Add a .env file in the server folder with the following:
CLOUD_NAME='your cloud name goes here'
API_KEY='your API key goes here'
API_SECRET='your API secret goes here'
- Add a .env.local file to your client folder with the following:
REACT_APP_MAPBOX_ACCESS_TOKEN='your mapbox API key goes here'

## Getting started

1. Make sure you have a MongoDB service running in your local enviroment.
2. Clone the repo

```
git clone https://github.com/andrasvaradi/event-s
cd event-s
```

3. Install dependencies for both client and s

```
Client:
cd client
npm install or npm i
Server:
cd server
npm install or npm i
```

4. Start development server

```
If you have nodemon installed globally:
nodemon
Otherwise:
node index.js
```

5. Navigate to client and run the React app

```
npm start
```




## Built with

* [React](https://reactjs.org) - Front end library for building user interfaces
* [React Router](https://reactrouter.com) - Routing and *navigation* for *React* apps
* [Express](https://expressjs.com) - Node.js framework
* [Mongoose](https://mongoosejs.com) - MongoDB object modelling for Node.js
* [Chakra UI](https://chakra-ui.com) - UI component library
* [Mapbox](https://www.mapbox.com) - Map API
* Lots of coffee


## Contributing

Improvements are welcome :)

Fork the repo and do your thing. Push to your fork and submit a pull request.


## Author

Andras Varadi - [Github](https://github.com/andrasvaradi) - [LinkedIn](www.linkedin.com/in/andrasvaradi)

