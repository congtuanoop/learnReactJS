import logo from './logo.svg';
// import './App.css';
import React from 'react';
import TodoFeature from './features/Todo';
import AlbumList from './features/Album/components/Albumlist';
import AlbumsFeature from './features/Album';

function App() {

  return (
    <div className="App">

      {/* <TodoFeature /> */}
      <AlbumsFeature />

    </div>
  );
}

export default App;
