require('dotenv').config();

module.exports = {
  "development": {
    "username": "penumbra",
    "password": "p3nUmbr@!79!",
    "database": "penumbra",
    "host": "localhost",
    "dialect": "mysql",
    "define": {
      "underscored": true
    }  
  },
  // "test": {
  //   "username": "penumbraN",
  //   "password": "penumbra",
  //   "database": "penumbra",
  //   "host": "localhost",
  //   "dialect": "mysql" ,
  //   "define": {
  //     "underscored": true
  //   }
  // },
  "test": {
    "username": "root",
    "password": "",
    "database": "sample_project",
    "host": "localhost",
    "dialect": "mysql" ,
    "define": {
      "underscored": true
    }
  },
  "production": {
    "username": "penumbra",
    "password": "penumbra",
    "database": "penumbra",
    "host": "localhost",
    "dialect": "mysql"
  }
};
