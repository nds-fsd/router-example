import styles from './taskDetailPage.module.css';
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { TASK_PAGE } from '../../routers/routers';

const TaskDetailPage = () => {
  let { taskId } = useParams();
  
  return (
    <div className={styles.container}>
     <h1>Task with id {taskId}</h1>
     <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam elit neque, scelerisque ut elit a, convallis pulvinar quam. Proin egestas sit amet dui in ultricies. Pellentesque faucibus luctus tellus, eu elementum ex pretium non. Aliquam erat volutpat. Donec dictum vitae dolor non bibendum. Proin vulputate nisl non purus volutpat mattis. Donec varius dapibus aliquam. Suspendisse auctor magna diam, quis ornare lectus efficitur sit amet. Nullam odio ligula, porttitor non luctus eu, aliquam sed ligula. Suspendisse non enim sed lacus pulvinar eleifend. Nunc purus arcu, efficitur sit amet nunc vitae, sodales iaculis ipsum. Etiam posuere lacinia ullamcorper.
      </p>

      <Link to={`${TASK_PAGE}/${taskId}`}>
        <p>Detail page link</p>
      </Link>
    </div>
  );
}

export default TaskDetailPage;