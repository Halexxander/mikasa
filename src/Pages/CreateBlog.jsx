import './CreateBlog.css'
import { useState } from 'react';
import { FaBold, FaItalic, FaUnderline, FaCode } from 'react-icons/fa';
import { db } from '../config/firebase'; 
import { collection, addDoc } from 'firebase/firestore'; 


const BlogCreator = () => {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [selectedTopic, setSelectedTopic] = useState("");
  const [date, setDate] = useState('');

  const handleBlogSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "blogs"), {
        title: title,
        description: description,
        content: content,
        topic: selectedTopic,
        date:date
      });

      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const applyFormatting = (tag) => {
    const textarea = document.getElementById('content');
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = content.substring(start, end);

    const formattedText = `<${tag}>${selectedText}</${tag}>`;
    const newContent = content.substring(0, start) + formattedText + content.substring(end);

    setContent(newContent);
  };

  return (
    <div className="blog-creator">
  
      <h2>Create Your Own Blog</h2>

      <div >
        <div className="form-group">
          <label htmlFor="name">Title:</label>
          <input type="text" id="name" name="name" required onChange={(e) => setTitle(e.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <input type="text" id="description" name="description" required onChange={(e) => setDescription(e.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="topics">Topics:</label>
          <select id="topics" name="topics" onChange={(e) => setSelectedTopic(e.target.value)} value={selectedTopic}>
            <option value="politics">Politics</option>
            <option value="movies">Movies</option>
            <option value="technology">Anime</option>
            <option value="science">Science</option>
            <option value="sports">Sports</option>
            <option value="food">Food</option>
            <option value="travel">Travel</option>
            <option value="music">Music</option>
            <option value="health">Health</option>
            <option value="fashion">Fashion</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input type="date" id="date" name="date" required onChange={(e) => setDate(e.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="content">Blog Content:</label>
          <textarea
            id="content"
            name="content"
            rows="6"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>

        <div className="text-editors">
          <label>Text Formatting:</label>
          <button type="button" onClick={() => applyFormatting('strong')}><FaBold /></button>
          <button type="button" onClick={() => applyFormatting('em')}><FaItalic /></button>
          <button type="button" onClick={() => applyFormatting('u')}><FaUnderline /></button>
          <button type="button" onClick={() => applyFormatting('code')}><FaCode /></button>
        </div>

        <div className="submit-button">
          <button type="submit" onClick={handleBlogSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default BlogCreator;