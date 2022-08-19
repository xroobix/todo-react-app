import { AiOutlineDownCircle, AiOutlineUpCircle } from 'react-icons/ai'
export default function Todo(props) {
    const {description, day, hour, category, id} = props.day

  


  return (
    <div className="todo">
        <div className={`dot ${category.toLowerCase()}`}></div>
        <div className="info">
            <h4 className="description">{description}</h4>
            <div className="properties">
                <p className={`category ${category.toLowerCase()}`}>{category}</p>
                <p className="hour">{hour}</p>
            </div>
        </div>
    </div>
  );
}
