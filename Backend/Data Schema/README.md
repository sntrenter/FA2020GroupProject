### Two Raw Database Schema
1. Simple Raw Activity Schema (simple_raw_activity.json)
2. Raw Activity Schema that has depedency with data_type, quality and quantity(raw_activity.json)

Basic Description : 
|Feature      |       Id      | Device ID | Interaction_date_time       | Interaction_id | recorded_type             | data type | quanitity | quality |
| ---         |      ---      | ---       | ---                         |      ---       |   ---                     | ---       | ---       | ---     |
| Description | Object ID     | Device ID | Date and time that recorded | Caregiver ID   | activity, health, symptom | waking, sleeping,feeling, sleep, fever | miles, hours.. | can be anything 
| Type        | string       | string | string | string(can be number) |string | number or string | string|

### Summary Database Schema
