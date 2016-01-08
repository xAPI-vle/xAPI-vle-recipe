# VLE User Logged In Recipe
Purpose
An activity for a user logining in to a VLE
## Definition
### Actor

Accounts is used as the identifer.  Account/Name is the internal identifier used by Moodle.

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

### Verb

Verb is self explanatory

"verb": {
        "id": "https://brindlewaye.com/xAPITerms/verbs/loggedin/",
        "display": {
            "en-GB": "logged in to",
            "en-US": "logged in to"
        }
    },
    
### Context

Context gives the platform.  An extension gives core details from the Moodle Logstore table in the extension 'http://lrs.learninglocker.net/define/extensions/moodle_logstore_standard_log'

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

### Object

The object defines the item that the use hits when they login to moodle.  A moodle specific exentions gives the url of the moodle site being logged into ('http://lrs.learninglocker.net/define/extensions/moodle_course') 

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
