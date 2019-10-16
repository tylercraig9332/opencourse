# Opencourse

## About
### Statement
This project was initially taken up by Tyler Craig and Connor Plunket during Apphack 10. The goal of this project is to provide a free and open source online learning community. Education and knowledge are so fundamentally important to society, which means that access to learning should free. 
### Development
This project uses Node.js, Postgresql and React with Typescript. The process of developing this project is an amazing learning opportunity as many of these technologies we have not yet worked with. 

## Setting up 

### Requirements
* Postgres
* node & npm 

### Installing 
Note: I would reccommend installing nodemon so that you can run the node server without having to restart on every change.
// TODO: I will add more here on installing postgres, but for now I will allow for Google to provide that information
// Also I plan on moving this project into a container before build which will help with the installing of it

### Starting up
* run your postgres server (`postgres -D /usr/local/var/postgres/ 2>&1 &`) and manually run the script in `server/Postgres/Tables.sql` 
* run `npm start`
* run `node server.js` or `nodemon server.js` 