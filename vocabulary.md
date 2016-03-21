# JISC Learning Analytics Vocabulary
The following terms are in use in the Jisc LA recipes.
NOTE: The xapi.jisc.ac.uk namespace URI may change.

### Verb

Usage:

1. [verb.id](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI.md#verb) -Corresponds to a Verb definition.

| Label  	   | Description | IRI  | Repository Example 
| -------------| ----------- |------|----|
|  Logged in  | Logged in to some service  | [https://brindlewaye.com/xAPITerms/verbs/loggedin](https://brindlewaye.com/xAPITerms/verbs/loggedin)|[Logged in](recipes/login.md#verb) |
|  Logged out | Logged out of some service  | [https://brindlewaye.com/xAPITerms/verbs/loggedout](https://brindlewaye.com/xAPITerms/verbs/loggedout")|[Logged out](recipes/logout.md#verb) |
|  Viewed     | Indicates that the actor has viewed the object  |	[http://id.tincanapi.com/verb/viewed](http://id.tincanapi.com/verb/viewed) | [Object Viewed](recipes/Module-View.md#verb) |
|  Session timed out | Indicates the activity provider has determined that the session was abnormally terminated either by an actor or due to a system failure.  |	[https://w3id.org/xapi/adl/verbs/abandoned] (https://w3id.org/xapi/adl/verbs/abandoned) | [Object Viewed](recipes/Module-View.md#verb) |
|  Completed |  Completing an activity - finishing in its entirety. .   |	[http://adlnet.gov/expapi/verbs/completed] (http://adlnet.gov/expapi/verbs/completed) | [Assignment submitted](vle/blackboard/assignment_submitted.json) |


### Object

#### Object Definition Type
Usage:

1. [object.definition.type](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI.md#activity-definition) -The type of Activity.

| Label  		| Description   | IRI    | Repository Usage
| ------------- | ------------- |--------|----------------|
| Application   | Represents any kind of software application   | [ http://activitystrea.ms/schema/1.0/application](http://activitystrea.ms/schema/1.0/application)  	|[Logged in](recipes/login.md#complete_example) |
| Module        | A module represents any “content aggregation” at least one level below the course level. Modules of modules can exist for layering purposes. Modules are not content. Modules are one level up from all content.          | [http://adlnet.gov/expapi/activities/module](http://adlnet.gov/expapi/activities/module) | [Module-View](recipes/Module-View.md#object) |


Usage:

1. object.definition.type

2. object.definition.extensions.<extension>: 

| Label  		| Description                    | IRI    | Repository Example  | Moodle Example | Blackboard Example
| ------------- | -------------------------------|--------|---------------------|----------------|-------------------|
| VLE        	| A virtual learning environment | http://xapi.jisc.ac.uk/define/extensions/vle       |     | |
| VLE content   |                                | http://xapi.jisc.ac.uk/define/extensions/vle/content | | |
| VLE page  	| Page within a VLE              | http://xapi.jisc.ac.uk/define/extensions/vle/page  | [Object View](recipes/Module-View.md#object) |[A page](http://moodle.data.alpha.jisc.ac.uk/mod/page/view.php?id=9)| |
| VLE quiz  	| Quiz within a VLE              | http://xapi.jisc.ac.uk/define/extensions/vle/quiz  | [Object View](recipes/Module-View.md#object) |[A quiz](http://moodle.data.alpha.jisc.ac.uk/mod/quiz/view.php?id=13)| |
| VLE forum  	| A VLE forum/discussion board   | http://xapi.jisc.ac.uk/define/extensions/vle/forum |                                              |[A forum](http://moodle.data.alpha.jisc.ac.uk/mod/forum/view.php?id=12)| [Discussion board](https://jisc.blackboard.com/webapps/discussionboard/do/forum?action=list_threads&course_id=_144_1&forum_id=81&nav=discussion_board&conf_id=_164_1&content_id=_218_1&mode=view)  |
| Moodle  		| An instance of Moodle          | http://lrs.learninglocker.net/define/extensions/moodle_course  | [Logged in](recipes/login.md#verb)|
| Module type   | Moodle                         | http://xapi.jisc.ac.uk/extensions/moduleType | [Module-View - Object](recipes/Module-View.md#object)|
| External URL  | An external URL                | http://xapi.jisc.ac.uk/define/extensions/externalURL | | | 


### Context

Usage:

1.[Context.extensions](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI.md#416-context)


| Label  		| Description   | IRI    | Repository Usage
| ------------- | ------------- |------------------------------------------------------|----|
| Umbrella course area |  Umbrella course/parent area by its home page URI         | http://xapi.jisc.ac.uk/extensions/courseArea | |
| Application Type |            | http://xapi.jisc.ac.uk/extensions/applicationType | [Logged in](recipes/login.md#object)|
| Session id |  local session id       | http://xapi.jisc.ac.uk/extensions/sessionId | |

