# JISC Learning Analytics Vocabulary
The following terms are in use in the Jisc learning analytics recipes.
NOTE: The xapi.jisc.ac.uk namespace URI may change.

## 1.0 Verbs

Usage:
- [verb.id](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI.md#verb) -Corresponds to a Verb definition.

### 1.1 Logged in
<table>
<tr><th align="left">Label</th><td>Logged in</td></tr>
<tr><th align="left">Description</th><td>Logged in to some service </td></tr>
<tr><th align="left">IRI</th><td> <a href="https://brindlewaye.com/xAPITerms/verbs/loggedin"> https://brindlewaye.com/xAPITerms/verbs/loggedin </a> </td></tr>
<tr><th align="left">Recipe Example</th><td> <a href="recipes/login.md#verb">Logged in</a> </td></tr>
</table>

### 1.2 Logged out
<table>
<tr><th align="left">Label</th><td>Logged out</td></tr>
<tr><th align="left">Description</th><td>Logged out of some service</td></tr>
<tr><th align="left">IRI</th><td> <a href="https://brindlewaye.com/xAPITerms/verbs/loggedout"> https://brindlewaye.com/xAPITerms/verbs/loggedout </a> </td></tr>
<tr><th align="left">Recipe Example</th><td> <a href="recipes/logout.md#verb">Logged out</a> </td></tr>
</table>

### 1.3 Viewed
<table>
<tr><th align="left">Label</th><td>Viewed</td></tr>
<tr><th align="left">Description</th><td>Indicates that the actor has viewed the object</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://id.tincanapi.com/verb/viewed"> http://id.tincanapi.com/verb/viewed</a> </td></tr>
<tr><th align="left">Recipe Example</th><td> <a href="recipes/Module-View.md#verb">Object Viewed</a> </td></tr>
</table>

### 1.4 Session timed out
<table>
<tr><th align="left">Label</th><td>Session timed out</td></tr>
<tr><th align="left">Description</th><td>IIndicates the activity provider has determined that the session was abnormally terminated either by an actor or due to a system failure. </td></tr>
<tr><th align="left">IRI</th><td> <a href="https://w3id.org/xapi/adl/verbs/abandoned">https://w3id.org/xapi/adl/verbs/abandoned</a> </td></tr>
<tr><th align="left">Recipe Example</th><td> <a href="recipes/Session-timeout.md#verb">Session Timeout</a> </td></tr>
</table>

### 1.5 Completed
<table>
<tr><th align="left">Label</th><td>Completed</td></tr>
<tr><th align="left">Description</th><td>Completing an activity - finishing in its entirety</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://adlnet.gov/expapi/verbs/completed">http://adlnet.gov/expapi/verbs/completed</a> </td></tr>
<tr><th align="left">Recipe Example</th><td> <a href="recipes/assignment-submitted.md">Assignment submitted</a> </td></tr>
</table>

### 1.6 Scored
<table>
<tr><th align="left">Label</th><td>Scored</td></tr>
<tr><th align="left">Description</th><td>Indicates a numerical value related to an actor's performance on an activity.</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://adlnet.gov/expapi/verbs/scored">http://adlnet.gov/expapi/verbs/scored</a> </td></tr>
<tr><th align="left">Recipe Example</th><td> <a href="recipes/assignment-graded.md#verb">Assignment Graded</a> </td></tr>
</table>

## 2.0 Result

Usage:

- [results.extensions](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI.md#result

### 2.1 Grade

<table>
<tr><th align="left">Label</th><td>Scored</td></tr>
<tr><th align="left">Description</th><td>A non-numerical assessment result. Data type is string (256)</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/grade">http://xapi.jisc.ac.uk/grade</a> </td></tr>
<tr><th align="left">Recipe Example</th><td> <a href="recipes/assignment-graded.md#verb">Assignment Graded</a> </td></tr>
</table>


## 3.0 Object

Usage:
objects for:
- [object.definition.type](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI.md#activity-definition) -The type of Activity.


### 3.1 Application

<table>
<tr><th align="left">Label</th><td>Application</td></tr>
<tr><th align="left">Description</th><td>Represents any kind of software application</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://activitystrea.ms/schema/1.0/application">http://activitystrea.ms/schema/1.0/application</a> </td></tr>
<tr><th align="left">Recipe Example</th><td> <a href="recipes/login.md#complete_example">Logged in</a> </td></tr>
</table>


### 3.2 Module

<table>
<tr><th align="left">Label</th><td>Module</td></tr>
<tr><th align="left">Description</th><td>A module represents any “content aggregation” at least one level below the course level. Modules of modules can exist for layering purposes. Modules are not content. Modules are one level up from all content. </td></tr>
<tr><th align="left">IRI</th><td> <a href="http://adlnet.gov/expapi/activities/module">http://adlnet.gov/expapi/activities/module</a> </td></tr>
<tr><th align="left">Recipe Example</th><td> <a href="recipes/Module-View.md#object">Module-View</a> </td></tr>
</table>

Usage:

atomic values for:
- [object.definition.type](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI.md#activity-definition)

### 3.2 VLE

<table>
<tr><th align="left">Label</th><td>VLE</td></tr>
<tr><th align="left">Description</th><td>Learning Management System. At it's core, a platform used to launch and track learning experiences.</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://id.tincanapi.com/activitytype/lms ">http://id.tincanapi.com/activitytype/lms </a> </td></tr>
</table>

### 3.3 VLE content

<table>
<tr><th align="left">Label</th><td>VLE content</td></tr>
<tr><th align="left">Description</th><td>Any generic resource in a VLE</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/vle/content">http://xapi.jisc.ac.uk/vle/content</a> </td></tr>
</table>

### 3.4 VLE page

<table>
<tr><th align="left">Label</th><td>VLE Page</td></tr>
<tr><th align="left">Description</th><td>Any page within a VLE that isn't designed to be learning content. e.g. navigation or administration pages   </td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/vle/page">http://xapi.jisc.ac.uk/vle/page</a> </td></tr>
<tr><th align="left">Example in Recipe</th><td> <a href="recipes/Module-View.md#object">Module-View</a> </td></tr>
<tr><th align="left">UI Example</th><td> <a href="http://moodle.data.alpha.jisc.ac.uk/mod/page/view.php?id=9">A page on University of Jisc</a> </td></tr>
</table>

### 3.5 VLE Quiz

<table>
<tr><th align="left">Label</th><td>VLE Quiz</td></tr>
<tr><th align="left">Description</th><td>Quiz within a VLE</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/vle/quiz">http://xapi.jisc.ac.uk/vle/quiz</a> </td></tr>
<tr><th align="left">Example in Recipe</th><td> <a href="recipes/Module-View.md#object">Module-View</a> </td></tr>
<tr><th align="left">UI Example</th><td> <a href="http://moodle.data.alpha.jisc.ac.uk/mod/page/view.php?id=13">A quiz on University of Jisc</a> </td></tr>
</table>

### 3.6 VLE Forum

<table>
<tr><th align="left">Label</th><td>VLE forum</td></tr>
<tr><th align="left">Description</th><td>A VLE forum/discussion board</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/vle/forum">http://xapi.jisc.ac.uk/vle/forum</a> </td></tr>
<tr><th align="left">UI Example (Moodle)</th><td> <a href="http://moodle.data.alpha.jisc.ac.uk/mod/forum/view.php?id=12">A forum on University of Jisc</a> </td></tr>
<tr><th align="left">UI Example (Blackboard)</th><td> <a href="https://jisc.blackboard.com/webapps/discussionboard/do/forum?action=list_threads&course_id=_144_1&forum_id=81&nav=discussion_board&conf_id=_164_1&content_id=_218_1&mode=view)">A discussion board on University of Jisc</a> </td></tr>
</table>

### 3.7 External URL

<table>
<tr><th align="left">Label</th><td>External URL</td></tr>
<tr><th align="left">Description</th><td>An external URL</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/externalURL">http://xapi.jisc.ac.uk/externalURL</a> </td></tr>
</table>


### 3.8 File

<table>
<tr><th align="left">Label</th><td>File</td></tr>
<tr><th align="left">Description</th><td>Accessing any kind of non-web native file type. e.g. MS office, video or audio. </td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/vle/file">http://xapi.jisc.ac.uk/vle/forum</a> </td></tr>
</table>

Usage:
- [object.definition.extensions](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI.md#object) 


### 3.9 Due Date

<table>
<tr><th align="left">Label</th><td>Due Date</td></tr>
<tr><th align="left">Description</th><td>Date object is due to be submitted. Format is ISO 8601 date time . </td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/dueDate">http://xapi.jisc.ac.uk/dueDate</a> </td></tr>
</table>

### 3.10 Application Tyle

<table>
<tr><th align="left">Label</th><td>Application Type </td></tr>
<tr><th align="left">Description</th><td>Identifies the genre of software application </td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/applicationType">http://xapi.jisc.ac.uk/applicationType</a> </td></tr>
<tr><th align="left">Example in Recipe</th><td> <a href="recipes/login.md#object">Logged in</a> </td></tr>
</table>


## 4. Context

Usage:
- [Context.extensions](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI.md#416-context)


### 4.1 Umbrella course area

<table>
<tr><th align="left">Label</th><td>Umbrella course area</td></tr>
<tr><th align="left">Description</th><td> Umbrella course/parent area by its home page URI </td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/courseArea">http://xapi.jisc.ac.uk/courseArea</a> </td></tr>
</table>

### 4.2 Session id

<table>
<tr><th align="left">Label</th><td>Session id</td></tr>
<tr><th align="left">Description</th><td>local session id</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/sessionId">http://xapi.jisc.ac.uk/sessionId</a> </td></tr>
</table>

### 4.3 IP address

<table>
<tr><th align="left">Label</th><td>Session id</td></tr>
<tr><th align="left">Description</th><td>client's address location on internet</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://id.tincanapi.com/extension/ip-address">http://id.tincanapi.com/extension/ip-address</a> </td></tr>
</table>

### 4.4 Recipe Version

<table>
<tr><th align="left">Label</th><td>Recipe Version</td></tr>
<tr><th align="left">Description</th><td>Version of Recipe used. Version number can be found on recipe page</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/recipeVersion">http://xapi.jisc.ac.uk/recipeVersion</a> </td></tr>
</table>

- Context.extensions.courseArea
 
### 4.5 VLE Module ID

<table>
<tr><th align="left">Label</th><td>VLE Module ID</td></tr>
<tr><th align="left">Description</th><td><a href="https://github.com/jiscdev/analytics-udd/blob/5b86250306098be22fa32d037a555cc185bc5615/udd/module_vle_map.md  ">Entity that connects a course area in a VLE with a module</a></td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/vle_mod_id">http://xapi.jisc.ac.uk/vle_mod_id</a> </td></tr>
</table>
