import React, { useState } from "react";

type QuestionnaireContextObj = {
  items: any[];
  addAnswer: (id: string) => void;
  removeAnswer: (id: string) => void;
};

export const QuestionnaireContext =
  React.createContext<QuestionnaireContextObj>({
    items: [],
    addAnswer: (id: string) => {},
    removeAnswer: (id: string) => {},
  });

const QuestionnaireContextProvider: React.FC = (props) => {
  const [questionnaires, setQuestionnaires] = useState<any[]>([]);

  const addAnswerHandler = (todoText: string) => {
    const newTodo = {};

    setQuestionnaires((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const removeAnswerHandler = (todoId: string) => {
    setQuestionnaires((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  const contextValue: QuestionnaireContextObj = {
    items: questionnaires,
    addAnswer: addAnswerHandler,
    removeAnswer: removeAnswerHandler,
  };

  return (
    <QuestionnaireContext.Provider value={contextValue}>
      {props.children}
    </QuestionnaireContext.Provider>
  );
};

export default QuestionnaireContextProvider;
