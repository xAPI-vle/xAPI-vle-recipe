# VLE User Logged In Recipe
##Purpose
An activity for a user logging in to a VLE
## Definition
### Actor

Accounts is used as the identifer.  Account/Name is the internal identifier used by Moodle.
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

Verb is self explanatory

``` 
"verb": {
        "id": "https://brindlewaye.com/xAPITerms/verbs/loggedin/",
        "display": {
            "en-GB": "logged in to",
            "en-US": "logged in to"
        }
    },
``` 
### Context

Context gives the platform.  Plugin specific extensions are optional and not part of the core recipe

```
"context": {
        "platform": "Moodle",
        "extensions": {
            }
        }
    },
```
### Object

The object defines the item that the use hits when they login to moodle.  A Jisc specific exentions details that it is a VLE that is being logged into ('http://lrs.learninglocker.net/define/extensions/moodle_course') 
```
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
                ""http://xapi.jisc.ac.uk/extensions/applicationType": {
                    "type": "http://xapi.jisc.ac.uk/define/vle"
                }
            }
        }
    },
```
