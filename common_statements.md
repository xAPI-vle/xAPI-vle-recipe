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
Context provides information about the system returning the information it gives the platform.

 ```Javascript
	"context": { 
        "platform": "Moodle",    //  The VLE Platform
        "version": "2.9.1",      //  The VLE Version number
        "extensions": 
 			"http://xapi.jisc.ac.uk/extensions/sessionId": { //Session Identifier
                "sessionId": "32456891"  
             },
            "http://id.tincanapi.com/extension/ip-address": {  //IP address
                "ip-address":"10.3.3.48"
              },
			 "http://lrs.learninglocker.net/define/extensions/info": {   //  Information on the extension or plugin emitting the event
                            "https://moodle.org/": "2.8.7+ (Build: 20150730)",
                            "https://github.com/LearningLocker/Moodle-Log-Expander": "0.4.2\n",
                            "https://github.com/LearningLocker/Moodle-xAPI-Translator": "0.4.1\n",
                            "https://github.com/LearningLocker/xAPI-Recipe-Emitter": "0.4.3\n"
           	 				}
					}
			
 ```  


