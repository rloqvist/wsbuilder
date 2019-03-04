## PlainExercise
```json
{
  "title": "<String>",
  "id": "<String>",
  "description": "<String>",
  "load": {
    "type": "<Enum WEIGHT|HEIGHT|LENGTH>",
    "value": "<Integer>",
    "required": true,
  },
  "work": {
    "type": "<Enum DISTANCE|TIME|REPETITIONS>",
    "value": "<Integer>",
    "required": true,
  },
  "rounds": {
    "value": "<Integer>",
    "required": true,
  },
  "rest": {
    "value": "<Integer>",
    "required": false,
  }
}
```
## MultisetExercise
```json
{
  "title": "<String>",
  "id": "<String>",
  "description": "<String>",
  "rounds": {
    "value": "<Integer>",
    "required": true,
  },
  "rest": {
    "value": "<Integer>",
    "required": false,
  },
  "exercises": [
    "<InlineExercise>",
  ]
}
```
## InlineExercise
```json
{
  "title": "<String>",
  "id": "<String>",
  "description": "<String>",
  "load": {
    "type": "<Enum WEIGHT|HEIGHT|LENGTH>",
    "value": "<Integer>",
    "required": true,
  },
  "work": {
    "type": "<Enum DISTANCE|TIME|REPETITIONS>",
    "value": "<Integer>",
    "required": true,
  },
  "rest": {
    "value": "<Integer>",
    "required": false,
  }
}
```
## CardioExercise
```json
{
  "title": "<String>",
  "id": "<String>",
  "description": "<String>",
  "load": {
    "type": "<Enum HEARTRATE|SPEED>",
    "value": "<Integer>",
    "required": true,
  },
  "work": {
    "type": "<Enum DISTANCE|TIME|REPETITIONS>",
    "value": "<Integer>",
    "required": true,
  },
}
```
## IntervalExercise
```json
{
  "title": "<String>",
  "id": "<String>",
  "description": "<String>",
  "exercise": "<Enum CardioExercise|MultisetExercise>",
  "rounds": "<Integer>",
  "rest": "<Integer>",
}
```
## Segment
```json
{
  "title": "<String>",
  "id": "<String>",
  "description": "<String>",
  "content": [
    "<Enum Segment|Exercise>",
  ],
}
```

[x] Only make inline exercise available from multiset
[x] Include templated parts of display and edit in all exercise type components
[ ] ? Image selection
[x] Implement all exercise types
[x] Session storage instead of local storage
[x] MDE for description
[x] Delete unused imports
[x] Add rest
