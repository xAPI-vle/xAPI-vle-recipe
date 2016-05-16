#Authorisation Recipe
Revision: IN DRAFT

## Purpose
This activity records authorisation for  being given to a person
## Definition
### Actor

( [According to the verb we are using](http://activitystrea.ms/specs/json/schema/activity-schema.html#verbs)...)
The actor has authorized the object. There are two valid scenarios: 
* A person may authorize a request. In this case the actor is the person and the object is the request.
* A service may authorize a person to access an application. In which case the actor is the service, the object is the person, and the target is the application.

The assumption here is the second scenario and that the authorising system will produce the statement; both because that's in the gift of the institution, and because the authorising system will know both the user ID and the service accessed.

``` Javascript
{
    
}
```

### Verb

The Verb,[authorised](/vocabulary.md#verbs) describes the action of the actor  authorising the object.

``` javascript
"verb": {
        "id": "http://activitystrea.ms/schema/1.0/authorize",
        "display": {
            "en": "authorise"
        }
    },
```


### Object
The object is an account object of the person.

In the account object, the homePage is the canonical home page for the system the account is on and name is the unique id being used to log on. 


``` javascript

"object":{
		"objectType": "Agent",
		"account": {
			"homePage": "http://www.example.com", //IRL
			"name": "2425" //String
			
		}
	}	
```

