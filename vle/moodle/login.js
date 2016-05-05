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
        "id": "https://brindlewaye.com/xAPITerms/verbs/loggedin/",
        "display": {
            "en": "logged in to"
        }
    },
    "context": {
        "platform": "Moodle",
        "extensions": {
            "http://xapi.jisc.ac.uk/extensions/sessionId": {
                "sessionId": "L5t1W93PED"
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
    "timestamp": "2016-03-29T07:47:26-07:00",
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
    "stored": "2016-03-29T14:47:26.511000+00:00",
    "id": "fbdec75a-cef2-4dcf-8b15-55a6b0f0b327"
}
