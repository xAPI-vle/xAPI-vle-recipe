{
    "version": "1.0.0",
    "actor": {
        "objectType": "Agent",
        "name": "madmin",
        "account": {
            "name": "madmin",
            "homePage": "http://localhost:8080/moodle/moodle"
        }
    },
    "verb": {
        "id": "https://brindlewaye.com/xAPITerms/verbs/loggedout/",
        "display": {
            "en": "logged out of"
        }
    },
    "context": {
        "platform": "Moodle",
        "extensions": {
            "http://xapi.jisc.ac.uk/extensions/sessionId": {
                "sessionId": "CJcSKDog6x"
            },
            "http://id.tincanapi.com/extension/ip-address": {
                "ip-address": "0:0:0:0:0:0:0:1"
            },
            "http://lrs.learninglocker.net/define/extensions/info": {
                "https://moodle.org/": "2.8.11 (Build: 20160314)",
                "https://github.com/LearningLocker/Moodle-Log-Expander": "1.0.0",
                "https://github.com/LearningLocker/Moodle-xAPI-Translator": "1.0.0",
                "https://github.com/JiscDev/xAPI-Recipe-Emitter": "1.0.0"
            }
        }
    },
    "timestamp": "2016-03-29T07:47:18-07:00",
    "object": {
        "objectType": "Activity",
        "id": "http://localhost:8080/moodle/moodle",
        "definition": {
            "type": "http://activitystrea.ms/schema/1.0/application",
            "name": {
                "en": "xAPI Moodle"
            },
            "description": {
                "en": "xAPI Moodle"
            }
        }
    },
    "authority": {
        "objectType": "Agent",
        "name": "New Client",
        "mbox": "mailto:hello@learninglocker.net"
    },
    "stored": "2016-03-29T14:47:19.229200+00:00",
    "id": "6e49b03c-95d3-41dc-adde-3395b54ac02d"
}
