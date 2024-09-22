import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { create, useStore } from 'zustand';
import { StoreExplorer } from 'react-store-explorer';

const store = create(() => ({ count: 0 }));

const incr = () => {
  store.setState((s) => ({ count: s.count + 1 }));
};
const stores = { store };
function App() {
  const { count } = useStore(store);
  return (
    <StoreExplorer
      stores={stores}
      iconColor={'green'}
      keepOpen={false}
      from={'zustand'}
    >
      <div className="card">
        <button onClick={() => incr()}>count is {count}</button>
      </div>
    </StoreExplorer>
  );
}

export default App;
