import './../css/Stat.css';
import Swal from 'sweetalert2';

export default function Stat(props) {
  
  const handleClick = () => {
    Swal.fire(
      props.title,
      props.description,
      'question'
    );
  };
  
  return (
    <div className="stat" onClick={handleClick}>
      <img src={props.src} alt=""/>
    </div>
  );
}