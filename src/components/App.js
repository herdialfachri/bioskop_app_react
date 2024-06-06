import React, { useState, useEffect } from 'react';
import CollectionList from './CollectionList';
import AddCollectionForm from './AddCollectionForm';
import Modal from './Modal';
import './App.css';
import Logo from '../assets/thisme.png';

const App = () => {
  const [collections, setCollections] = useState(() => {
    const savedCollections = localStorage.getItem('collections');
    return savedCollections ? JSON.parse(savedCollections) : [];
  });

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    localStorage.setItem('collections', JSON.stringify(collections));
  }, [collections]);

  const handleAddCollection = (newCollection) => {
    const id = collections.length ? collections[collections.length - 1].id + 1 : 1;
    setCollections([...collections, { ...newCollection, id }]);
    setShowModal(false);
  };

  const handleDeleteCollection = (id) => {
    const updatedCollections = collections.filter(collection => collection.id !== id);
    setCollections(updatedCollections);
  };

  const handleUpdateCollection = (updatedCollection) => {
    const updatedCollections = collections.map(collection => 
      collection.id === updatedCollection.id ? updatedCollection : collection
    );
    setCollections(updatedCollections);
  };

  return (
    <div className="container">
      <header className="header">
        <img src={Logo} alt="Logo" className="banner" />
        <h1>Cinemaflex Sukabumi</h1>
        <button className="add-button" onClick={() => setShowModal(true)}>New Movie</button>
      </header>
      <main>
        <CollectionList
          collections={collections}
          onDelete={handleDeleteCollection}
          onUpdateCollection={handleUpdateCollection}
        />
        {showModal && <Modal onClose={() => setShowModal(false)}><AddCollectionForm onAdd={handleAddCollection} /></Modal>}
      </main>
    </div>
  );
}

export default App;