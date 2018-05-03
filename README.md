# NYC Places

A friendly tour-guide to the city of New York for those that want to explore more or are new to the city. Ruby on Rails back-end, JavaScript and React front-end, incorporated a cuztomized API and requests to GoogleMaps and Yelp APIs.

* NYC Places Front-End Repo - https://github.com/tanelam/NYC_Places_Frontend
* NYC Places Back-End Repo - https://github.com/tanelam/NYC_Places_Backend

![alt text](https://github.com/tanelam/NYC_Places_Frontend/blob/master/screenshot.jpg)

## How To Use
 
 * Navigate to http://localhost:3000/nycplaces in your browser.
 * See all the places available or choose one category from the dropdown.
 * Click on the picture of the place that interests you.
 * In the place page, you can see more pictures of the place using the arrows on the border of the photo.
 * Check out some of the events going on close to that place.
 * Look at the most rated restaurants and food options close by.
 * If you like an event or a resturant you can click on it and you will be redirected to its Yelp page. 

## Prerequisites

* Ruby v5.1.4
* PostgreSQL 10
* React

## Back-End Setup

1. Clone this repo - https://github.com/tanelam/NYC_Places_Backend
2. Install Gems `bundle install`
3. Set up Database `rake db:create`, then run rake `db:migrate`
4. Seed Database `rake db:seed`
5. Start your server `rails s -p 8000`

## Front-End Setup

1. Clone this repo - https://github.com/tanelam/NYC_Places_Frontend
2. Install Dependencies `npm install` or `yarn install`
3. Start your server `npm start` or `yarn start`

## In Your Browser

Navigate to the web address of your server http://localhost:3000 (or whatever yours is), and add the endpoint `/nycplaces`

## Cotributors

[Tania Aparicio](https://github.com/tanelam)
