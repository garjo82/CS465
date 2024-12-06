# CS465

- Architecture - 
Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).
Why did the backend use a NoSQL MongoDB database?

Express HTML, Javascript, and Angular are all frameworks used to build front-end, client-facing websites but they achieve this in different ways. Express HTML is a fast flexible framework that can be used for simple web pages on the server side that are then sent to the client side. Angular is a framework that can be used to build single-page applications or SPAs on the client side, which can result in a richer more dynamic experience for users. JavaScript is a programming language that can be used with both Express and Angular. The backend uses a NoSQL MongoDB because the simpler database structure allows for faster data calls without the need for SQL queries. This is important for a single-page application that seeks to create a more efficient user experience by limiting server calls and keep as much as possible on the client side.

- Functionality - 
How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?
Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.

JSON is different from Javascript in that it has stricter syntax. This is what allows it to function outside of an SQL database with key-value pairs. The first and most important refactor was switching from a website that loads individual HTML pages to one that uses Express HTML to build pages dynamically. This was done by removing the individual page and switching to an Express router that ran each trip data entry through and algorithm that built trip cards to be displayed, then the HTML simply displayed the trip card component instead of the prebuilt html page containing trip info.

- Testing - 
Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.

GET, POST, PUT, and DELETE methods exist for manipulating data types. GET retrieves data, POST creates data, PUT edits data, and DELETE removes data. Testing involves not only testing the webpage but also using tools like Postman and MongoDBCompass to look directly into the database and confirm that the methods work. Security involves creating a user database and requiring users to register and login before any changes can be made to trips. Testing of security involves the same tests as with trip data but both on the logged in and logged out webpage to ensure functionality only exists when logged in.

- Reflection - 
How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

This course gave me a better understanding of how to create an application from start to finish, which is something I felt that I have been lacking up until now. In previous classes, we mostly focused on either front end or back end and usually just a small aspect of each. While we were mostly using pre-built frameworks there was still a lot of work needed to connect all the pieces. The ability to wire things up from the front end to back end and create all the necessary components is something that for any software development task moving forward.
