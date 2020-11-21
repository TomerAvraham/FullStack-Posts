import React, { useState, useEffect } from 'react'
import Form from './components/Form'
import PostsList from './components/PostsList'

function App() {
  const [posts, setPosts] = useState([])
  const [postsChange, setPostsChange] = useState({})

  const fetchAllPosts = async () => {
    const res = await fetch('http://localhost:1000/posts/all')
    const data = await res.json()
    setPosts(data)
  }

  const handelAddButton = async (body) => {
    console.log('im here')
    const res = await fetch('http://localhost:1000/posts/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    const data = await res.json()
    setPostsChange(data)
  }

  const handelDeleteButton = async (id) => {
    const res = await fetch(`http://localhost:1000/posts/delete/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await res.json()
    setPostsChange(data)
  }

  const handelEditButton = async (id, body) => {
    const res = await fetch(`http://localhost:1000/posts/edit?postId=${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    const data = await res.json()
    setPostsChange(data)
  }

  useEffect(() => {
    fetchAllPosts()
  },[postsChange])

  return (
    <div className="App">
      <Form handelAddButton={handelAddButton}/>
      <PostsList handelEditButton={handelEditButton} handelDeleteButton={handelDeleteButton} posts={posts}/>
    </div>
  );
}

export default App;
