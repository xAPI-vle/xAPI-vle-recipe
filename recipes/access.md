#Access Recipe
Revision: IN DRAFT

## Purpose
This activity records a user accessing an object usch as a file or a room. This differs from an item being viewed as this is more of a business transaction. It is billible.

## Definition
### Actor
[Accounts](/common_statements.md#actor.account) is used as the identifer.  Account/Name to use is up to the sender, as long as it is resolvable, unique and persistant. Candidates include: vle id, the login name, and an other field with a student id in.

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

The Verb,[access](http://activitystrea.ms/schema/1.0/access) indicates that the actor has accessed the object. For instance, a person accessing a room, or accessing a file.

``` javascript
"verb": {
        "id": "http://activitystrea.ms/schema/1.0/access",
        "display": {
            "en": "access"
        }
    },
```
### Context

[Context](/common_statements.md#context) identifies the platform that is being logged into, Moodle in this example.

[IP Address](https://registry.tincanapi.com/#uri/extension/310) is used to identify the client's real address as a Context extension.

SessionId is the VLE session Id

CourseArea is the umbrella course/parent area identified by its home page URI 

Plugin specific extensions are optional and not part of the core recipe.


``` javascript
"context": {
        "platform": "Moodle",
        "extensions": {
      		"http://xapi.jisc.ac.uk/courseArea": {
      		 	 "http://xapi.jisc.ac.uk/vle_mod_id": "LA101",
                 "id":"http://moodle.data.alpha.jisc.ac.uk/course/view.php?id=4"
              },
 			"http://xapi.jisc.ac.uk/sessionId": "32456891"  ,
	
            "http://id.tincanapi.com/extensions/ip-address": "10.3.3.48"
              
        }
```

## Object:
Needs to identify what was accessed. A list of valid values can be found at [the definition of  object.definition.extensions on the vocabulary page](../vocabulary.md#Object.definition.extension)


``` javascript
"object": {
	
	 }
}
```

### Complete VLE Specific Examples

