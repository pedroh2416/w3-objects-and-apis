Week 3: Objects and APIs
About
As computer science majors, you've likely worked with at least one of Java, Python, C++, C#, or one of the many other object-oriented languages out there. JavaScript, while a higher-level scripting language, is still at its core, an object-oriented programming (OOP) language. As such, in web development, as in many other programming disciplines, working with objects is absolutely essential to just about every web dev tech stack.

Objects in JS
The main data format JavaScript uses for its object syntax is the famous JSON (JavaScript Object Notation) format. Its easy readability and accessibility makes its usage very widespread nowadays, with many other modern programming languages exporting data in JSON-like format. In a practical sense, just about every single API you're going to be using over HTTPS protocol will be utilizing JSON-like data, so it would be wise to become very well-acclimated with the format!

Here is a sample format of a simple object in JavaScript:

var customer = {
      firstName: "John",
      lastName: "Smith",
      age: 25
}
As you can see, this is an object accessed by the variable name customer, with three keys: firstName, lastName, and age. To access these values, you use the simple and ever-common "dot notation". For instance, to access age, you would simply execute customer.age to access 25.

This dot notation is also how you traverse JSON files, most API calls, MongoDB items, etc... so make sure you're comfortable with it!

JavaScript also supports object destructuring. You can initialize the object keys' values into their own variables for easier and cleaner access later on. For instance, after the customer object has been initialized, you can destructure its keys like so:

var { firstName, lastName } = customer
Now, firstName and lastName are initialized as variables with their original values from the object and are accessible inside their respective scope just like any other variables.

You don't have to worry about object destructuring too much for simpler objects or if its syntax confuses you - functionally, there is little difference between a destructured object and a normal object parsing such as calling the keys with customer.firstName. Unless you're dealing with projects that will have many conflicting variable names, object destructuring's main purpose is ease of access and readability, so if you find it unnecessary, you don't have to worry about it. It can get especially messy with very complex objects that have objects inside objects inside arrays (you get the point), but also very practical so your queries don't end up looking like this.customer.items.pets[2].breed throughout your whole code.

Warmup activity
In the object-practice folder you'll find an index.html file there - it's mostly blank, with some room for some inline JavaScript. Simply open up the file in your browser (Chrome is recommended), open up your developer tools with F12, and use console.log() queries to iterate through the object and log each of the four things that I've requested!

You don't have to render anything onto the page - just get the requested values to appear in your browser's console.

Make sure you're comfortable with this object parsing and understand how it's working - once you feel ready, move on to the next section!

REST & APIs
The majority of APIs we are going to be creating, accessing, and calling are going to be RESTful APIs. REST stands for representational state transfer - it describes the process in which we call upon an API and get returned information. In a practical sense, APIs are essentially collections of information or databases that we can "call" to access their information - we can modify a call to the API with certain queries, such as parameters specifying keys, API keys to ensure authorization, tokens to identify sessions, etc.

We will be working both with calling upon public APIs from companies like Spotify, as well as creating and managing our own local and server-hosted RESTful APIs once we move onto Express, the benchmark standard server framework for Node.js.

As you'll see soon, almost all web-based APIs will return data in the JSON format - so make sure you're comfortable with JSON objects before starting on traversing through API calls.

For now though, we'll be combining our new object-parsing skills with last week's DOM-rendering skills, working with the robust and simple Poké API.

Activity
In the repo's root directory, you will again find an index.html. Download or clone the file into your own repo. Make a script.js file, and link the two files up. Next, watch the video below:

https://youtu.be/-L_b_StmckM

Links you may need for topics I covered:
https://pokeapi.co/

https://www.w3schools.com/jsref/met_element_addeventlistener.asp

https://axios-http.com/docs/example

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

There is also a reference.png file of my 'finished' site which includes the four bonus bugfixes below.

Bonus bugfixes
Make the PokeAPI call accept case-insensitive input (for instance, if I were to search for PIKAchu instead of pikachu)
Capitalize elements that are rendered to the site
Add a 'search history' (hint: the <ul> for it is already made - it just needs <li> and maybe some Bootstrap class magic)
Separate abilities with commas, except for the last ability
Extra bonus tasks

Style the page's background based on Pokemon type
Make the search history clickable so that it acts as another search
Feel free to get creative! This is the first proper JS-supported website we've made so far, so if you're having fun, see what other features you can add! What we've built out is about the bare minimum of what you can do with this API - there's a lot of data in the PokeAPI to play around with, and there's still a lot of possibility for adding other features, information, conditional styling, etc. I'm eager to see if you guys can get more creative with this!