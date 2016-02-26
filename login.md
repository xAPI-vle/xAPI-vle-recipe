# VLE User Logged In Recipe
Rev:

## Purpose
An activity for a user logging in to a VLE
## Definition
### Actor

[Accounts](common_statements.md#actor.account) is used as the identifer.  Account/Name is the internal identifier used by the VLE.
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

The Verb,[logged in](vocabulary.md#verbs) is self explanatory

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

Context gives the [platform](common_statements.md#context.platform).  Plugin specific extensions are optional and not part of the core recipe

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

## Complete Example

``` javascript
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
    "verb": {
        "id": "https://brindlewaye.com/xAPITerms/verbs/loggedin/",
        "display": {
            "en-GB": "logged in to",
            "en-US": "logged in to"
        }
    },
    "context": {
        "platform": "Moodle",
        "extensions": {
            "http://lrs.learninglocker.net/define/extensions/moodle_logstore_standard_log": {
                "eventname": "\\core\\event\\user_loggedin",
                "component": "core",
                "action": "loggedin",
                "objecttable": "user",
                "objectid": "2",
                "crud": "r",
                "contextid": 1,
                "contextlevel": 10,
                "userid": "2",
                "other": "a:1:{s:8:\"username\";s:6:\"madmin\";}",
                "timecreated": 1452246471,
                "origin": "web",
                "ip": "86.148.72.12",
                "object": "user"
            }
        }
    },
    "timestamp": "2016-01-08T09:47:51+00:00",
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
                "http://lrs.learninglocker.net/define/extensions/moodle_course": {
                    "url": "https://courses.alpha.jisc.ac.uk/moodle"
                }
            }
        }
    },
    "authority": {
        "objectType": "Agent",
        "name": "Test",
        "mbox": "mailto:hello@learninglocker.net"
    },
    "stored": "2016-01-08T09:48:41.464300+00:00",
    "id": "dfe78184-f9c9-4e55-9b65-5f3d199a98b3"
}
```
