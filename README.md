# Intro

This is my solution to the Finimize coding challenge (https://github.com/finimize/fullstack-dev-challenge).

![Screenshot 2022-02-22 at 21 58 56](https://user-images.githubusercontent.com/47692367/155235016-17c4b235-99db-462d-b81f-4aa33ad01554.png)



# Run Instructions

To run it locally :

1. Clone this repo on your machine

2. Cd into the newly created folder and run `yarn install`

3. As the server and client are setup separately, you need to cd into both folder ans run `yarn install` as well

4. To run the server tests from the root level : `yarn run test-server`

5. To run the client tests from the root level : `yarn test`

6. To start both servers : `yarn start`

# The challenge

I found this challenge interesting as it allows to display coding skills accross the full stack.  I completed it in 3h.

## Backend (server)
I started the backend first and I spent 2/3 of the time allocated on it.

I decided to design the express API following a resemblance of the MVC pattern. 
The views part is the react frontend you can find in the client folder. 
The controller is used mostly to validate the data received before passing it on to the model.
The model does not connect to any database but simply perform the calculations needed.

There was no need for multiple routers but I created two anyway (main router and sub router) to demonstrate the possibilities of the code at a larger scale.

There is a small amount of error handling for the basic error codes. The error handling is one thing that could be improved in this project, but I lacked time.

There are unit tests and integration tests. I used Mocha, Chai and Supertest for those.
I decided to put the test files in a common specs folder at the root of the server/ folder, but we could of course place them in the folders of the functions they test.

## Frontend (client)

I did the frontend last which meant I didn't have much time left so had to cut corners. 

The UI is quite simple and absolutely not responsive. Although it is encouraged to code for mobile first, I have a seriously annoying pixel issue with my laptop screen which prevents me from seeing properly on a mobile view.
I think the UI could be improved in terms of styling and accessibility as well (I initially wanted to add navigation of the inputs through keyboard for instance but didn't have time).
We could also display a welcome message to the user explaining what the empty graph is and what to do to have data displayed (fill all the form inputs). We could also add some frontend validation on the inputs.

I left the chakra UI package in with what was given as a template to start, but then carried on without it. I added axios and styled-component as dependencies.

We could refactor some components to reduce their size (make a separate component for form inputs?).

The useForm hook could be refactored into 2 to respect the single responsibility principle (one hook to hold the state and handle change on the form inputs and one for the graph data query).

I have only added a few tests for some of the components. They only check if the component is rendering, however we could add some jest tests to check the form interactions, as well as the conditional display of the summary. We could also add some end to end tests.

I have decided not to use global state as I didn't feel like there was a need for it in a project that small. We could argue that it would have been interesting to set it up so that we have less prop drilling, although it is only one level at the moment. If I implemented global state I would have probably used the Context Api as tools like Redux have to much boilerplate for a project this size.




