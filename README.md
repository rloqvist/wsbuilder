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
    "type": "<Enum WEIGHT|HEIGHT|LENGTH>",
    "value": "<Integer>",
    "required": true,
  },
  "rounds": {
    "type": "<Enum WEIGHT|HEIGHT|LENGTH>",
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
    "type": "<Enum WEIGHT|HEIGHT|LENGTH>",
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
    "type": "<Enum WEIGHT|HEIGHT|LENGTH>",
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
    "type": "<Enum DISTANCE|TIME>",
    "value": "<Integer>",
    "required": true,
  },
}
```
## IntervallExercise
```json
{
  "title": "<String>",
  "id": "<String>",
  "description": "<String>",
  "exercise": "<Enum CardioExercise|MultisetExercise>",
  "laps": "<Integer>",
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
## Build
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
