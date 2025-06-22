import React, { useState } from 'react';
import GoalForm from './GoalForm';
import GoalList from './GoalList';
import AIAccountabilityCoach from './AIAccountabilityCoach';
import SubscribeButton from './SubscribeButton';

function Dashboard() {
  const [reload, setReload] = useState(false);

  const handleGoalAdded = () => setReload(r => !r);

  return (
    <div className="a-dashboard">
      <h1 className="a-title">Run. <br></br> Track. Achieve.</h1>
      <GoalForm onGoalAdded={handleGoalAdded} />
      <GoalList reload={reload} />
      <AIAccountabilityCoach />
      <SubscribeButton />
    </div>
  );
}

export default Dashboard; 