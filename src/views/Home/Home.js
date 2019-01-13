import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Score from '../../components/Score/ScoreContainer';
import './Home.css';

const Home = ({ categories }) => {
  if (!localStorage.getItem('jService')) {
    localStorage.setItem('jService', JSON.stringify({cateId: []}));
  }

  const cateId = JSON.parse(localStorage.getItem('jService')).cateId;

  const newCategories = categories.map(category => {
    let isCheck = true;
    cateId.map(id => isCheck = category.id === id ? false : isCheck)
    const className = isCheck ? 'link' : 'link disabled'
    return (
      <Link className={className} to={`/categories/${category.id}`} key={category.id}>
        {category.title}
      </Link>
    )
  })
  
  return (
    <section>
      <Score />
      <h1>The Trivia</h1>
      {newCategories.length > 0 && (
        <section className='home'>
          <div className='category'>
          {newCategories}
          </div>
        </section>
      )}
    </section>
  )};

Home.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      clues_count: PropTypes.number
    }),
  ),
}

export default Home;