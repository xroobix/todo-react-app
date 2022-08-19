import { daysInWeek } from 'date-fns';
import { addDays, format, isToday } from 'date-fns/esm';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import sortArray from 'sort-array';
import Todo from './Todo';
export default function TodoList({ tasks, days }) {
  const [sortedTasks, setSortedTasks] = useState(() =>
    sortArray(tasks, { by: ['day', 'hour'] })
  );
  const [displayDays, setDisplayDays] = useState(() =>
    getDays(days)
  );

  function getDays(days) {
    let daysToDisplay = [];
    if (days) {
      const today = new Date();
      for (let i = 0; i < days; i++) {
        const day = addDays(today, i);
        daysToDisplay.push(format(day, 'yyyy-MM-dd'));
      }
    } else {
      const allDays = sortedTasks.map((task) => task.day);
      daysToDisplay = [...new Set(allDays)];
    }
    const uniquesDays = daysToDisplay.map((day) => {
      const dayTasks = sortedTasks.filter((task) => task.day === day);
      return [[day], dayTasks];
    });
    return uniquesDays;
  }

  function getDaysWithTasks() {
    const allDays = sortedTasks.map((task) => task.day);
    const uniqueDays = [...new Set(allDays)];
    const uniquesDaysWithTasks = uniqueDays.map((day) => {
      const dayTasks = sortedTasks.filter((task) => task.day === day);
      return [[day], dayTasks];
    });
    return uniquesDaysWithTasks;
  }

  return (
    <div className="todolist">
      {displayDays.map((days) => {
        return (
          <div className="day" key={days[0]}>
            <div className="date">
              {isToday(new Date(days[0])) ? (
                <h3>Today</h3>
              ) : (
                <h3>{format(new Date(days[0]), 'cccc')} </h3>
              )}

              {isToday(new Date(days[0])) ? (
                <p>{format(new Date(days[0]), 'cccc d LLLL')}</p>
              ) : (
                <p>{format(new Date(days[0]), 'd LLLL')}</p>
              )}
            </div>
            {days[1].map((day) => {
              return <Todo day={day} key={nanoid(4)} />;
            })}
          </div>
        );
      })}
    </div>
  );
}
