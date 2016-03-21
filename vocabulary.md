# JISC Learning Analytics Vocabulary
The following terms are in use in the Jisc LA recipes.

### Verbs

| Label  	   | Description | IRI  | Recipe Example 
| -------------| ----------- |------|----|
|  Logged in  | Logged in to some service  | [https://brindlewaye.com/xAPITerms/verbs/loggedin](https://brindlewaye.com/xAPITerms/verbs/loggedin)|[Logged in](recipes/login.md#verb) |
|  Logged out | Logged out of some service  | [https://brindlewaye.com/xAPITerms/verbs/loggedout](https://brindlewaye.com/xAPITerms/verbs/loggedout")|[Logged out](recipes/logout.md#verb) |
|  Viewed     | Indicates that the actor has viewed the object  |	[http://id.tincanapi.com/verb/viewed](http://id.tincanapi.com/verb/viewed) | [Object Viewed](recipes/Module-View.md#verb) |
|  Session timed out | Indicates the activity provider has determined that the session was abnormally terminated either by an actor or due to a system failure.  |	[https://w3id.org/xapi/adl/verbs/abandoned] (https://w3id.org/xapi/adl/verbs/abandoned) | [Object Viewed](recipes/Module-View.md#verb) |

### Activity Types

| Label  		| Description   | IRI    | Example Usage
| ------------- | ------------- |--------|----------------|
|  Application  | Represents any kind of software application   | [ http://activitystrea.ms/schema/1.0/application](http://activitystrea.ms/schema/1.0/application)  	|[Logged in](recipes/login.md#complete_example) |


### Object.definition 

| Label  		| Description   | IRI    | Example Usage
| ------------- | ------------- |--------|----------------|
| Module        | A module represents any “content aggregation” at least one level below the course level. Modules of modules can exist for layering purposes. Modules are not content. Modules are one level up from all content.          | [http://adlnet.gov/expapi/activities/module](http://adlnet.gov/expapi/activities/module) | [Module-View](recipes/Module-View.md#object) |


### Object.definition.extension 

| Label  		| Description | IRI  | Recipe Example  | Moodle Example | Blackboard Example
| ------------- | -------------------------------|--------|----|
| VLE        	| A virtual learning environment | http://xapi.jisc.ac.uk/define/extensions/vle       |     | |
| VLE content   |                                | http://xapi.jisc.ac.uk/define/extensions/vle/content | | |
| VLE page  	| Page within a VLE              | http://xapi.jisc.ac.uk/define/extensions/vle/page  | [Object View](recipes/Module-View.md#object) |[A page](http://moodle.data.alpha.jisc.ac.uk/mod/page/view.php?id=9)| |
| VLE quiz  	| Quiz within a VLE              | http://xapi.jisc.ac.uk/define/extensions/vle/quiz  | [Object View](recipes/Module-View.md#object) |[A quiz](http://moodle.data.alpha.jisc.ac.uk/mod/quiz/view.php?id=13)| |
| VLE forum  	| A VLE forum/discussion board   | http://xapi.jisc.ac.uk/define/extensions/vle/forum |                                              |[A forum](http://moodle.data.alpha.jisc.ac.uk/mod/forum/view.php?id=12)| [Discussion board](https://jisc.blackboard.com/webapps/discussionboard/do/forum?action=list_threads&course_id=_144_1&forum_id=81&nav=discussion_board&conf_id=_164_1&content_id=_218_1&mode=view)  |
| Moodle  		| An instance of Moodle          | http://lrs.learninglocker.net/define/extensions/moodle_course  | [Logged in](recipes/login.md#verb)|
| Module type   | Moodle                         | http://xapi.jisc.ac.uk/extensions/moduleType | [Module-View - Object](recipes/Module-View.md#object)|
| External URL  | An external URL                | http://xapi.jisc.ac.uk/define/extensions/externalURL | | | 
| Word Document | A Microsoft Word document      | http://xapi.jisc.ac.uk/define/extensions/documents/wordDocument | | |





## Jisc extensions
The following terms a newly minted in the http://xapi.jisc.ac.uk namespace. Note that the namespace URI may change.

| Label  		| Description   | IRI    | Example Usage
| ------------- | ------------- |------------------------------------------------------|----|
| Umbrella course area |  Umbrella course/parent area by its home page URI         | http://xapi.jisc.ac.uk/extensions/courseArea | |
| Application Type |            | http://xapi.jisc.ac.uk/extensions/applicationType | [Logged in](recipes/login.md#object)|
| Session id |  local session id       | http://xapi.jisc.ac.uk/extensions/sessionId | |


| Label  		 | Description   | IRI    | Blackboard Example | Moodle Example |
| ------------- | ------------- |------------------------------------------------------|----|----|





 
##Blackboard

### Verbs
