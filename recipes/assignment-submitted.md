# VLE User Submits Assignment Recipe
Revision: 1.0

## Purpose
This activity records a user submitting an assignment
## Definition
### Actor

[Account](/common_statements.md#actor.account) is used as the identifer.  Account/Name to use is up to the sender, as long as it is resolvable, unique and persistant . Candidates include: vle id, the login name, and an other field with a student id in.


``` Javascript
{
    "version": "1.0.0",
    "actor": {
        "objectType": "Agent",
        "name": "madmin",
        "account": {
            "name": "2",
            "homePage": "https://courses.alpha.jisc.ac.uk/moodle"
        }
    },
```

### Verb

The Verb, [completed](/vocabulary.md#verbs) describes the action of completing an activity - finishing in its entirety. .

``` javascript
"verb": {
        "id": "http://adlnet.gov/expapi/verbs/completed",
        "display": {
            "en": "completed"
        }
    },
``` 


### Object
The object defines the activity that has been completed. [Examples of valid object.definition vocabulary on Activity objectTypes](/common_statements.md#object) can be found on the vocab page.

``` javascript


"object":{
		"objectType":"Activity",
		"id":"http://moodle.data.alpha.jisc.ac.uk/course/view.php?id=4",
		"definition":{
			"type":"http://adlnet.gov/expapi/activities/module",
			"name":{
				"en":"Course Assignment"
			},
			"description":{
				"en":"Course Assignment description"
				}
			},
			"extensions":{
			{
      			"http://xapi.jisc.ac.uk/extensions/courseArea": {
      		 		 "http://xapi.jisc.ac.uk/extensions/vle_mod_id": "LA101",
                	 "id":"http://moodle.data.alpha.jisc.ac.uk/course/view.php?id=4"
            	  },
				"http://xapi.jisc.ac.uk/extensions/duedate":{
				"duedate":"2016-02-05T17:59:45.000Z"
			}
			
		}
		
```


### Context



[Platform](/common_statements.md#context) identifies the platform, Moodle in this example.

[IP Address](https://registry.tincanapi.com/#uri/extension/310) is used to identify the client's real address as a Context extension.

SessionId is the VLE session Id

contextActivities has a context type of grouping. A course that relates to a assignment as the parent.

Plugin specific extensions are optional and not part of the core recipe.


``` javascript
"context": {
	"contextActivities":{
            "grouping":[
                {
                    "objectType":"Activity",
                    "id":"http://moodle.data.alpha.jisc.ac.uk/course/view.php?id=4",
                    "definition":{
                        "type":"http://adlnet.gov/expapi/activities/course",
                        "name":{
                            "en":"xAPI Basics"
                        },
                        "description":{
                            "en":"xAPI Basics course for Learning Analytics enthusiasts"
                        }
                    }
                }
            ]
        },
        
        "platform": "Moodle",
        "extensions": {
 			"http://xapi.jisc.ac.uk/extensions/sessionId": { 
                "sessionId": "32456891"  
             },
			 
            "http://id.tincanapi.com/extensions/ip-address": "10.3.3.48"
          
        }
```




### Complete VLE Specific Examples
[Blackboard Assignment Submitted Example](/vle/blackboard/assignment_submitted.json)

[Moodle Assignment Submitted Example](/vle/moodle/assignment_submitted.json)
