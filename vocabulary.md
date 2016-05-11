# JISC Learning Analytics Vocabulary
The following terms are in use in the Jisc learning analytics recipes.
NOTE: The xapi.jisc.ac.uk namespace URI may change.

### 1.0 Verbs

Usage:

- [verb.id](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI.md#verb) -Corresponds to a Verb definition.

<table>
<tr><th align="left">Verb</th><td>Logged in</td></tr>
<tr><th align="left">Display</th><td>Logged in to some service </td></tr>
<tr><th align="left">IRI</th><td> [https://brindlewaye.com/xAPITerms/verbs/loggedin](https://brindlewaye.com/xAPITerms/verbs/loggedin) </td></tr>
<tr><th align="left">Recipe</th><td>[Logged in](recipes/login.md#verb) </td></tr>
</table>


| Label  	   | Description | IRI  | Recipe Example 
| -------------| ----------- |------|--------|
|  Logged in  | Logged in to some service  | [https://brindlewaye.com/xAPITerms/verbs/loggedin](https://brindlewaye.com/xAPITerms/verbs/loggedin)|[Logged in](recipes/login.md#verb) |
|  Logged out | Logged out of some service  | [https://brindlewaye.com/xAPITerms/verbs/loggedout](https://brindlewaye.com/xAPITerms/verbs/loggedout")|[Logged out](recipes/logout.md#verb) |
|  Viewed     | Indicates that the actor has viewed the object  |	[http://id.tincanapi.com/verb/viewed](http://id.tincanapi.com/verb/viewed) | [Object Viewed](recipes/Module-View.md#verb) |
|  Session timed out | Indicates the activity provider has determined that the session was abnormally terminated either by an actor or due to a system failure.  |	[https://w3id.org/xapi/adl/verbs/abandoned] (https://w3id.org/xapi/adl/verbs/abandoned) | [Session Timeout](recipes/Session-timeout.md#verb) |
|  Completed |  Completing an activity - finishing in its entirety  |	[http://adlnet.gov/expapi/verbs/completed] (http://adlnet.gov/expapi/verbs/completed) | [Assignment submitted](recipes/assignment-submitted.md) |
|  Scored |  Indicates a numerical value related to an actor's performance on an activity. |	[http://adlnet.gov/expapi/verbs/scored](http://adlnet.gov/expapi/verbs/scored) | [Assignment Graded](recipes/assignment-graded.md#verb) |

### Result

Usage:

- [results.extensions](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI.md#result)

| Label  		| Description   | IRI    | Recipe example
| ------------- | ------------- |--------|----------------|
| Grade     | A non-numerical assessment result. Data type is string (256) |  http://xapi.jisc.ac.uk/grade |  |

### Object


Usage:

objects for:
- [object.definition.type](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI.md#activity-definition) -The type of Activity.

| Label  		| Description   | IRI    | Recipe example
| ------------- | ------------- |--------|----------------|
| Application   | Represents any kind of software application   | [ http://activitystrea.ms/schema/1.0/application](http://activitystrea.ms/schema/1.0/application)  	|[Logged in](recipes/login.md#complete_example) |
| Module        | A module represents any “content aggregation” at least one level below the course level. Modules of modules can exist for layering purposes. Modules are not content. Modules are one level up from all content.          | [http://adlnet.gov/expapi/activities/module](http://adlnet.gov/expapi/activities/module) | [Module-View](recipes/Module-View.md#object) |


Usage:

atomic values for:
- [object.definition.type](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI.md#activity-definition)

| Label  		| Description                    | IRI    | Recipe Example  | Moodle User Interface Example | Blackboard User Interface Example
| ------------- | -------------------------------|--------|---------------------|----------------|-------------------|
| VLE        	| Learning Management System. At it's core, a platform used to launch and track learning experiences. | http://id.tincanapi.com/activitytype/lms      |     | |
| VLE content   |   Any generic resource in a VLE   | http://xapi.jisc.ac.uk/vle/content | | |
| VLE page  	| Any page within a VLE that isn't designed to be learning content. e.g. navigation or administration pages              | http://xapi.jisc.ac.uk/vle/page  | [Object View](recipes/Module-View.md#object) |[A page](http://moodle.data.alpha.jisc.ac.uk/mod/page/view.php?id=9)| |
| VLE quiz  	| Quiz within a VLE              | http://xapi.jisc.ac.uk/vle/quiz  | [Object View](recipes/Module-View.md#object) |[A quiz](http://moodle.data.alpha.jisc.ac.uk/mod/quiz/view.php?id=13)| |
| VLE forum  	| A VLE forum/discussion board   | http://xapi.jisc.ac.uk/vle/forum |                                              |[A forum](http://moodle.data.alpha.jisc.ac.uk/mod/forum/view.php?id=12)| [Discussion board](https://jisc.blackboard.com/webapps/discussionboard/do/forum?action=list_threads&course_id=_144_1&forum_id=81&nav=discussion_board&conf_id=_164_1&content_id=_218_1&mode=view)  |
| External URL  | An external URL                | http://xapi.jisc.ac.uk/externalURL | | | 
| File   | Accessing any kind of non-web native file type. e.g. MS office, video or audio.           | http://xapi.jisc.ac.uk/vle/file | | | 

Usage:
- [object.definition.extensions](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI.md#object) 

| Label  		| Description                    | IRI    | Recipe Example  | Moodle User Interface Example | Blackboard User Interface Example
| ------------- | -------------------------------|--------|---------------------|----------------|-------------------|
| Due Date        	| Date object is due to be submitted. Format is ISO 8601 date time | http://xapi.jisc.ac.uk/dueDate      |     | |
| Application Type |  Identifies the genre of software application  | http://xapi.jisc.ac.uk/applicationType | [Logged in](recipes/login.md#object)|


### Context

Usage:
- [Context.extensions](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI.md#416-context)


| Label  		| Description   | IRI    | Recipe example
| ------------- | ------------- |------------------------------------------------------|----|
| Umbrella course area |  Umbrella course/parent area by its home page URI         | http://xapi.jisc.ac.uk/courseArea | |
| Session id 	|  local session id       | http://xapi.jisc.ac.uk/sessionId | |
| IP address	|  client's address location on internet     | http://id.tincanapi.com/extension/ip-address | |
| Recipe Version|  Version of Recipe used. Version number can be found on recipe page    | http://xapi.jisc.ac.uk/recipeVersion | |

- Context.extensions.courseArea

| Label  		| Description   | IRI    | Recipe example
| ------------- | ------------- |------------------------------------------------------|----|
| VLE Module ID |  [Entity that connects a course area in a VLE with a module](https://github.com/jiscdev/analytics-udd/blob/5b86250306098be22fa32d037a555cc185bc5615/udd/module_vle_map.md)         | http://xapi.jisc.ac.uk/vle_mod_id | |
