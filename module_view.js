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
    "verb": {
        "id": "http://id.tincanapi.com/verb/viewed",
        "display": {
            "en-GB": "viewed",
            "en-US": "viewed"
        }
    },
    "context": {
        "contextActivities": {
            "grouping": [
                {
                    "objectType": "Activity",
                    "id": "https://courses.alpha.jisc.ac.uk/moodle/course.php?id=5",
                    "definition": {
                        "type": "http://adlnet.gov/expapi/activities/course",
                        "name": {
                            "en-GB": "LA101: Introduction to Jisc Learning Analytics",
                            "en-US": "LA101: Introduction to Jisc Learning Analytics"
                        },
                        "description": {
                            "en-GB": "A Moodle course",
                            "en-US": "A Moodle course"
                        },
                        "extensions": {
                            "http://lrs.learninglocker.net/define/extensions/moodle_course": {
                                "id": "5",
                                "category": "2",
                                "sortorder": "20001",
                                "fullname": "LA101: Introduction to Jisc Learning Analytics",
                                "shortname": "LA101: Intro to Jisc LA",
                                "idnumber": "LA101",
                                "summary": "",
                                "summaryformat": "1",
                                "format": "topics",
                                "showgrades": "1",
                                "newsitems": "0",
                                "startdate": "1441234800",
                                "marker": "0",
                                "maxbytes": "0",
                                "legacyfiles": "0",
                                "showreports": "0",
                                "visible": "1",
                                "visibleold": "1",
                                "groupmode": "0",
                                "groupmodeforce": "0",
                                "defaultgroupingid": "0",
                                "lang": "",
                                "calendartype": "",
                                "theme": "",
                                "timecreated": "1441179606",
                                "timemodified": "1442562792",
                                "requested": "0",
                                "enablecompletion": "0",
                                "completionnotify": "0",
                                "cacherev": "1446886993",
                                "url": "https://courses.alpha.jisc.ac.uk/moodle/course.php?id=5"
                            }
                        }
                    }
                }
            ]
        },
        "platform": "Moodle",
        "extensions": {
            "http://lrs.learninglocker.net/define/extensions/moodle_logstore_standard_log": {
                "eventname": "\\mod_page\\event\\course_module_viewed",
                "component": "mod_page",
                "action": "viewed",
                "objecttable": "page",
                "objectid": "82",
                "crud": "r",
                "edulevel": 2,
                "contextid": 214,
                "contextlevel": 70,
                "contextinstanceid": "117",
                "userid": "2",
                "courseid": "5",
                "other": "N;",
                "timecreated": 1452248428,
                "origin": "web",
                "ip": "86.148.72.12",
                "object": "course_module"
            }
        }
    },
    "timestamp": "2016-01-08T10:20:28+00:00",
    "object": {
        "objectType": "Activity",
        "id": "https://courses.alpha.jisc.ac.uk/moodle/mod/page/view.php?id=117",
        "definition": {
            "type": "http://adlnet.gov/expapi/activities/module",
            "name": {
                "en-GB": "A User Focussed Overview of the Service",
                "en-US": "A User Focussed Overview of the Service"
            },
            "description": {
                "en-GB": "<p></p><p style=\"margin-top:0pt;margin-bottom:0pt;margin-left:0in;text-align:left;\r\ndirection:ltr;unicode-bidi:embed;word-break:normal;\r\npunctuation-wrap:hanging\"><br></p><p></p>",
                "en-US": "<p></p><p style=\"margin-top:0pt;margin-bottom:0pt;margin-left:0in;text-align:left;\r\ndirection:ltr;unicode-bidi:embed;word-break:normal;\r\npunctuation-wrap:hanging\"><br></p><p></p>"
            },
            "extensions": {
                "http://lrs.learninglocker.net/define/extensions/moodle_module": {
                    "id": "82",
                    "course": "5",
                    "name": "A User Focussed Overview of the Service",
                    "intro": "<p></p><p style=\"margin-top:0pt;margin-bottom:0pt;margin-left:0in;text-align:left;\r\ndirection:ltr;unicode-bidi:embed;word-break:normal;\r\npunctuation-wrap:hanging\"><br></p><p></p>",
                    "introformat": "1",
                    "contentformat": "1",
                    "legacyfiles": "0",
                    "legacyfileslast": null,
                    "display": "5",
                    "displayoptions": "a:2:{s:12:\"printheading\";s:1:\"1\";s:10:\"printintro\";s:1:\"0\";}",
                    "revision": "8",
                    "timemodified": "1441378419",
                    "url": "https://courses.alpha.jisc.ac.uk/moodle/mod/page/view.php?id=117"
                }
            }
        }
    },
    "authority": {
        "objectType": "Agent",
        "name": "Test",
        "mbox": "mailto:hello@learninglocker.net"
    },
    "stored": "2016-01-08T10:21:18.228600+00:00",
    "id": "d92710cf-1665-4a78-8bc4-5fae2563e8bc"
}