import { useEffect, useState } from 'react';
import { NavLink, useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../scss/components/_card.scss';
import CardSkeleton from './CardSkeleton';

const Card = () => {
  const [card, setCard] = useState([]);
  const [status, setStatus] = useState('loading');

  const { id } = useParams();
  const navigate = useNavigate();

  async function fetchCard() {
    try {
      const { data } = await axios.get(`https://63905cbd0bf398c73a84e157.mockapi.io/items/${id}`);
      setCard(data);
      setStatus('loaded');
    } catch (error) {
      console.log(error);
      alert('Воникла ошибка, попробуйте снова');
      navigate('/');
    }
  }

  useEffect(() => {
    fetchCard();
  }, []);

  return (
    <div className="card">
      {status === 'loading' ? (
        <CardSkeleton />
      ) : (
        <>
          <img src={card.profileUrl} alt="У пользователя нет изображения в базе данных" />
          <div className="personal">
            <h2>Фамилия: {card.surname}</h2>
            <h2>Имя: {card.name}</h2>
            <h2>Отчество: {card.patronymic}</h2>
            <p>Дата рождения: {card.birthDate}</p>
          </div>
          <div className="request_problem">
            <p>Дата подачи заявки: {card.applicationDate}</p>
            <p>Проблемный вопрос: {card.description}</p>
          </div>
        </>
      )}
      <NavLink to="/">
        <button className="btn">
          <span>Назад</span>
        </button>
      </NavLink>
    </div>
  );
};

export default Card;
