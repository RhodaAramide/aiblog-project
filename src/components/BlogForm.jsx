// src/BlogForm.js
import React, { useContext, useState } from 'react';
import { AuthContext } from '../AuthContext';
// Import Firebase SDK for Storage if needed
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const BlogForm = () => {
  const { user } = useContext(AuthContext);
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const storage = getStorage();
  const db = getFirestore();

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Upload image to Firebase Storage
      const storageRef = ref(storage, `images/${image.name}`);
      await uploadBytes(storageRef, image);
      const imageUrl = await getDownloadURL(storageRef);

      // Save blog post in Firestore
      await addDoc(collection(db, 'blogs'), {
        title,
        tags,
        content,
        imageUrl,
        author: user.email,
        timestamp: new Date(),
      });

      // Reset the form
      setTitle('');
      setContent('');
      setImage(null);
      alert("Blog post created successfully!");

    } catch (error) {
      console.error("Error adding blog post:", error);
      alert("Failed to create blog post.");
    } finally {
      setLoading(false);
    }
  };

  if (!user) {
    return <p>Please login to create a blog.</p>;
  }

  return (
    <div className=' my-8 p-4'>
    <form onSubmit={handleSubmit} className="max-w-2xl bg-secondary h-full rounded-lg mx-auto p-8 space-y-4">
      <h1 className='font-semibold text-2xl mb-2'>Have you got articles to post about AI? </h1>
        <p className='text-lg text-white/60 mb-8'>Then, go ahead and post it on our blog page now! </p>
      <input
        type="text"
        placeholder="Blog Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="w-full border rounded p-2"
      />
      <input
        type="text"
        placeholder="Blog Tags"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
        required
        className="w-full border rounded p-2"
      />
      <textarea
        placeholder="Blog Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
        className="w-full border rounded p-2"
      />
      <div>
      <input type="file" onChange={handleImageChange} className="border" />
      </div>
      <div className='flex justify-center items-center py-8'>
      <button 
        type="submit" 
        className={`bg-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-primary/80 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={loading}
      >
        {loading ? 'Saving...' : 'Create Blog'}
      </button>
      </div>
    </form>
    </div>
  );
};

export default BlogForm;