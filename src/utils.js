import shortid from 'shortid';

export const samplePlainExercise = (title, parentId) => {
  return {
    id: shortid(),
    title,
    parentId,
    type: "exercise",
    exerciseType: "PlainExercise",
    load: {
      type: "WEIGHT",
      value: 20,
    },
    work: {
      type: "REPETITIONS",
      value: 10,
    },
    rounds: 3,
    description: "Replace this description with something for your exercise",
    content: [],
  }
};
export const sampleMultisetExercise = () => {};
export const sampleInlineExercise = () => {};
export const sampleCardioExercise = () => {};
export const sampleIntervalExercise = () => {};
