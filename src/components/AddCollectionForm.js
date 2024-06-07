import React, { useState } from 'react';

const AddCollectionForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !artist || !imageUrl) return;
    const newCollection = {
      id: Math.random().toString(36).substr(2, 9),
      title,
      artist,
      imageUrl
    };
    onAdd(newCollection);
    setTitle('');
    setArtist('');
    setImageUrl('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
      />
      <input
        type="text"
        placeholder="Image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
      />
      <button type="submit">Add Data</button>
    </form>
  );
}

export default AddCollectionForm;
