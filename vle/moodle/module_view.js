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
                    "content": "<p>One key aim of the service is to provide a range of analytic tools for staff and students.  These include dashboards, tools to manage processes, and a student app.  This are all driven by data provided by a range of sources, including the VLE and student records system.</p><p></p><p style=\"margin: 0pt 0px 0pt 0in; direction: ltr; unicode-bidi: embed; word-break: normal;\"><span><b>Dashboards</b></span></p><p style=\"margin: 0pt 0px 0pt 0in; direction: ltr; unicode-bidi: embed; word-break: normal;\"><br></p><p style=\"margin: 0pt 0px 0pt 0in; direction: ltr; unicode-bidi: embed; word-break: normal;\">The dashboards provide visual tools to allow lecturers, module leaders, senior staff and support staff to view:</p><p style=\"margin: 0pt 0px 0pt 0in; direction: ltr; unicode-bidi: embed; word-break: normal;\"> </p><p style=\"margin: 0pt 0px 0pt 0.5in; direction: ltr; unicode-bidi: embed; word-break: normal;\"></p><ul><li>Student engagement<br></li><li>Cohort comparisons<br></li><li>etc\u2026</li></ul><p></p><p style=\"margin: 0pt 0px 0pt 0.5in; orphans: auto; text-align: left; text-indent: 0px; widows: 1; direction: ltr; unicode-bidi: embed; word-break: normal;\"></p><p style=\"margin: 0pt 0px 0pt 0in; direction: ltr; unicode-bidi: embed; word-break: normal;\">Institutions may choose from three different approach to providing dashboard: a commercial solution, provides by Tribal, an open source solution, provided by Unicon/Marist or by integrating data into their own business intelligence service such as Tableau.</p><p style=\"margin: 0pt 0px 0pt 0in; direction: ltr; unicode-bidi: embed; word-break: normal;\"><br></p><p style=\"margin: 0pt 0px 0pt 0in; direction: ltr; unicode-bidi: embed; word-break: normal;\"><img src=\"@@PLUGINFILE@@/Student-Insight-screenshot-1-1024x843.png\" alt=\"Student Insight\" width=\"607\" height=\"500\" style=\"vertical-align:text-bottom; margin: 0 .5em;\" class=\"img-responsive\"><br></p><p style=\"margin: 0pt 0px 0pt 0in; direction: ltr; unicode-bidi: embed; word-break: normal;\"><br></p><p style=\"margin: 0pt 0px 0pt 0in; direction: ltr; unicode-bidi: embed; word-break: normal;\"><b>Student App</b></p><p style=\"margin: 0pt 0px 0pt 0in; direction: ltr; unicode-bidi: embed; word-break: normal;\"><b><br></b></p><p style=\"margin: 0pt 0px 0pt 0in; direction: ltr; unicode-bidi: embed; word-break: normal;\"><b><span style=\"color: rgb(51, 51, 51); font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: 20px; orphans: auto; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 1; word-spacing: 0px; -webkit-text-stroke-width: 0px; display: inline !important; float: none; background-color: rgb(255, 255, 255);\">The student app is  under development, and  aims to provide a student with a way of engaging with their analytic data, as well as provide their own 'self declared.'  data.  Conceptually, this works in a similar way to highly success fitness and health apps.</span><br></b></p><p style=\"margin: 0pt 0px 0pt 0in; direction: ltr; unicode-bidi: embed; word-break: normal;\"><b><span style=\"color: rgb(51, 51, 51); font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; font-size: 14px; font-style: normal; font-variant: normal; font-weight: normal; letter-spacing: normal; line-height: 20px; orphans: auto; text-align: left; text-indent: 0px; text-transform: none; white-space: normal; widows: 1; word-spacing: 0px; -webkit-text-stroke-width: 0px; display: inline !important; float: none; background-color: rgb(255, 255, 255);\"><br></span></b></p><p style=\"margin: 0pt 0px 0pt 0in; direction: ltr; unicode-bidi: embed; word-break: normal;\"><img src=\"@@PLUGINFILE@@/student-app1.png\" alt=\"Analytics App\" width=\"197\" height=\"350\" role=\"presentation\" style=\"vertical-align:middle; margin: 0 .5em;\" class=\"img-responsive\">  <img src=\"@@PLUGINFILE@@/student-app2.png\" alt=\"Student app 2\" width=\"197\" height=\"350\" style=\"vertical-align:middle; margin: 0 .5em;\" class=\"img-responsive\"></p><p style=\"margin: 0pt 0px 0pt 0in; direction: ltr; unicode-bidi: embed; word-break: normal;\"><br></p><p style=\"margin: 0pt 0px 0pt 0in; direction: ltr; unicode-bidi: embed; word-break: normal;\"><br></p><p style=\"margin: 0pt 0px 0pt 0in; direction: ltr; unicode-bidi: embed; word-break: normal;\"><br></p><p style=\"margin: 0pt 0px 0pt 0in; direction: ltr; unicode-bidi: embed; word-break: normal;\"><br></p><p style=\"margin: 0pt 0px 0pt 0in; direction: ltr; unicode-bidi: embed; word-break: normal;\"><b>Alert and Intervention Tool</b></p><p style=\"margin: 0pt 0px 0pt 0in; direction: ltr; unicode-bidi: embed; word-break: normal;\"><b><br></b></p><p style=\"margin: 0pt 0px 0pt 0in; direction: ltr; unicode-bidi: embed; word-break: normal;\">The backend of the system uses big data technics to identify student who are at risk. The alert and intervention tool provides a way of  managing interactions with students once risk has been identified.  This is based on open source tools from Unicon/Marist (Student Success Plan)</p><p style=\"margin: 0pt 0px 0pt 0in; direction: ltr; unicode-bidi: embed; word-break: normal;\"><br></p><p style=\"margin: 0pt 0px 0pt 0in; direction: ltr; unicode-bidi: embed; word-break: normal;\"><img src=\"@@PLUGINFILE@@/SSP-Jisc.png\" alt=\"SSP Screen Shot\" width=\"711\" height=\"400\" style=\"vertical-align:text-bottom; margin: 0 .5em;\" class=\"img-responsive\"><br></p><div class=\"O1\" style=\"margin-top: 4pt; margin-bottom: 0pt; margin-left: 0.24in; direction: ltr; unicode-bidi: embed; word-break: normal;\"><br></div><p style=\"margin: 4pt 0px 0pt 0in; direction: ltr; unicode-bidi: embed; word-break: normal;\"><br></p><br><p></p><br><p></p>",
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