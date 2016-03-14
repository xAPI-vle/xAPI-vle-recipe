#Common Statement Properties
The following are statement level properties that are used in several recipes.

### account.actor
Account is the internal identifier used by the VLE.

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


## context
Context provides information about the system returning the information it gives the platform

 ```Javascript
	"context": { 
        "platform": "Moodle",         //  The VLE Platform
        "version": "2.9.1",      //  The VLE Version number
        "extensions": {
        	"http://xapi.jisc.ac.uk/extension/courseArea": "https://courses.alpha.jisc.ac.uk/course/view.php?id=2194", //http://xapi.jisc.ac.uk/extensions/courseArea 
        	"http://id.tincanapi.com/extension/ip-address": "10.1.1.2"  //  The ip address of the system emitting the event
			"http://lrs.learninglocker.net/define/extensions/info": {   //  Information on the extension or plugin emitting the event
                            "https://moodle.org/": "2.8.7+ (Build: 20150730)",
                            "https://github.com/LearningLocker/Moodle-Log-Expander": "0.4.2\n",
                            "https://github.com/LearningLocker/Moodle-xAPI-Translator": "0.4.1\n",
                            "https://github.com/LearningLocker/xAPI-Recipe-Emitter": "0.4.3\n"
           	 				}
					}
			}
 ```  


