import { useState } from 'react';
import { episodeList as episodeData } from './data';

const App = () => {
  const [episodes] = useState(episodeData);
  const [selectedEpisode, setSelectedEpisode] = useState();
  const [showPlayer, setShowPlayer] = useState(false);

  const selectEpisode = (episode) => {
    setShowPlayer(false);
    setSelectedEpisode(episode);
  };

  const EpisodeList = () => {
    return (
      <section className='episode-list'>
        <h2>Episodes</h2>
        <ul>
          {episodes.map((episode) => (
            <li
              key={episode.id}
              className='episode-card'
              onClick={() => selectEpisode(episode)}
            >
              {episode.title}
            </li>
          ))}
        </ul>
      </section>
    );
  };

  const EpisodeDetails = () => {
    return (
      <section className='episode-details'>
        {!selectedEpisode ? (
          <>
            <h2>No Episode Selected</h2>
            <p>Select an episode!</p>
          </>
        ) : (
          <>
            <h2>
              {showPlayer && 'Now Watching: '}Episode {selectedEpisode.id}
            </h2>
            <div className='episode-info-text'>
              <h3>{selectedEpisode.title}</h3>
              <p>{selectedEpisode.description}</p>
            </div>
            <button
              className='watch-now-button'
              onClick={() => setShowPlayer(true)}
            >
              Watch Now
            </button>
            {showPlayer && (
              <img
                className='player'
                src='https://i.pinimg.com/originals/bb/74/04/bb74046420c4c992b8cabc6e667abe40.gif'
                alt='netflix intro'
              />
            )}
          </>
        )}
      </section>
    );
  };

  return (
    <div>
      <header>
        <h1>Dark Echoes</h1>
      </header>
      <main>
        <EpisodeList />
        <EpisodeDetails />
      </main>
    </div>
  );
};

export default App;
