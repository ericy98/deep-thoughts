import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { QUERY_THOUGHTS } from '../utils/queries';
import ThoughtList from '../components/ThoughtList';

const Home = () => {

  const { loading, data } = useQuery(QUERY_THOUGHTS);

  // optional chaining; data exisits store in thoughts, data doesn't exisit store empty array
  const thoughts = data?.thoughts || [];
  console.log(thoughts);

  return (
    <main>
      <div className='flex-row justify-space-between'>
        <div className='col-12 mb-3'>
          {loading ? (
            <div>Loading...</div>
          ) : (
              <ThoughtList thoughts={thoughts} title="Some Food for Thought..." />
            )}
        </div>
      </div>
    </main>
  );
};

export default Home;