# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.


1. What is `this` in JavaScript?

  Your answer: this is a reference to the current instance of the object or class.
  We can use this to get the functions or attributes that the class provided for
  that particular object.

  Researched answer: The keyword this in JavaScript is a reference to the object
  being called on. In a global and function context, it refers to the global object,
  defined in global scope. In a constructor, this is a regular object. The regular
  object is the one being instantiated.


2. What is yarn? What file(s) are modified in a React application when you run yarn?

  Your answer: Yarn is a package manager. Node modules are installed and added with
  a script. Dependencies and files are created in the working directory.

  Researched answer: Yarn is a package manager that installs dependencies from a
  remote repository to the local environment. A directory called node_modules is
  created which contains all of the dependencies. Then when yarn is ran, it looks
  for the main function that runs the App.js file, instead of calling node App.js
  directly. Otherwise if it's yarn jest, it will find the .test.js file and run the
  test code.


3. What are props in React?

  Your answer: Props are components that do not have logic or state in them.
  I think they are mainly for displaying data or sending data back up to the
  main app where the logic resides. Props are called using the attributes
  when making a component call.

  Researched answer: Props are objects that get passed from one component to
  another. Since we don't want the logic to be everywhere and want to keep the
  state in the parent class, we use props to send the data as read-only. Props
  can be objects and attributes from the state or a function from the parent class.


4. What is JSX?

  Your answer: JSX is JavaScript XML. It allows us to use HTML and XML code to create
  dynamic user interfaces with JavaScript.

  Researched answer: JSX is a syntax extension to JavaScript and makes it possible
  to write XML/HTML for React. JSX creates React elements which evaluates to
  JavaScript objects. React doesn't require JSX but writing markup is easier
  than passing arguments to React.createElement() when creating the UI.


5. What is a DOM event?

  Your answer: DOM events are actions done on a user interface. Actions can be
  keyboard input, mouse clicks, or any other change made by a user or other program.

  Researched answer: DOM events are signals or actions done by a user or the browser.
  Examples are user clicks, loading, hovering over elements, submitting a form,
  and changing an input field. Event handlers or listeners are used to handle these signals.


6. STRETCH: What is an anonymous function in JavaScript?

  Your answer: I think anonymous functions are functions defined with the arrow
  function =>. They aren't explicitly defined with the function keyword from JavaScript.

  Researched answer: Anonymous functions are unnamed functions. They can be declared
  with the function keyword or used with the arrow function syntax.


## Looking Ahead: Terms for Next Week

1. Conditional rendering: Conditional rendering refers to the action of displaying
a different UI based on some condition. For example, a page can show different
things if the user is logged in or not.

2. Ruby: Ruby is an interpreted, dynamically typed, object oriented programming
language. Everything is an object in Ruby.

3. Object oriented programming: OOP is a programming paradigm that is based on
using objects to include data and behavior. OOP follows encapsulation, inheritance,
abstraction, and other design principles to have less dependencies across the
entire application. This way, large software projects are not broken with a single
line of code.

4. Ruby hash: A hash in Ruby is a collection of key-value pairs where keys are
unique and values can be accessed by their corresponding key.

5. Ruby blocks: Blocks in Ruby are like anonymous functions in JavaScript,
where they can be passed to a method. They are created with do/end statements or
the {}.
