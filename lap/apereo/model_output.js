{
  "version":"1.0.0",
  "actor":{
    "objectType":"Agent",
    "account":{
      "name":"12345",
      "homePage":"https://github.com/jiscdev/analytics-udd/blob/master/predictive-core.md#student_id"
    }
  },
  "verb":{
    "id":"http://activitystrea.ms/schema/1.0/receive",
    "display":{
      "en-GB":"receive",
      "en-US":"receive"
    }
  },
  "object":{
    "objectType":"Activity",
    "id":"https://lap.jisc.ac.uk/earlyAlert/unicon/id",
    "definition":{
      "type":"http://activitystrea.ms/schema/1.0/alert",
      "name":{
        "en-GB":"An early alert",
        "en-US":"An early alert"
      },
      "description":{
        "en-GB":"An early alert",
        "en-US":"An early alert"
      },
      "moreInfo":"url to view the alert",
      "extensions":{
        "https://lap.jisc.ac.uk/earlyAlert/type":"UNICON"
      }
    }
  },
  "context":{
    "contextActivities":{
      "grouping":[
        {
          "objectType":"Activity",
          "id":"https://github.com/jiscdev/analytics-udd/blob/master/predictive-core.md#mod_instance/id",
          "definition":{
            "type":"http://adlnet.gov/expapi/activities/module",
            "description":{
              "en":"Jisc Module Instance"
            },
            "name":{
              "en":"Jisc Module Instance"
            },
            "extensions":{
              "https://lap.jisc.ac.uk/taxonomy":"MOD_INSTANCE"
            }
          }
        }
      ]
    }
  },
  "timestamp":"2016-02-10T10:20:28+00:00",
  "result":{
    "extensions":{
      "https://lap.jisc.ac.uk/earlyAlert/score":"HIGH",
      "https://lap.jisc.ac.uk/earlyAlert/metricN":"3.89"
    }
  },
  "authority":{
    "objectType":"Agent",
    "name":"Unicon",
    "mbox":"mailto:hello@unicon.net"
  }
}
