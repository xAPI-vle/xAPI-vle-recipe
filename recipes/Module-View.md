#Module/Block/Object View
Revision: Working Towards 1.0

##Purpose
An activity that shows that a user has viewed a vle resource such as a Moodle Module or Blackboard building block (eg a page as identified by its url)

### Actor
[Accounts](/common_statements.md#actor.account) is used as the identifer.  Account/Name to use is up to the sender, as long as it is resolvable, unique and persistant . Candidates include: vle id, the login name, and an other field with a student id in.

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

##Verb:

The Verb,[viewed](/vocabulary.md#verbs) denotes the action of the user's browser or app requesting the resource that the user wishes to view.

``` javascript
"verb": {
        "id": "http://id.tincanapi.com/verb/viewed",
        "display": {
            "en-GB": "viewed",
            "en-US": "viewed"
        }
    },
```
### Context

[Context](/common_statements.md#context) identifies the platform that is being logged into, Moodle in this example.

[IP Address](https://registry.tincanapi.com/#uri/extension/310) is used to identify the client's real address as a Context extension.

SessionId is the VLE session Id

CourseArea is the umbrella course/parent area identified by its home page URI 

Plugin specific extensions are optional and not part of the core recipe.


``` javascript
"context": {
        "platform": "Moodle",
        "extensions": 
       		 {
      		"http://xapi.jisc.ac.uk/extensions/courseArea": {
                 "id":"http://moodle.data.alpha.jisc.ac.uk/course/view.php?id=4"
              },
 			"http://xapi.jisc.ac.uk/extensions/sessionId": { 
                "sessionId": "32456891"  
             },
            "http://id.tincanapi.com/extensions/ip-address": {  
                "ip-address":"10.3.3.48"
              }
        }
```

## Object:
Needs to identify what was requested. A list of valid values can be found at [examples of object.definition.extensions](vocabulary#Object.definition.extension)

### Example Valid Values:
- http://xapi.jisc.ac.uk/define/vle/page [blackboard example]() [page example on University of Jisc](http://moodle.data.alpha.jisc.ac.uk/mod/page/view.php?id=9)
- http://xapi.jisc.ac.uk/define/vle/quiz [blackboard example]() [Quiz example on University of Jisc](http://moodle.data.alpha.jisc.ac.uk/mod/quiz/view.php?id=13)
- http://xapi.jisc.ac.uk/define/url


``` javascript
"object": {
	"objectType": "Activity",
	"id": "http://moodle.data.alpha.jisc.ac.uk/mod/quiz/view.php?id=13"   	 	//  unique id or url of the item being logged into
	"definition": {
		"type": "http://xapi.jisc.ac.uk/define/vle/quiz",			//  definition type as above
		 "name": { "en": "Sample Quiz" },			   //  name of item as returned by VLE
		"description": { "en": "Week one quiz"	 } //  description of item as returned by VLE
		"extensions": {
    				"http://xapi.jisc.ac.uk/extensions/moduleType":"http://xapi.jisc.ac.uk/define/vle/page",
            	 	}
	 }
}
```

### Complete VLE Specific Examples
[Moodle Example](/vle/moodle/moduleview.js)

[Blackboard Example](/vle/blackboard/examples.md)
