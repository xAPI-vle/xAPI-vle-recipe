{
    "actor": {
        "objectType": "Agent",
        "name": "Student Name",
        "account": {
            "name": "student_username",
            "homePage": "https://services-uswest.skytap.com:9613"
        }
    },
    "verb": {
        "id": "http://id.tincanapi.com/verb/viewed",
        "display": {
            "en-US": "viewed",
        }
    },
    "object": {
        "objectType": "Activity",
        "id": "https://services-uswest.skytap.com:9613/webapps/blackboard/content/listContent.jsp?content_id=_49953_1&course_id=_21122_1",
        "definition": {
            "type": "http://xapi.jisc.ac.uk/define/extensions/vle/content",
            "name": {
                "en-US": "Introduction to Scrum"
            },
            "description": {
                "en-US": "A quick overview of Scrum. This e-learning module covers the rationale for Agile/Scrum, along with an overview of roles, meetings, and artifacts. The module ends with a challenging quiz which has been shown to increase scores on Scrum certification tests (such as Certified Scrum Master). "
            }
            "extensions": {
                "http://adlnet.gov/expapi/activities/course": {
                   "name": "Scrum Training",
                   "course_id":"21122"
            }
        }
    },
    "context": {
        "platform": "Blackboard",
        "extensions": {
            "http://lrs.learninglocker.net/define/extensions/info": {
                "https://services-uswest.skytap.com:9613/webapp/bbics-xAPI-BBLearn": "1.0.0",
                "https://services-uswest.skytap.com:9613": "9.1",
                "ip": "10.1.1.2"
            }
        }
    }
}