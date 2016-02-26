#Module/Block/Object View
##Purpose
An activity that shows a users has viewed a vle resource for example a Moodle Module or Blackboard building block (eg a page, resource, url)

##Verb:
``` javascript
"verb": {
        "id": "http://id.tincanapi.com/verb/viewed",
        "display": {
            "en-GB": "viewed",
            "en-US": "viewed"
        }
    },
```

## Object:
Needs to identify what was logged in to. [Examples of object.definition.extentions](vocabulary#Object.definition.extension)

###Valid Values:
- http://xapi.jisc.ac.uk/define/vle/page
- http://xapi.jisc.ac.uk/define/vle/quiz

	 
###Example
``` javascript
"object": {
	"objectType": "Activity",
	"id": "https://courses.alpha.jisc.ac.uk/moodle/mod/page/view.php?id=250"   	 	//  unique id or url of the item being logged into
	"definition": {
		"type": "http://adlnet.gov/expapi/activities/module",			//  definition type as above
		 "name": { "en": "Moodle - UoG: University of Gloucestershire" },			   //  name of item as returned by VLE
		"description": { "en": "<p>Moodle\u00a0- UoG: University of Gloucestershire</p>"	 } //  description of item as returned by VLE
		"extensions": {
    				"http://xapi.jisc.ac.uk/extensions/moduleType":"http://xapi.jisc.ac.uk/define/vle/page",
            	 	}
	 }
}
```

### Complete example

```javascript

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
        "id": "http://id.tincanapi.com/verb/viewed",
        "display": {
            "en-GB": "viewed",
            "en-US": "viewed"
        }
    },
    "context": {
        "contextActivities": {
            "grouping": [
                {
                    "objectType": "Activity",
                    "id": "https://courses.alpha.jisc.ac.uk/moodle/course.php?id=5",
                    "definition": {
                        "type": "http://adlnet.gov/expapi/activities/course",
                        "name": {
                            "en-GB": "LA101: Introduction to Jisc Learning Analytics",
                            "en-US": "LA101: Introduction to Jisc Learning Analytics"
                        },
                        "description": {
                            "en-GB": "A Moodle course",
                            "en-US": "A Moodle course"
                        },
                        "extensions": {
                            
                        }
                    }
                }
            ]
        },
        "platform": "Moodle",
        "extensions": {
        }
    },
    "timestamp": "2016-01-08T10:20:28+00:00",
    "object": {
        "objectType": "Activity",
        "id": "https://courses.alpha.jisc.ac.uk/moodle/mod/page/view.php?id=117",
        "definition": {
            "type": "http://adlnet.gov/expapi/activities/module",
            "name": {
                "en-GB": "A User Focussed Overview of the Service",
                "en-US": "A User Focussed Overview of the Service"
            },
            "description": {
                "en-GB": "<p></p><p style=\"margin-top:0pt;margin-bottom:0pt;margin-left:0in;text-align:left;\r\ndirection:ltr;unicode-bidi:embed;word-break:normal;\r\npunctuation-wrap:hanging\"><br></p><p></p>",
                "en-US": "<p></p><p style=\"margin-top:0pt;margin-bottom:0pt;margin-left:0in;text-align:left;\r\ndirection:ltr;unicode-bidi:embed;word-break:normal;\r\npunctuation-wrap:hanging\"><br></p><p></p>"
            },
            "extensions": {
                
            }
        }
    },
    "authority": {
        "objectType": "Agent",
        "name": "Test",
        "mbox": "mailto:hello@learninglocker.net"
    },
    "stored": "2016-01-08T10:21:18.228600+00:00",
    "id": "d92710cf-1665-4a78-8bc4-5fae2563e8bc"
}
```
