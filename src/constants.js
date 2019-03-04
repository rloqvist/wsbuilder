export const EXERCISE_TYPES = [
  'PlainExercise',
  'MultisetExercise',
  'InlineExercise',
  'CardioExercise',
  'IntervalExercise',
];

export const INTERVAL_SUB_TYPES = [
  'MultisetExercise',
  'CardioExercise',
];

export const LOAD_TYPES = {
  'PlainExercise': ["WEIGHT", "PERCENTAGE", "HEIGHT", "LENGTH", "DISTANCE", "HEARTRATE", "PACE", "BODYWEIGHT"],
  'MultisetExercise': ["WEIGHT", "PERCENTAGE", "HEIGHT", "LENGTH", "DISTANCE", "HEARTRATE", "PACE", "BODYWEIGHT"],
  'InlineExercise': ["WEIGHT", "PERCENTAGE", "HEIGHT", "LENGTH", "DISTANCE", "HEARTRATE", "PACE", "BODYWEIGHT"],
  'CardioExercise': ["PERCENTAGE", "HEARTRATE", "PACE"],
  'IntervalExercise': ["WEIGHT", "PERCENTAGE", "HEIGHT", "LENGTH", "DISTANCE", "HEARTRATE", "PACE", "BODYWEIGHT"],
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
  PERCENTAGE: "%",
  HEIGHT: "cm",
  LENGTH: "m",
  REPETITIONS: "reps",
  DISTANCE: "km",
  TIME: "s",
  HEARTRATE: "bpm"
}
