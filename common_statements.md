#Common Statement Properties
The following are statement level properties that are used in several recipes.

### actor
Account is the internal identifier used by the VLE.

``` Javascript
{
    "version": "1.0.0",
    "actor": {
        "objectType": "Agent",
        "name": "Test",
        "account": {
            "name": "Test",
            "homePage": "https://courses.alpha.jisc.ac.uk/moodle"
        }
    },
```


## context
Context provides information about the system returning the information it gives the platform.

 ```Javascript
	"context": { 
        "platform": "Moodle",    //  The VLE Platform
        "extensions": {
			"http://xapi.jisc.ac.uk/courseArea": {
             "id":"https://courses.alpha.jisc.ac.uk/course/view.php?id=2194" //Umbrella course/parent area by its home page URI
             },
             
 			"http://xapi.jisc.ac.uk/sessionId":"32456891",
            
            "http://id.tincanapi.com/extensions/ip-address": "10.3.3.48" , //IP address
            
			"http://lrs.learninglocker.net/extensions/info": {   //  Information on the extension or plugin emitting the event
                            "https://moodle.org/": "2.8.7+ (Build: 20150730)",
                            "https://github.com/LearningLocker/Moodle-Log-Expander": "0.4.2\n",
                            "https://github.com/LearningLocker/Moodle-xAPI-Translator": "0.4.1\n",
                            "https://github.com/LearningLocker/xAPI-Recipe-Emitter": "0.4.3\n"
           	 				}
		}
			
 ```  


