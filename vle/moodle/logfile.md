
The moodle plugin is a log file extension, and therefore can only use items in the log file.  The table definition is as follows:

## Module log file
```

  0:  id` bigint(10) NOT NULL AUTO_INCREMENT,
  1: `eventname` varchar(255) NOT NULL DEFAULT '',
  2: `component` varchar(100) NOT NULL DEFAULT '',
  3: `action` varchar(100) NOT NULL DEFAULT '',
  4: `target` varchar(100) NOT NULL DEFAULT '',
  5:`objecttable` varchar(50) DEFAULT NULL,
  6: `objectid` bigint(10) DEFAULT NULL,
  7: `crud` varchar(1) NOT NULL DEFAULT '',
  8: `edulevel` tinyint(1) NOT NULL,
  9: `contextid` bigint(10) NOT NULL,
  10: `contextlevel` bigint(10) NOT NULL,
  11: `contextinstanceid` bigint(10) NOT NULL,
  12: `userid` bigint(10) NOT NULL,
  13: `courseid` bigint(10) DEFAULT NULL,
  14: `relateduserid` bigint(10) DEFAULT NULL,
  15: `anonymous` tinyint(1) NOT NULL DEFAULT '0',
  16: `other` longtext,
  17: `timecreated` bigint(10) NOT NULL,
  18: `origin` varchar(10) DEFAULT NULL,
  19: `ip` varchar(45) DEFAULT NULL,
  20: `realuserid` bigint(10) DEFAULT NULL,
  
```
