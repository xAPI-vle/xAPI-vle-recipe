# JISC Learning Analytics Statements and Vocabulary
The following terms are in use in the Jisc learning analytics recipes.
NOTE: The xapi.jisc.ac.uk namespace URI may change.

## 1.0 Vocabulary

### 1.1 Verbs

Example of a verb entity:

``` javascript
"verb": {
        "id": "https://brindlewaye.com/xAPITerms/verbs/loggedin/",
        "display": {
            "en" : "logged in to"
        }
    },
``` 

The following [xAPI verbs](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI.md#verb) are defined:

### Logged in
<table>
<tr><th align="left">Verb</th><td>Logged in</td></tr>
<tr><th align="left">Description</th><td>Logged in to some service </td></tr>
<tr><th align="left">IRI</th><td> <a href="https://brindlewaye.com/xAPITerms/verbs/loggedin"> https://brindlewaye.com/xAPITerms/verbs/loggedin </a> </td></tr>
<tr><th align="left">Recipe Example</th><td> <a href="recipes/login.md#verb">Logged in</a> </td></tr>
</table>

### Logged out
<table>
<tr><th align="left">Verb</th><td>Logged out</td></tr>
<tr><th align="left">Description</th><td>Logged out of some service</td></tr>
<tr><th align="left">IRI</th><td> <a href="https://brindlewaye.com/xAPITerms/verbs/loggedout"> https://brindlewaye.com/xAPITerms/verbs/loggedout </a> </td></tr>
<tr><th align="left">Recipe Example</th><td> <a href="recipes/logout.md#verb">Logged out</a> </td></tr>
</table>

### Viewed
<table>
<tr><th align="left">Verb</th><td>Viewed</td></tr>
<tr><th align="left">Description</th><td>Indicates that the actor has viewed the object</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://id.tincanapi.com/verb/viewed"> http://id.tincanapi.com/verb/viewed</a> </td></tr>
<tr><th align="left">Recipe Example</th><td> <a href="recipes/Module-View.md#verb">Object Viewed</a> </td></tr>
</table>

### Session timed out
<table>
<tr><th align="left">Verb</th><td>Session timed out</td></tr>
<tr><th align="left">Description</th><td>IIndicates the activity provider has determined that the session was abnormally terminated either by an actor or due to a system failure. </td></tr>
<tr><th align="left">IRI</th><td> <a href="https://w3id.org/xapi/adl/verbs/abandoned">https://w3id.org/xapi/adl/verbs/abandoned</a> </td></tr>
<tr><th align="left">Recipe Example</th><td> <a href="recipes/Session-timeout.md#verb">Session Timeout</a> </td></tr>
</table>

### Completed
<table>
<tr><th align="left">Verb</th><td>Completed</td></tr>
<tr><th align="left">Description</th><td>Completing an activity - finishing in its entirety</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://adlnet.gov/expapi/verbs/completed">http://adlnet.gov/expapi/verbs/completed</a> </td></tr>
<tr><th align="left">Recipe Example</th><td> <a href="recipes/assignment-submitted.md">Assignment submitted</a> </td></tr>
</table>

### Scored
<table>
<tr><th align="left">Verb</th><td>Scored</td></tr>
<tr><th align="left">Description</th><td>Indicates a numerical value related to an actor's performance on an activity.</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://adlnet.gov/expapi/verbs/scored">http://adlnet.gov/expapi/verbs/scored</a> </td></tr>
<tr><th align="left">Recipe Example</th><td> <a href="recipes/assignment-graded.md#verb">Assignment Graded</a> </td></tr>
</table>

## 1.1.1 Result

In the Jisc profile, the use of the [result entity](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI.md#result) and any of its properties is optional, such as in the [recipes/assignment-graded.md#verb](assignment graded recipe#result) example.

Example:


``` javascript
 "result":{
        "score":{
            "raw":8
                }
        "extensions": {
        	"http://xapi.jisc.ac.uk/grade":"5 stars"
        	}
    },
```

### extensions

### 1.2.1 Result Extensions

The following are extension properties in the result entity:

### Grade

<table>
<tr><th align="left">Label</th><td>Scored</td></tr>
<tr><th align="left">Description</th><td>A non-numerical assessment result. Data type is string (256)</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/grade">http://xapi.jisc.ac.uk/grade</a> </td></tr>
<tr><th align="left">Recipe Example</th><td> <a href="recipes/assignment-graded.md#verb">Assignment Graded</a> </td></tr>
</table>


## 1.3 Object


### 1.3.1 Activity Types
The following are types of the [Activity Definition Object](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI.md#activity-definition). 

Example:
``` javascript
"object": {
	"objectType": "Activity",
	"id": "http://moodle.data.alpha.jisc.ac.uk/mod/quiz/view.php?id=13" 
	"definition": {
		"type": "http://xapi.jisc.ac.uk/define/vle/page",			//  activity type 
		"name": { "en": "Sample page" },			   
		"description": { "en": "sample page" } 
	 }
}
```


### Application

<table>
<tr><th align="left">Label</th><td>Application</td></tr>
<tr><th align="left">Description</th><td>Represents any kind of software application</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://activitystrea.ms/schema/1.0/application">http://activitystrea.ms/schema/1.0/application</a> </td></tr>
<tr><th align="left">Recipe Example</th><td> <a href="recipes/login.md#complete_example">Logged in</a> </td></tr>
</table>


### Module

<table>
<tr><th align="left">Label</th><td>Module</td></tr>
<tr><th align="left">Description</th><td>A module represents any “content aggregation” at least one level below the course level. Modules of modules can exist for layering purposes. Modules are not content. Modules are one level up from all content. </td></tr>
<tr><th align="left">IRI</th><td> <a href="http://adlnet.gov/expapi/activities/module">http://adlnet.gov/expapi/activities/module</a> </td></tr>
<tr><th align="left">Recipe Example</th><td> <a href="recipes/Module-View.md#object">Module-View</a> </td></tr>
</table>

### VLE

<table>
<tr><th align="left">Label</th><td>VLE</td></tr>
<tr><th align="left">Description</th><td>Learning Management System. At it's core, a platform used to launch and track learning experiences.</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://id.tincanapi.com/activitytype/lms ">http://id.tincanapi.com/activitytype/lms </a> </td></tr>
</table>

### VLE content

<table>
<tr><th align="left">Label</th><td>VLE content</td></tr>
<tr><th align="left">Description</th><td>Any generic resource in a VLE</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/vle/content">http://xapi.jisc.ac.uk/vle/content</a> </td></tr>
</table>

### VLE page

<table>
<tr><th align="left">Label</th><td>VLE Page</td></tr>
<tr><th align="left">Description</th><td>Any page within a VLE that isn't designed to be learning content. e.g. navigation or administration pages   </td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/vle/page">http://xapi.jisc.ac.uk/vle/page</a> </td></tr>
<tr><th align="left">Example in Recipe</th><td> <a href="recipes/Module-View.md#object">Module-View</a> </td></tr>
<tr><th align="left">UI Example</th><td> <a href="http://moodle.data.alpha.jisc.ac.uk/mod/page/view.php?id=9">A page on University of Jisc</a> </td></tr>
</table>

### VLE Quiz

<table>
<tr><th align="left">Label</th><td>VLE Quiz</td></tr>
<tr><th align="left">Description</th><td>Quiz within a VLE</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/vle/quiz">http://xapi.jisc.ac.uk/vle/quiz</a> </td></tr>
<tr><th align="left">Example in Recipe</th><td> <a href="recipes/Module-View.md#object">Module-View</a> </td></tr>
<tr><th align="left">UI Example</th><td> <a href="http://moodle.data.alpha.jisc.ac.uk/mod/page/view.php?id=13">A quiz on University of Jisc</a> </td></tr>
</table>

### VLE Forum

<table>
<tr><th align="left">Label</th><td>VLE forum</td></tr>
<tr><th align="left">Description</th><td>A VLE forum/discussion board</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/vle/forum">http://xapi.jisc.ac.uk/vle/forum</a> </td></tr>
<tr><th align="left">UI Example (Moodle)</th><td> <a href="http://moodle.data.alpha.jisc.ac.uk/mod/forum/view.php?id=12">A forum on University of Jisc</a> </td></tr>
<tr><th align="left">UI Example (Blackboard)</th><td> <a href="https://jisc.blackboard.com/webapps/discussionboard/do/forum?action=list_threads&course_id=_144_1&forum_id=81&nav=discussion_board&conf_id=_164_1&content_id=_218_1&mode=view)">A discussion board on University of Jisc</a> </td></tr>
</table>

### External URL

<table>
<tr><th align="left">Label</th><td>External URL</td></tr>
<tr><th align="left">Description</th><td>An external URL</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/externalURL">http://xapi.jisc.ac.uk/externalURL</a> </td></tr>
</table>

### File

<table>
<tr><th align="left">Label</th><td>File</td></tr>
<tr><th align="left">Description</th><td>Accessing any kind of non-web native file type. e.g. MS office, video or audio. </td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/vle/file">http://xapi.jisc.ac.uk/vle/forum</a> </td></tr>
</table>

## 1.3.1 Object Definition Extensions
The following are used in [object.definition.extensions](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI.md#object). See the [Assignment Graded](recipes/assignment-graded.md#verb)



### Due Date

<table>
<tr><th align="left">Label</th><td>Due Date</td></tr>
<tr><th align="left">Description</th><td>Date object is due to be submitted. Format is ISO 8601 date time . </td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/dueDate">http://xapi.jisc.ac.uk/dueDate</a> </td></tr>
<tr><th align="left">Data Type</th><td>String</td></tr>
<tr><th align="left">Value Space</th><td>ISO 8601 date time</td></tr>
<tr><th align="left">Sample Value</th><td></td></tr>
</table>

### Application Type

<table>
<tr><th align="left">Label</th><td>Application Type </td></tr>
<tr><th align="left">Description</th><td>Identifies the genre of software application </td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/applicationType">http://xapi.jisc.ac.uk/applicationType</a> </td></tr>
<tr><th align="left">Example in Recipe</th><td> <a href="recipes/login.md#object">Logged in</a> </td></tr>
<tr><th align="left">Data Type</th><td>  </td></tr>
<tr><th align="left">Sample Value</th><td> </td></tr>
</table>

## 1.4 Context


## 1.4.1 Context Extensions
The following are properties of the [Context extensions property](https://github.com/adlnet/xAPI-Spec/blob/master/xAPI.md#416-context).
(but not umberlla course area)

### Umbrella course area

<table>
<tr><th align="left">Label</th><td>Umbrella course area</td></tr>
<tr><th align="left">Description</th><td> Umbrella course/parent area by its home page URI </td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/courseArea">http://xapi.jisc.ac.uk/courseArea</a> </td></tr>
<tr><th align="left">Data Type</th><td>A JSON Object</td></tr>
<tr><th align="left">Value Space</th><td>JSON Object with properties vle_mod_id and/or id </td></tr>
<tr><th align="left">Sample Value</th><td> { "http://xapi.jisc.ac.uk/vle_mod_id": "LA101", "id":"http://moodle.data.alpha.jisc.ac.uk/course/view.php?id=4"},</td></tr>
</table>

### Session id

<table>
<tr><th align="left">Label</th><td>Session id</td></tr>
<tr><th align="left">Description</th><td>local session id</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/sessionId">http://xapi.jisc.ac.uk/sessionId</a> </td></tr>
<tr><th align="left">Data Type</th><td>String</td></tr>
<tr><th align="left">Value Space</th><td>Session id as reported by the VLE</td></tr
<tr><th align="left">Sample Value</th><td>32456891</td></tr>
</table>

### IP address

<table>
<tr><th align="left">Label</th><td>Session id</td></tr>
<tr><th align="left">Description</th><td>client's address location on internet</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://id.tincanapi.com/extension/ip-address">http://id.tincanapi.com/extension/ip-address</a> </td></tr>
<tr><th align="left">Data Type</th><td>String </td></tr>
<tr><th align="left">Value Space</th><td>(IP address) in either IPv4 or IPv6 format</td></tr>
<tr><th align="left">Sample Value</th><td>10.3.3.48</td></tr>
</table>


### Recipe Version

<table>
<tr><th align="left">Label</th><td>Recipe Version</td></tr>
<tr><th align="left">Description</th><td>Version of Recipe used. Version number can be found on recipe page</td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/recipeVersion">http://xapi.jisc.ac.uk/recipeVersion</a> </td></tr>
<tr><th align="left">Data Type</th><td>String</td></tr>
<tr><th align="left">Value Space</th><td>Version number found on recipe page, follows Semantic versioning.</td></tr>
<tr><th align="left">Sample Value</th><td>1.0</td></tr>
</table>

## 1.4.2 CourseArea properties
The following are properties of  Context.extensions.courseArea

- Context.extensions.courseArea
 
### VLE Module ID

http://xapi.jisc.ac.uk/extensions/vle_mod_id is a plugin specific extension, to hold the VLE course's module id, as defined in the [Jisc UDD](https://github.com/jiscdev/analytics-udd/blob/master/udd/module_vle_map.md). It is therefore not required. 

<table>
<tr><th align="left">Label</th><td>VLE Module ID</td></tr>
<tr><th align="left">Description</th><td><a href="https://github.com/jiscdev/analytics-udd/module_vle_map.md  ">Entity that connects a course area in a VLE with a module</a></td></tr>
<tr><th align="left">IRI</th><td> <a href="http://xapi.jisc.ac.uk/vle_mod_id">http://xapi.jisc.ac.uk/vle_mod_id</a> </td></tr>
</table>

## 2.0 Version Changes / identifer mappings

### v0.2


| V0.1  		| v0.2                    		 | 
| ------------- | -------------------------------|
| http://xapi.jisc.ac.uk/define/extensions/vle/content  | http://xapi.jisc.ac.uk/vle/content
| http://xapi.jisc.ac.uk/define/extensions/vle/page     | http://xapi.jisc.ac.uk/vle/page  
| http://xapi.jisc.ac.uk/define/extensions/vle/quiz     | http://xapi.jisc.ac.uk/vle/quiz  
| http://xapi.jisc.ac.uk/define/extensions/vle/forum    | http://xapi.jisc.ac.uk/vle/forum  
| http://xapi.jisc.ac.uk/define/extensions/externalURL  | http://xapi.jisc.ac.uk/externalURL
| http://xapi.jisc.ac.uk/extensions/courseArea | http://xapi.jisc.ac.uk/courseArea	
| http://xapi.jisc.ac.uk/extensions/sessionId  | http://xapi.jisc.ac.uk/sessionId 
| http://xapi.jisc.ac.uk/extensions/recipeVersion | http://xapi.jisc.ac.uk/recipeVersion
| http://xapi.jisc.ac.uk/extensions/applicationType | http://xapi.jisc.ac.uk/applicationType
| http://xapi.jisc.ac.uk/extensions/duedate  | http://xapi.jisc.ac.uk/dueDate
| http://xapi.jisc.ac.uk/define/vle   		 | http://id.tincanapi.com/activitytype/lms        
| http://www.tincanapi.co.uk/verbs/evaluated | http://adlnet.gov/expapi/verbs/scored 

## 3.0 Common Properties