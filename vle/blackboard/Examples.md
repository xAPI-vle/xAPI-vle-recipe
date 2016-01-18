#Blackboard xAPI examples

##All examples of currently supported activity events recipes

###Common for all activity events recipes

* "timestamp": time of when the event occurred in BBLearn
* "actor"."name": student first name and last name
* "actor"."account"."name": student username, unique for specific BBLearn domain
* "context": same context object used by all recipes 

###Logged in

Student logged in to Blackboard.

* [loggedin.js] (loggedin.js)

###Logged out
Student manually logged out from BBLearn

* [loggedout.js] (loggedout.js)

###Session timeout
Student session expired

* [session_timeout.js] (session_timeout.js)

###Course View

Student accesses course home page

* [course_access.js] (course_access.js)