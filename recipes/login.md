# VLE User Logged In Recipe
Revision: 1.1

## Purpose
This activity records a user logging in to a VLE.
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

The Verb, [logged in](/vocabulary.md#verbs) describes the action of logging into a platform.

``` javascript
"verb": {
        "id": "https://brindlewaye.com/xAPITerms/verbs/loggedin/",
        "display": {
            "en" : "logged in to"
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
 			"http://xapi.jisc.ac.uk/sessionId": "32456891",
            "http://id.tincanapi.com/extensions/ip-address": "10.3.3.48"
              
        }
```



### Object

The object.definition.name and object.definition.definition describe the resource returned to the user after they have performed the logged in event. The object.definition.extensions.[applicationType](http://xapi.jisc.ac.uk/applicationType) is used to identify the system type that is being logged into: a lms, identified by  http://id.tincanapi.com/activitytype/lms


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
                "http://xapi.jisc.ac.uk/applicationType": "http://id.tincanapi.com/activitytype/lms"
                }
            }
        },
```

### Complete VLE Specific Examples
[Moodle Login Example](/vle/moodle/login.js)

[Blackboard Login Example](/vle/blackboard/loggedin.json)
