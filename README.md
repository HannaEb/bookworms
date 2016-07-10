# Bookworms

Bookworms was developed as a project during the [Makers Academy](http://www.makersacademy.com) web development course.

Bookworms aims to remove the admin involved when organising a book club with your friends - or with anyone at all! Now you can find your the perfect club for you, based on genre, location, or time - or if you can't find one you like, create your own.

This project was built using Rails to serve an API, with the user interface being created in Angular.

### Technologies used
- Ruby on Rails API
- AngularJS
- PostgreSQL

### Installation instructions
`$ git clone git@github.com:iammatthewward/bookworms.git`  
`$ bundle install`  
`$ npm install`  
`$ bower install`  
`$ rake db:create`  
`$ rake db:migrate`

### To run via Rails server
`$ rails s`  

### To run Rails tests using RSpec
`$ rspec`

### To run test servers - make sure the following are running in separate tabs
`$ npm run webdriver-manager start`  
`$ npm run start`  
`$ ionic serve`

### To run Angular unit tests, using Karma
`$ karma start test/karma.conf.js`

## To run Angular feature tests, using Protractor
`$ protractor test/protractor.conf.js`
Go to `http://localhost:3000` in your web browser.

## Contributors
- [Matt Ward](https://github.com/iammatthewward)
- [Sity Shah](https://github.com/sitypop)
- [Emilio Menendez](https://github.com/Wil0)
- [Hanna Eberhoefer](https://github.com/HannaEb)
