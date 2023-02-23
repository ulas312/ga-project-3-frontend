## ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)


## General Assembly, Software Engineering Immersive Project-3


## Completed over 7 days in a group of 3.


# Full Stacked


## Overview


Our brief was to **create a MERN stack app** which used **authentication** and at least **two models on the back-end** and **multiple components on the front-end**.


<p>Full Stacked - a workout/exercise web app that allows users to explore the workout directory, checkout workouts and individual body part exercises as well as workout logging.</p>


### Technical Requirements


- Work in a team, using git to code collaboratively.
- Build a full-stack application by making your own backend and your own front-end.
- Use an Express API to serve your data from a Mongo database.
- Consume your API with a separate front-end built with React.
- Be a complete product which most likely means multiple relationships and CRUD functionality for at least a couple of models.
- Implement thoughtful user stories/wireframes that are significant enough to help you know which features are core MVP and which you can cut.


---


## My Teammates were:
- [Wyndham Roy](https://github.com/wyndhams)
- [Ebrar Hassany](https://github.com/EbsH3)


---


## Technologies used


- HTML5
- SCSS
- JavaScript (ES6)
- React
- NPM
- Node.js
- Express
- MongoDB
- Mongoose
- JSON
- JSON Web Tokens
- MUI
- BCrypt
- emailRegex
- Axios
- Postman
- Git and GitHub
- Cloudinary
- Adobe Illustrator


---


## Deployment


Visit the site here - [Full Stacked](https://fullstacked-frontend.netlify.app/)


Visit the backend - [Repo here](https://github.com/ulas312/ga-project-3-backend)


---


![Full Stacked home page](https://i.postimg.cc/BQ8nb2dL/Screenshot-2023-02-14-at-00-47-08.png)


---


## Planning Process


<p>The development process started with wireframes to guide the user's journey and core functionality of the site. We then decided the structure of the database and RESTful routes. Once our models were established for our database, we started working on setting up controllers for all routes.</p>


![wireframes](https://i.postimg.cc/rmh6TYjd/Screenshot-2023-02-14-at-01-08-05.png)


<p>Started off with a quick mockup created with Adobe Illustrator to have an image to work towards.</p>


![mockups](https://i.postimg.cc/kMFs2bPc/Screenshot-2023-02-14-at-01-12-03.png)


<p>For project management we used Trello to split tasks between ourselves, we had daily standups using zoom and had constant back and forth in a slack group we created.</p>


---


## Build Process & features


### On the back end the main parts that I worked on were:


- Created and set up the backend repository on GitHub.
<p>Then making use of git, we carried out individual work on branches for each feature. This was merged with the development branch and any merge conflicts were fixed as a group. Prior to pushing the code to the Master branch, all features were tested on the development branch.</p>


![github](https://i.postimg.cc/7Lncbn7B/Screenshot-2023-02-22-at-20-47-09.png)


- String testers with emailRegex


```javascript
export const emailRegex = new RegExp(
 "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
);
```


- Secure routes with JSON Web Tokens


This piece of code is the secure route that I wrote and is for authorization. When a users is logged in, each subsequent request will include the JWT, allowing the user to access routes, services, and resources that are permitted with that token.


```javascript
const secureRoute = async (req, res, next) => {
 try {
   const authToken = req.headers.authorization;


   if (!authToken || !authToken.startsWith('Bearer')) {
     return res.status(301).json({ message: 'Unauthorized' });
   }


   const token = authToken.substring(7);


   jwt.verify(token, SECRET, async (err, data) => {
     if (err) {
       return res.status(301).json({ message: 'Unauthorized' });
     }


     const user = await User.findById(data.userId);


     if (!user) {
       return res.status(301).json({ message: 'Unauthorized' });
     }


     req.currentUser = user;


     next();
   });
 } catch (e) {
   return res.status(301).json({ message: 'Unauthorized' });
 }
};
```


- All the API routes were then tested by making requests with Postman.


![Postman](https://i.postimg.cc/LXMmz5g5/Screenshot-2023-02-22-at-19-55-31.png)


### On the front end I worked on:


<p> Website design</p>


- Started off with a quick mockup created with Adobe Illustrator to have an image to work towards.


![mockups](https://i.postimg.cc/kMFs2bPc/Screenshot-2023-02-14-at-01-12-03.png)


- I utilised MUI components and created a theme to make styling quicker.


```javascript
const theme = createTheme({
 palette: {
   type: 'light',
   primary: {
     main: '#ffffff',
   },
   secondary: {
     main: '#FF0000',
   },
   background: {
     default: '#000000',
   },
   error: {
     main: '#000000',
   },
   overrides: {
     MuiAppBar: {
       colorPrimary: {
         backgroundColor: '#000000',
       },
     },
   },
 },
 typography: {
   fontFamily: '"Bebas Neue", "Helvetica", "Arial", sans-serif',
   fontSize: 25,
 },
});
```


- Home page was a simple page with a hero image and a button linking you to the login page.


- Navbar.


The navbar changes depending if you are logged in or logged out.


```javascript
{
 isLoggedIn ? (
   <>
     <MenuItem onClick={handleClose}>
       <Link
         style={{ color: 'inherit', textDecoration: 'inherit' }}
         to='/'
         onClick={logout}
       >
         <Typography
           variant='h6'
           color='inherit'
           component='div'
           sx={{ mr: 2 }}
         >
           Log Out
         </Typography>
       </Link>
     </MenuItem>
     <MenuItem onClick={handleClose}>
       <Link
         style={{ color: 'inherit', textDecoration: 'inherit' }}
         to='/account '
       >
         <Typography
           variant='h6'
           color='inherit'
           component='div'
           sx={{ mr: 2 }}
         >
           Account
         </Typography>
       </Link>
     </MenuItem>
   </>
 ) : (
   <>
     <MenuItem onClick={handleClose}>
       <Link
         style={{ color: 'inherit', textDecoration: 'inherit' }}
         to='/login'
       >
         <Typography
           variant='h6'
           color='inherit'
           component='div'
           sx={{ mr: 2 }}
         >
           Login
         </Typography>
       </Link>
     </MenuItem>
     <MenuItem onClick={handleClose}>
       <Link
         style={{ color: 'inherit', textDecoration: 'inherit' }}
         to='/register'
       >
         <Typography
           variant='h6'
           color='inherit'
           component='div'
           sx={{ mr: 2 }}
         >
           Register
         </Typography>
       </Link>
     </MenuItem>
   </>
 );
}
```


- Activity log


The activity log form has a dropdown input that pulls all the exercises from the API.


```javascript
API.GET(API.ENDPOINTS.allWorkouts, data, API.getHeaders())
 .then(({ data }) => {
   navigate(`/workouts/${data._id}`);
 })
 .catch((e) => {
   if (e.status === 301) {
     setError(true);
   }
   console.log(e);
 });
```


- Account page has the user's profile along with their measurements and a gallery of pictures they upload along with the activity log.


---


## Styling


- The majority of the styling and responsiveness for the app was handled using MUI.
- I used CSS/Sass to overwrite some of the MUI stylings for customisation.


<h4><u>Screenshots</u><h4/>


![Full Stacked home page](https://i.postimg.cc/BQ8nb2dL/Screenshot-2023-02-14-at-00-47-08.png)


![workout directory](https://i.postimg.cc/VvkFQzLt/Screenshot-2023-02-14-at-02-27-51.png)


![selected workout page](https://i.postimg.cc/Y0LhmPdV/Screenshot-2023-02-14-at-02-28-21.png)


![Login page](https://i.postimg.cc/BQ8xxY8J/Screenshot-2023-02-14-at-02-26-55.png)


![workout log page](https://i.postimg.cc/tJsVNJ4B/Screenshot-2023-02-14-at-02-26-45.png)


---


## Wins & Challenges


### Wins


<p>The back-end features we required are all completed. After testing it on Postman, we can get all the correct data coming back from our API.</p>


<p>This was the first project I used MUI with and I feel it helped solidify my knowledge of component libraries and navigating their documentations for my needs.</p>


### Challenges


<p>One of the trickiest parts of the project was the merge conflicts when pushing our code to git. We tackled this by communicating as a group and working together based on who was working on what file at a time.</p>


<p>Another challenge was the account page, as we didn't have enough time to resolve Cloudinary I couldn't fetch the images users upload to their account page.</p>


<p>As this was the first project I used MUI I did find I spent a lot of time reading through the documentation and trying things. Due to this I didn't manage to get all the functionality of my pages done in time. What I've taken from this is to focus on functionality first and make sure the core features work before I move on to styling.</p>


## Future Features


- Fix Cloudinary for uploading images.
- Finish the workout log form and be able to upload images to Cloudinary.
- Add extra features to the account page (your workouts/ favourite exercises, progress chart.)





