# Bookworms 📚🐛

![Screenshot](http://imgur.com/SXZwbsD.png)

Bookworms was developed as a project during the [Makers Academy](http://www.makersacademy.com) web development course.

Bookworms aims to remove the admin involved when organising a book club with your friends - or with anyone at all! Now you can find your the perfect club for you, based on genre, location, or time - or if you can't find one you like, create your own.

This project was built using Rails to serve an API, with the user interface being created in Angular.

### Technologies used
* Rails API
* AngularJS
* Rails asset pipeline
* PostgreSQL database
* Heroku

### Installation instructions
`$ git clone git@github.com:iammatthewward/bookworms.git`  
`$ bundle install`  
`$ npm install`  
`$ bower install`  
`$ rake db:create`  
`$ rake db:migrate`

Register your details:

![Screenshot](http://imgur.com/79djEa6.png)

Go ahead, create a new bookclub!

![Screenshot](http://imgur.com/MSAWWqe.png)

### To run via Rails server and use the app
`$ rails s` 

Then, in your browser, type in `http://localhost:3000/#/`

### To run Rails tests using RSpec
`$ rspec`

### To run test servers for Angular tests, run each in a separate tab
`$ npm run webdriver-manager start`  
`$ npm run start`  
`$ ionic serve`

### To run Angular unit tests, using Karma
`$ karma start test/karma.conf.js`

## To run Angular feature tests, using Protractor
`$ protractor test/protractor.conf.js`

## Contributors
- [Matt Ward](https://github.com/iammatthewward)
- [Sity Shah](https://github.com/sitypop)
- [Emilio Menendez](https://github.com/Wil0)
- [Hanna Eberhoefer](https://github.com/HannaEb)
