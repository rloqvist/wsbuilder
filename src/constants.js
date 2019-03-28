export const EXERCISE_TYPE_OPTIONS = [
  {
    name: 'PlainExercise',
    label: 'Normal'
  },
  {
    name: 'MultisetExercise',
    label: 'Combined',
  },
];

export const EXERCISE_TYPES = {
  'PlainExercise': 'Normal',
  'MultisetExercise': 'Combined',
  'InlineExercise': 'Inner',
}

export const INTERVAL_SUB_TYPES = [
  'MultisetExercise',
];

export const LOAD_TYPES = {
  'PlainExercise': ["WEIGHT", "PERCENT", "HEIGHT", "LENGTH", "DISTANCE", "HEARTRATE", "PACE", "BODYWEIGHT"],
  'MultisetExercise': ["WEIGHT", "PERCENT", "HEIGHT", "LENGTH", "DISTANCE", "HEARTRATE", "PACE", "BODYWEIGHT"],
  'InlineExercise': ["WEIGHT", "PERCENT", "HEIGHT", "LENGTH", "DISTANCE", "HEARTRATE", "PACE", "BODYWEIGHT"],
  'CardioExercise': ["PERCENT", "HEARTRATE", "PACE"],
  'IntervalExercise': ["WEIGHT", "PERCENT", "HEIGHT", "LENGTH", "DISTANCE", "HEARTRATE", "PACE", "BODYWEIGHT"],
};

export const WORK_TYPES = {
  'PlainExercise': ["DISTANCE", "TIME", "REPETITIONS"],
  'MultisetExercise': ["DISTANCE", "TIME", "REPETITIONS"],
  'InlineExercise': ["DISTANCE", "TIME", "REPETITIONS"],
  'CardioExercise': ["DISTANCE", "TIME"],
  'IntervalExercise': ["DISTANCE", "TIME", "REPETITIONS"],
};

export const suffices = {
  PACE: "km/h",
  WEIGHT: "kg",
  PERCENT: "%",
  HEIGHT: "cm",
  LENGTH: "m",
  REPETITIONS: "reps",
  DISTANCE: "km",
  TIME: "s",
  HEARTRATE: "bpm"
}
