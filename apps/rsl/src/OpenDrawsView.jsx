import { useState } from 'react';
import View from './View';
import Company from './Company';

const OpenDrawsView = ({ companies }) => {
  const [status, setStatus] = useState('');
  const [draws, setDraws] = useState(null);

  const openDrawsHandler = (response) => {
    setStatus('loaded');
    setDraws(response);
  };

  return (
    <div>
      <h1>Open Draws</h1>

      <section className="companies-wrap">
        {companies.map((company) => (
          <Company
            key={company.id}
            company={company}
            status={status}
            setStatus={setStatus}
            setDraws={setDraws}
            callback={openDrawsHandler}
          />
        ))}
      </section>

      <View draws={draws} status={status} />
    </div>
  );
};

export default OpenDrawsView;
