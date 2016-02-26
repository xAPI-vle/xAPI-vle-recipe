#Common Statement Properties


##actor

### actor.account
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

### context.platform
Context gives the platform.  Plugin specific extensions are optional.

```
"context": {
        "platform": "Moodle",
        "extensions": {
            }
        }
    },
 ```  