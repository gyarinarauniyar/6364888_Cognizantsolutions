import Styles from './EmployeeCard.module.css';
import { useContext } from 'react';
import ThemeContext from './ThemeContext';

function EmployeeCard({ employee }) {
  const theme = useContext(ThemeContext);

  return (
    <div className={`${Styles.Card} ${theme}`}>
      <h3>{employee.name}</h3>
      <p>{employee.email}</p>
      <p>{employee.phone}</p>
      <p>
        <a href="#" className={theme}>Edit</a>
        <a href="#" className={theme}>Delete</a>
      </p>
    </div>
  );
}

export default EmployeeCard;
