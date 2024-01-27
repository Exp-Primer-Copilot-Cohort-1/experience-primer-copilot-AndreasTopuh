// Create web server using Express.js
// Create a route for POST /comments
// Read the body of the request and extract the value of the comment
// Create a new comment object with the current date and time and the comment text
// Add the new comment object to the array of comments
// Send a JSON response with the updated array of comments
// Test the route using Postman
// Test the route using the HTML form

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const comments = [
    {username: 'Todd', comment: 'lol that is so funny!'},
    {username: 'Skyler', comment: 'I like to go birdwatching with my dog'},
    {username: 'Sk8erBoi', comment: 'Plz delete your account, Todd'},
    {username: 'onlysayswoof', comment: 'woof woof woof'},
    {username: 'iliketurtles', comment: 'hello'}
];

app.use(bodyParser.json());

app.get('/comments', (req, res) => {
    res.send(comments);
});

app.post('/comments', (req, res) => {
    const newComment = {username: req.body.username, comment: req.body.comment};
    comments.push(newComment);
    res.send(comments);
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});