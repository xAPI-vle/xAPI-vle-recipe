# JISC Learning Analytics Vocabulary
The following terms are in use in the Jisc LA recipes.

### Verbs

| Label  	   | Description | IRI  | Example Usage
| ------------- | ------------- |--------|----|
|  Logged in | Logged in to some service  | [https://brindlewaye.com/xAPITerms/verbs/loggedin](https://brindlewaye.com/xAPITerms/verbs/loggedin)|['Logged in' verb](recipes/login.md#verb) |
|  Logged out | Logged out of some service  | [https://brindlewaye.com/xAPITerms/verbs/loggedout](https://brindlewaye.com/xAPITerms/verbs/loggedout")|['Logged out' verb](recipes/logout.md#verb) |
|  Viewed | Indicates that the actor has viewed the object  |	[http://id.tincanapi.com/verb/viewed] (http://id.tincanapi.com/verb/viewed) | ['Module Viewed' verb](recipes/Module-View.md#verb) |
|  Session timed out | Indicates the activity provider has determined that the session was abnormally terminated either by an actor or due to a system failure.  |	[https://w3id.org/xapi/adl/verbs/abandoned] (https://w3id.org/xapi/adl/verbs/abandoned) | ['Module Viewed' verb](recipes/Module-View.md#verb) |




### Activity Types

| Label  			| Description | IRI| Example Usage
| ------------- | ------------- |--------|----|
|  Application  | Represents any kind of software application   | [ http://activitystrea.ms/schema/1.0/application](http://activitystrea.ms/schema/1.0/application)  	|['Logged in' example object.definition.type](recipes/login.md#complete_example) |


### Object.definition 

| Label  			| Description | IRI  | Example Usage
| ------------- | ------------- |--------|----|
| Module   | A module represents any “content aggregation” at least one level below the course level. Modules of modules can exist for layering purposes. Modules are not content. Modules are one level up from all content.          | [http://adlnet.gov/expapi/activities/module](http://adlnet.gov/expapi/activities/module) | ['Module-View' Object.definition](recipes/Module-View.md#object) |


### Object.definition.extension 

| Label  			| Description | IRI  | Example Usage
| ------------- | ------------- |--------|----|
| VLE page   | Page within a VLE           | http://xapi.jisc.ac.uk/define/extensions/vle/page | [Module-View - Object](recipes/Module-View.md#object) |
| VLE quiz   | Quiz within a VLE               | http://xapi.jisc.ac.uk/define/extensions/vle/quiz | [Module-View - Object](recipes/Module-View.md#object) |
| Moodle   |An instance of Moodle               | http://lrs.learninglocker.net/define/extensions/moodle_course  | ['Logged in' verb](recipes/login.md#verb)|
| module type   |Moodle               | http://xapi.jisc.ac.uk/extensions/moduleType | [Module-View - Object](recipes/Module-View.md#object)|


## Jisc extensions
The following terms a newly minted in the http://xapi.jisc.ac.uk namespace. Note that the namespace URI may change.

| Label  		| Description   | IRI    | Example Usage
| ------------- | ------------- |------------------------------------------------------|----|
| Umbrella course area |  Umbrella course/parent area by its home page URI         | http://xapi.jisc.ac.uk/extensions/courseArea | |
| VLE | A virtual learning environment              | http://xapi.jisc.ac.uk/define/extensions/vle | [Logged in - Object](recipes/login.md#object)|
| VLE page   |   A page in the virtual learning environment                | http://xapi.jisc.ac.uk/define/extensions/vle/page | [Module-View - Object](recipes/Module-View.md#object) |
| VLE quiz   | A quiz in the virtual learning environment                | http://xapi.jisc.ac.uk/define/extensions/vle/quiz | [Module-View - Object](recipes/Module-View.md#object) |
| VLE content   |               | http://xapi.jisc.ac.uk/define/extensions/vle/content | [Blackbord course content access](vle/blackboard/course_content_access.js)|
| Application Type |            | http://xapi.jisc.ac.uk/extensions/applicationType | [Logged in - Object](recipes/login.md#object)|
| Session id |  local session id       | http://xapi.jisc.ac.uk/extensions/sessionId | |



 
##Blackboard

### Verbs
