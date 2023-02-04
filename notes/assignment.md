Exercises
The goal of the lab is to put in a rep doing everything that you did during the Express - Routers & Controllers lesson:

Be sure to create an array of “fake” data representing some of your awesome developer skills. The specific properties describing a skill object is up to you!

Implement index functionality for the skills resource

Implement show functionality for the skills resource

Hints
Keep the data resource name short and simple - something like skills.

Following best-practice routing and MVC will result in the following modules for the skills resource:
routes/skills.js
models/skill.js
views/skills
controllers/skills.js
Use RESTful routes
Bonuses
Use EJS partial views to make your templates more DRY (see link in Reference section of the lesson) and/or this link.

Add styling or use a CSS framework to make the app look better :)

This lab combined with Part 2, which builds upon this lab, is a deliverable. Please submit the URL of your express-dev-skills GH repo as directed.



PT 2:
Intro
In recent lessons you saw how to use HTML forms and Express middleware, such as:

express.urlencoded (AKA body-parser middleware)
method-override
to perform Create, Update & Delete data operations in an Express application.

This lab builds upon the express-dev-skills project you created in the My Dev Skills - Part 1 lab where the Read data operations were implemented.

This Lab is a Deliverable
Exercises
The goal of the lab is to put in a rep doing everything that you did during the Express - Middleware lesson by adding the following functionality to the express-dev-skills project:

Display an Add Skill link on the index view that when clicked, displays a new view that includes a form for entering a new Dev Skill.

When a new Dev Skill is submitted, add the skill to the simulated “database” and redirect the user to the index view.

On the show view, display a Delete Skill button (the submit button within a <form>) that when clicked, deletes the skill from the “database” and redirects to the index view.

Note: All routes should follow those described in the RESTful/Resourceful routing chart

Hints
Be sure to install, require & mount the method-override middleware.
Bonus Exercises
On the show view, display an Edit Skill link that when clicked, displays an edit view that displays a form for editing that Dev Skill.

When the edit Dev Skill form is submitted, the skill should be updated in the “database” then redirect the user back to the show view.

Hints
The controller action will need to get the Dev Skill being edited using the Skill Model and pass it to the edit view.
Prefill <input> elements by using the value attribute and some EJS tags to write out the data properties of the skill passed in, for example, an <input> used to edit a skill’s name property would look like the following (assuming you passed a skill object for the previous hint):

  <input type="text" name="name" value="<%= skill.name %>">
This Lab is a Deliverable
Please submit the URL of your express-dev-skills GH repo as directed.