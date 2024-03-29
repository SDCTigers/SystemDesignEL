const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const {
  getQuestions,
  getAnswers,
  postQuestion,
  postAnswer,
  markQuestionHelpful,
  reportQuestion,
  markAnswerHelpful,
  reportAnswer
} = require("../db/index.js");

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get("/qa/:product_id", getQuestions);
app.get("/qa/:question_id/answers", getAnswers);
app.post("/qa/:product_id", postQuestion);
app.post("/qa/:question_id/answers", postAnswer);
app.put("/qa/question/:question_id/helpful", markQuestionHelpful);
app.put("/qa/question/:question_id/report", reportQuestion);
app.put("/qa/answer/:answer_id/helpful", markAnswerHelpful);
app.put("/qa/answer/:answer_id/report", reportAnswer);

app.listen(3000, () => {
  console.log("connected to server");
});
