import { View } from "@tarojs/components";
import { AtRadio, AtButton } from "taro-ui";
import { useEffect, useState } from "react";
import "./index.scss";
import GlobalFooter from "../../components/GlobalFooter";
import questions from "../../data/questions.json";

/**
 * 做题页面
 */
export default () => {
  //当前题目序号（从1开始）
  const [current, setCurrent] = useState<number>(1);
  //当前题目
  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);
  const questionOptions = currentQuestion.options.map((option) => {
    return {
      label: `${option.key}.${option.value}`,
      value: option.key,
    };
  });
  //当前答案
  const [currentAnswer, setCurrentAnswer] = useState<string>();
  //回答列表
  const [answersList] = useState<string[]>([]);
  //序号变化时，切换当前题目和当前回答  （react的钩子函数，当current变量变化驱动函数执行）
  useEffect(() => {
    setCurrentQuestion(questions[current - 1]);
    setCurrentAnswer(answersList[current - 1]);
  }, [current]);

  return (
    <View className="doQuestionPage">
      {JSON.stringify(answersList)}
      <View className="doQuestionPage__h1 title">
        {current}.{currentQuestion.title}
      </View>

      <View className="options-wrapper">
        <AtRadio
          options={questionOptions}
          value={currentAnswer}
          onClick={(value) => {
            setCurrentAnswer(value);
            //记录回答
            answersList[current - 1] = value;
          }}
        />
      </View>

      {/*只有还有下一题还会展示按钮,即前面的值为真，后面的东西才会展示出来*/}
      {current < questions.length && (
        <AtButton
          type="primary"
          circle
          className="controllBtn"
          disabled={!currentAnswer}
          onClick={() => setCurrent(current + 1)}
        >
          下一题
        </AtButton>
      )}

      {/*最后一题展示查看结果按钮*/}
      {current == questions.length && (
        <AtButton
          type="primary"
          circle
          className="controllBtn"
          disabled={!currentAnswer}
          onClick={() => {
            // todo 跳转到结果页面
          }}
        >
          查看结果
        </AtButton>
      )}
      {/*有上一题的时候才展示这个按钮*/}
      {current > 1 && (
        <AtButton
          circle
          className="controllBtn"
          onClick={() => setCurrent(current - 1)}
        >
          上一题
        </AtButton>
      )}
      <GlobalFooter />
    </View>
  );
};
