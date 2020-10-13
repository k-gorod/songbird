import React  from 'react';

function Header(props) {
    const categories = ['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы', 'Морские птицы']
    const catArr = [];
    for (let i = 0; i < categories.length; i++) {
      catArr.push(<li className={`header__categoryPoint point ${(i + 1) === props.activeCategory ? 'active' : ''}`} key={i}>
        {categories[i]}
      </li>)
  
    }
    return (
      <div className='header'>
        <div className='header__logo'></div>
    <div className='header__score'> Счет: {props.score} </div>
        <ul className='header__categories'>
          {catArr}
        </ul>
      </div>)
  }
  export default Header;
