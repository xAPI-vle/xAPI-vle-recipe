{
    "actor": {
        "objectType": "Agent",
        "name": "Student Name",
        "account": {
            "name": "student_username",
            "homePage": "https://services-uswest.skytap.com:27219"
        }
    },
    "verb": {
        "id": "http://id.tincanapi.com/verb/viewed",
        "display": {
            "en": "viewed",
        }
    },
    "object": {
        "objectType": "Activity",
        "id": "https://services-uswest.skytap.com:27219/webapps/blackboard/execute/modulepage/view?course_id=1",
        "definition": {
            "type": "http://adlnet.gov/expapi/activities/course",
            "name": {
                "en": "Course 001"
            },
            "description": {
                "en": "Course 001 description"
            }
        }
    },
    "context": {
        "platform": "Blackboard",
        "extensions": {
            "http://lrs.learninglocker.net/define/extensions/info": {
                "https://services-uswest.skytap.com:27219/webapp/bbics-xAPI-BBLearn": "1.0.0",
                "https://services-uswest.skytap.com:27219": "9.1",
                "ip": "10.1.1.2"
            }
        }
    }
}