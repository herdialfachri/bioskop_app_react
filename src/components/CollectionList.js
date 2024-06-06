import React from 'react';
import CollectionItem from './CollectionItem';

const CollectionList = ({ collections, onDelete, onAddCollection, onUpdateCollection }) => {
  const [newCollection, setNewCollection] = React.useState({ title: '', artist: '', imageUrl: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewCollection(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newCollection.title && newCollection.artist && newCollection.imageUrl) {
      onAddCollection(newCollection);
      setNewCollection({ title: '', artist: '', imageUrl: '' });
    }
  };

  return (
    <div className="collection-list">
      <h2>List Top Movies</h2>
      <div className="collections">
        {collections.map((collection, index) => (
          <CollectionItem
            key={index}
            collection={collection}
            onDelete={onDelete}
            onUpdate={onUpdateCollection}
          />
        ))}
      </div>
    </div>
  );
};

export default CollectionList;
