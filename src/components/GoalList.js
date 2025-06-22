import React, { useEffect, useState } from 'react';

function GoalList({ reload }) {
  const [goals, setGoals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:5000/api/goals')
      .then(res => res.json())
      .then(data => {
        setGoals(data);
        setLoading(false);
      });
  }, [reload]);

  if (loading) return <div>Loading goals...</div>;
  if (!goals.length) return <div>No goals yet.</div>;

  return (
    <div className="a-list">
      <h2>Your Goals</h2>
      <ul style={{ padding: 0, listStyle: 'none' }}>
        {goals.map(goal => (
          <li key={goal.id} className="a-card">
            <strong>{goal.title}</strong> <span className="a-status">({goal.status})</span>
            <div>{goal.description}</div>
            <div className="a-date">
              {goal.created_at ? new Date(goal.created_at).toLocaleString() : ''}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GoalList; 