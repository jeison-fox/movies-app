import { Route } from 'wouter';
import HomeContainer from '@containers/HomeContainer';
import DetailContainer from '@containers/DetailContainer';

const App: React.FC = () => {
  return (
    <div>
      <Route path="/" component={HomeContainer} />
      <Route path="/movie/:id" component={DetailContainer} />
    </div>
  );
};

export default App;
