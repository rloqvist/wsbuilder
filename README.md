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

[ ] Only make inline exercise available from multiset
[ ] Include templated parts of display and edit in all exercise type components
[ ] Image selection
[ ] Implement all exercise types
[ ] Session storage instead of local storage
[ ] MDE for description
[ ] Delete unused imports
[ ] Add rest
[ ] Prettier
