#Module/Block/Object View
##Purpose
An activity that shows a users has viewed a vle resource for example a Moodle Module or Blackboard building block (eg a page, resource, url)

###Verb:
``` javascript
"verb": {
        "id": "http://id.tincanapi.com/verb/viewed",
        "display": {
            "en-GB": "viewed",
            "en-US": "viewed"
        }
    },
'''
### Object:
Needs to identify what was logged in to.
Jisc or LearningLocker  (?) will maintain a sector definition for object.definition.extention
Valid Values:
http://xapi.jisc.ac.uk/define/vle/page
http://xapi.jisc.ac.uk/define/vle/quiz
	etc….
	 
Example
``` javascript
"object": {
	"objectType": "Activity",
	"id": "https://courses.alpha.jisc.ac.uk/moodle/mod/page/view.php?id=250    	 	//  unique id or url of the item being logged into
	"definition": {
		"type": "http://adlnet.gov/expapi/activities/module",			//  definition type as above
		 "name": { "en": "Moodle - UoG: University of Gloucestershire" },			   //  name of item as returned by VLE
		"description": { "en": "<p>Moodle\u00a0- UoG: University of Gloucestershire</p>"	 } //  description of item as returned by VLE
"extensions": {
    				"http://xapi.jisc.ac.uk/extensions/moduleType":"http://xapi.jisc.ac.uk/define/vle/page",
            	 }
	 }
```
