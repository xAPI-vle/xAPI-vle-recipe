#Set a learning target Recipe
Revision: IN DRAFT

## Purpose
This activity records a user setting themselves a learning target. For example to spend a certain amount of hours reading.

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

The Verb,[set a learning target](vocabulary.md#verbs) A learner setting themselves a learning related target. For example, to spend a certain amount of hours reading.

``` javascript
"verb": {
        "id": "http://xapi.jisc.ac.uk/verbs/setAlearningTarget",
        "display": {
            "en": "Set a learning target"
        }
    },
```
### Context




``` javascript

```

## Object:



``` javascript
"object": {
	
	 }
}
```

### Complete VLE Specific Examples

