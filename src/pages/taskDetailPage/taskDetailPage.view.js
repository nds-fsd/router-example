import styles from './taskDetailPage.module.css';
import React, { useEffect, useState } from 'react';
import { Link, useHistory, useLocation, useParams } from 'react-router-dom';
import { TASK_PAGE, TASK_PAGE_LIST } from '../../routers/routers';

const TaskDetailPage = () => {
  let { taskId } = useParams();

  const history = useHistory();

  let location = useLocation();
  console.log(location);

  const [customStyle, setCustomStyle] = useState({});

  useEffect(() => {
    if (taskId % 2 === 0) {
      setCustomStyle({backgroundColor: 'red'});
    } else {
      setCustomStyle({backgroundColor: 'blue'});
    }
  }, [taskId])

  const goTo = () => {
    const url = `${TASK_PAGE}/${taskId}`;
    debugger;
    history.push(url);
  }

  const [showLink, setShowLink] = useState(true);

  useEffect(() => {
    debugger;
    setShowLink(location.pathname.startsWith(TASK_PAGE_LIST));
  }, [location]);
  
  return (
    <div className={styles.container}>
     <h1 style={customStyle}>Task with id {taskId}</h1>
     <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam elit neque, scelerisque ut elit a, convallis pulvinar quam. Proin egestas sit amet dui in ultricies. Pellentesque faucibus luctus tellus, eu elementum ex pretium non. Aliquam erat volutpat. Donec dictum vitae dolor non bibendum. Proin vulputate nisl non purus volutpat mattis. Donec varius dapibus aliquam. Suspendisse auctor magna diam, quis ornare lectus efficitur sit amet. Nullam odio ligula, porttitor non luctus eu, aliquam sed ligula. Suspendisse non enim sed lacus pulvinar eleifend. Nunc purus arcu, efficitur sit amet nunc vitae, sodales iaculis ipsum. Etiam posuere lacinia ullamcorper.
      </p>

      {showLink && (
        <div onClick={goTo}>
          <p>Detail page link</p>
        </div>
      )}
    </div>
  );
}

export default TaskDetailPage;