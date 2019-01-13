import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import './Category.css';
import Input from '@material-ui/core/Input';
import { Link } from 'react-router-dom';

const Category = ({ category, currentQuestionIndex, handleSubmit, answerInput }) => {
  const currentQuestion = category.clues[currentQuestionIndex];
  return (
    <section>
      <Button className='btnHome' size={'medium'} variant={'contained'}>
        <Link to='/'>Home</Link>
      </Button>
      <form onSubmit={handleSubmit}>
        <h1>You choosed: {category.title}</h1>
        <div className="question">
          <h3>
            {currentQuestion.question}
          </h3>
          <div>
            <Input className='input' ref={answerInput} />
          </div>
          <Button size={'small'} variant={'contained'} className="btnCat" type="submit">
            Next
          </Button>
        </div>
      </form>
    </section>
  );
}

Category.propTypes = {
  category: PropTypes.shape({}).isRequired,
  currentQuestionIndex: PropTypes.number.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  answerInput: PropTypes.shape({
    value: PropTypes.instanceOf(HTMLInputElement)
  }),
};

export default Category;