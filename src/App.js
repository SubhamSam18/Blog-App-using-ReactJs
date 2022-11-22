import React,{useState, useEffect} from 'react';
import { View } from './components/View';
import './App.css';


const getData=()=>{
  const data = localStorage.getItem('blogs');
  if(data){
    return JSON.parse(data);
  }
  else{
    return [];
  }
}

export const App = () => {

  const [blogs, setBlogs]=useState(getData());
  const [title, setTitle]=useState('');
  const [author, setAuthor]=useState('');
  const [blogdec, setBlogdec]=useState('');


  const AddBlog=(e)=>{
    e.preventDefault();
    let blog={
      title,
      author,
      blogdec
    }
    setBlogs([...blogs,blog]);
    setTitle('');
    setAuthor('');
    setBlogdec('');
  }

  const deleteBlog=(blogdec)=>{
    const Blogs=blogs.filter((ele)=>{
      return ele.blogdec !== blogdec
    })
    setBlogs(Blogs);
  }

  // saving blog data in local storage
  useEffect(()=>{
    localStorage.setItem('blogs',JSON.stringify(blogs));
  },[blogs])

  return (
    <div className='wrapper' >

      <h1>Blog Application</h1>
      <h1>Create And View Your Blogs</h1>
      {/* <span><h2>ReadBlogs</h2> <h2>AddBlog</h2></span> */}
      <div className='main'>

        <div className='form-container'>
          <form className='form-group'
            onSubmit={AddBlog}>
            <label>Title</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setTitle(e.target.value)} value={title}></input>
            <br></br>
            <label>Blog</label>
            <textarea  rows="5" className='form-control' required
            onChange={(e)=>setBlogdec(e.target.value)} value={blogdec}></textarea>
            <br></br>
            <label>Author</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setAuthor(e.target.value)} value={author}></input>
            <br></br>
            <button type="submit" className='btn btn-primary'>
              ADD
            </button>
          </form>
        </div>

        <div className='form-container'>
            <div className='table-responsive'>
              <table className='table'>
                <thead>
                  <tr>
                    <th>Title</th>
                    <th>Blog</th>
                    <th>Author</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <View blogs={blogs} deleteBlog={deleteBlog}/>
                </tbody>
              </table>
            </div>
            <button className='btn btn-dark'
              onClick={()=>setBlogs([])}>
              Delete All
            </button>
        </div>

      </div>
    </div>
  )
}

export default App;
