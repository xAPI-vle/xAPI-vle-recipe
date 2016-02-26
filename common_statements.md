#Common Statement Properties


### "actor"."account"
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


### "context"."platform"
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