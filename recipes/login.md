# VLE User Logged In Recipe
Revision: Working Towards 1.0

## Purpose
This activity records a user logging in to a VLE.
## Definition
### Actor

[Account](/common_statements.md#actor.account) is used as the identifer.  Account/Name is the internal identifier used by the VLE.
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
            "en-GB": "logged in to",
            "en-US": "logged in to"
        }
    },
``` 
### Context

[Context identifies](/common_statements.md#context) the platform that is being logged into, Moodle in this example.  Plugin specific extensions are optional and not part of the core recipe.

``` javascript
"context": {
        "platform": "Moodle",
        "extensions": {
            }
        }
    },
```
### Object

The object defines the item that the user hits when they login into a VLE.   A [Jisc specific extension](/common_statements.md#jisc_extensions) details that it is a VLE that is being logged into 

``` javascript

"object": {
        "objectType": "Activity",
        "id": "https://courses.alpha.jisc.ac.uk/moodle",
        "definition": {
            "type": "http://activitystrea.ms/schema/1.0/application",
            "name": {
                "en-GB": "A Moodle course",
                "en-US": "A Moodle course"
            },
            "description": {
                "en-GB": "A Moodle course",
                "en-US": "A Moodle course"
            },
            "extensions": {
                "http://xapi.jisc.ac.uk/extensions/applicationType": {
                    "type": "http://xapi.jisc.ac.uk/define/vle"
                }
            }
        }
    },
```

### Complete VLE Specific Examples
[Moodle Login Example](/vle/moodle/login.js)

[Blackboard Login Example](/vle/blackboard/loggedin.js)
