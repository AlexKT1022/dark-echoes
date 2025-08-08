import { useState } from 'react';
import EpisodeList from './components/EpisodeList';
import EpisodeDetails from './components/EpisodeDetails';
import { episodeList as episodeData } from './data';

const App = () => {
  const [episodes, setEpisodes] = useState(episodeData);

  console.log(episodes);

  return (
    <div>
      <EpisodeList />
      <EpisodeDetails />
    </div>
  );
};

export default App;
