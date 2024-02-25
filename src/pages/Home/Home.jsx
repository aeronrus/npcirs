import { useEffect, useState } from 'react';
//import './Home.css';
import axios from 'axios';
import DataTable from 'react-data-table-component';
import CustomLinkCell from '../../components/CustomLinkCell/CustomLinkCell';
import HomeSkeleton from './HomeSkeleton';
import CustomStyle from '../../components/CustomStyle/CustomStyle';

function Home() {
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState('loading');
  const handleActive = () => {
    setModalActive(true);
    console.log('true');
  };
  const columns = [
    { name: '№', className: 'number', selector: (row) => Number(row.id) + 1, sortable: true },
    {
      name: 'Фамилия',
      cell: (row) => <CustomLinkCell row={row} field="surname" />,
    },
    { name: 'Имя', selector: (row) => <CustomLinkCell row={row} field="name" /> },
    { name: 'Отчество', selector: (row) => <CustomLinkCell row={row} field="patronymic" /> },
    { name: 'Дата рождения', selector: (row) => row.birthDate },
    { name: 'Дата подачи заявки', selector: (row) => row.applicationDate, sortable: true },
  ];

  const fetchData = async () => {
    await axios
      .get('https://63905cbd0bf398c73a84e157.mockapi.io/items')
      .then((res) => {
        setUsers(res.data);
        setStatus('loaded');
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {status === 'loading' ? (
        <HomeSkeleton />
      ) : (
        <DataTable columns={columns} data={users} pagination customStyles={CustomStyle}></DataTable>
      )}
    </div>
  );
}

export default Home;
