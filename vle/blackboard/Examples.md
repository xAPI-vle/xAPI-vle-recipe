#Blackboard xAPI examples

##All examples of currently supported activity events recipes

###Common for all Blackboard Learn activity event recipes

* "timestamp": time of when the event occurred in BBLearn
* "actor"."name": student first name and last name
* "actor"."account"."name": student username/user_id, unique for specific BBLearn domain
* "context": same context object used by all recipes 

###Logged in

Student logged in to Blackboard.

* [loggedin.json] (loggedin.json)

###Logged out

Student manually logged out from BBLearn

* [loggedout.json] (loggedout.json)

###Session timeout

Student session expired

* [session_timeout.json] (session_timeout.json)

###Course View

Student accesses course home page

* [course_access.json] (course_access.json)

###Course Content View

Student accesses course content

* [course_content_access.json] (course_content_access.json)

###Attempt started

Student starts an attempt for assignment/assessment/test/survey

* [attempt_started.json] (attempt_started.json)

###Attempt completed

Student completed an attempt for assignment/assessment/test/survey

* [attempt_started.json] (attempt_started.json)

###Assignment submitted

Student submitted an assignment

* [assignment_submitted.json] (assignment_submitted.json)

###Assignment graded

Student assignment graded

* [asssignment_graded.json] (asssignment_graded.json)