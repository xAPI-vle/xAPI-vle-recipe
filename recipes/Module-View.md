#Module/Block/Object View
Revision: Working Towards 1.0

##Purpose
An activity that shows that a user has viewed a vle resource such as a Moodle Module or Blackboard building block (eg a page as identified by its url)

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

##Verb:

The Verb,[viewed](vocabulary.md#verbs) denotes the action of the user's browser or app requesting the resource that the user wishes to view.

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
Needs to identify what was requested. A list of valid values can be found at [examples of object.definition.extensions](vocabulary#Object.definition.extension)

### Example Valid Values:
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

### Complete Specific Examples
[Moodle](Moodle/moduleview.js)
[Blackboard](blackboard/loggedin.js)
