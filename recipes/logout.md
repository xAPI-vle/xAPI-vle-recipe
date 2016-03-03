# VLE User Logged Out Recipe
Revision: Working Towards 1.0

## Purpose
This activity records a user logging out of a VLE.
## Definition
### Actor

[Account](common_statements.md#actor.account) is used as the identifer.  Account/Name is the internal identifier used by the VLE.
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

The Verb,[logged out](vocabulary.md#verbs) describes the action of logging out of a platform.

``` javascript
"verb": {
        "id": "https://brindlewaye.com/xAPITerms/verbs/loggedout",
        "display": {
            "en-GB": "logged out of",
            "en-US": "logged out of"
        }
    },
``` 

### Context

[Context identifies](common_statements.md) the platform that is being logged out of.  Plugin specific extensions are optional and not part of the core recipe

``` javascript
"context": {
        "platform": "Moodle",
        "extensions": {
            }
        }
    },
```

### Object


The object defines the item that the user has logged out of. 
A [Jisc specific extension](common_statements.md#jisc_extensions) details that it is a VLE that is being logged out of 
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


### Complete Specific Examples
Moodle (ToDo)
[Blackboard](blackboard/loggedout.js)
