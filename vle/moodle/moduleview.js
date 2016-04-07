{
    "version": "1.0.0",
    "actor": {
        "objectType": "Agent",
        "name": "stutest",
        "account": {
            "name": "stutest",
            "homePage": "http://localhost:8080/moodle/moodle"
        }
    },
    "verb": {
        "id": "http://id.tincanapi.com/verb/viewed",
        "display": {
            "en": "viewed"
        }
    },
    "context": {
        "platform": "Moodle",
        "extensions": {
            "http://xapi.jisc.ac.uk/extensions/sessionId": {
                "sessionId": "FYcVzA4iDF"
            },
            "http://id.tincanapi.com/extension/ip-address": {
                "ip-address": "0:0:0:0:0:0:0:1"
            },
        
            "http://lrs.learninglocker.net/define/extensions/info": {
                "https://moodle.org/": "2.8.11 (Build: 20160314)",
                "https://github.com/LearningLocker/Moodle-Log-Expander": "1.0.0",
                "https://github.com/LearningLocker/Moodle-xAPI-Translator": "1.0.0",
                "https://github.com/JiscDev/xAPI-Recipe-Emitter": "1.0.0"
            },
            "http://xapi.jisc.ac.uk/extensions/courseArea": {
                "id": "http://localhost:8080/moodle/moodle/course/view.php?id=2",
                "http://xapi.jisc.ac.uk/extensions/vle_mod_id": "Test"
            }
        }
    },
    "timestamp": "2016-04-07T08:35:35-07:00",
    "object": {
        "objectType": "Activity",
        "id": "http://localhost:8080/moodle/moodle/mod/page/view.php?id=2",
        "definition": {
            "type": "http://xapi.jisc.ac.uk/define/vle/page",
            "name": {
                "en": "Test Page"
            },
            "description": {
                "en": "<p>Test Description</p>"
            }
        }
    },
    "authority": {
        "objectType": "Agent",
        "name": "New Client",
        "mbox": "mailto:hello@learninglocker.net"
    },
    "stored": "2016-04-07T15:35:36.147300+00:00",
    "id": "55d93cbe-2681-44da-9066-3eeb88fb298a"
}
