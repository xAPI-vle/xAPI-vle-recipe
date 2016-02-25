#Common Statement Properties

For the majority of recipes these will be the same

## Account
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


## Context
Context provides information about the system returning the information

Context gives the platform.  Plugin specific extensions are optional and not part of the core recipe

```
"context": {
        "platform": "Moodle",
        "extensions": {
            }
        }
    },
 ```  