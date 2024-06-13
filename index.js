// const tf = require("@tensorflow/tfjs");
const toxicity = require('@tensorflow-models/toxicity');
// const { stringify } = require("qs");


const threadShold = 0.85;
toxicity.load(threadShold).then(model => {
  const sentences = [
    "hi bitch",
    'what nigga',
    'ok whore'
  ];
  model.classify(sentences).then(async prediction => {
    console.log(JSON.stringify(prediction,null,2))
  })
})
