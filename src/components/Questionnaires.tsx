import QuestionnaireItem from "./QuestionnaireItem"

const Questionnaires: React.FC = () => {
  return (
    <section id="questions">
      <div className="question__list">
        <QuestionnaireItem></QuestionnaireItem>
      </div>
    </section>
  );
};

export default Questionnaires;
