import { createRoot } from 'react-dom/client';
import OpenDrawsView from './OpenDrawsView';

const App = () => {
  const companiesArr = [
    { id: 'GoldenCasket', displayName: 'Golden Casket' },
    { id: 'Tattersalls', displayName: 'Tattersalls' },
  ];
  return (
    <div className="app-wrap">
      <OpenDrawsView companies={companiesArr} />
    </div>
  );
};

const container = document.getElementById('root');
const root = createRoot(container);

root.render(<App />);
