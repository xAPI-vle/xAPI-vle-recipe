# VLE Session timed Out Recipe
Revision: Working Towards 1.0

## Purpose
This activity indicates the activity provider has determined that the session was abnormally terminated either by an actor or due to a system failure.
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

The Verb,[abandoned](/vocabulary.md#verbs) describes the action of logging out of a platform.

``` javascript
"verb": {
        "id": "https://w3id.org/xapi/adl/verbs/abandoned",
        "display": {
            "en": "session timed out"
        }
    },
``` 

### Context
[Context](/common_statements.md#context) identifies the platform that is being logged into, Moodle in this example.

[IP Address](https://registry.tincanapi.com/#uri/extension/310) is used to identify the client's real address as a Context extension.

SessionId is the VLE session Id

Plugin specific extensions are optional and not part of the core recipe.


``` javascript
"context": {
        "platform": "Moodle",
        "extensions": {
 			"http://xapi.jisc.ac.uk/extensions/sessionId": "32456891",
			 
            "http://id.tincanapi.com/extensions/ip-address" :"10.3.3.48"
              
        }
```

### Object


The object defines the item that the user has timed out of.  A [Jisc specific extension](common_statements.md#jisc_extensions) details that it is a VLE that is being logged out of 
``` javascript

"object": {
        "objectType": "Activity",
        "id": "https://courses.alpha.jisc.ac.uk/moodle",
        "definition": {
            "type": "http://activitystrea.ms/schema/1.0/application",
            "name": {
                "en": "A Moodle course"
            },
            "description": {
                "en": "A Moodle course"
            },
            "extensions": {
                "http://xapi.jisc.ac.uk/extensions/applicationType": {
                    "type": "http://id.tincanapi.com/activitytype/lms"
                }
            }
        }
    },
```


### Complete VLE Specific Examples
Moodle (ToDo)

[Blackboard](blackboard/loggedout.json)
