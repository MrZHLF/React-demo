import React,{useState,useEffect}  from 'react'
import axios from 'axios'
import Posts from './Posts'
import Pagination from './Pagination'

const  Blog = () =>{
  const [posts,setPosts] = useState([])
  // 加载提示
  const [loading,setLoading] = useState(false)
  // 当前页吗
  const [currentPage,setCurrentPage] = useState(1)
  // 每一页显示数量
  const [postsPerPage,setPostsPerPage] = useState(10)
  // 请求数据
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true)
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setPosts(res.data)
      setLoading(false)
    }
    fetchPosts()
  },[])

  // 切换页码数
  const paginate = (pagNumber) => {
    setCurrentPage(pagNumber)
  }

  // 获取当前页面显示的post
  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstPost = indexOfLastPost - postsPerPage
  const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost)
  console.log(currentPosts,'currentPosts');
  return (
    <div className="container mt-5">
      <h1 className="text-primary mb-3">我的博客</h1>
      <Posts posts= {currentPosts} loading={loading}/>
      <Pagination postsPerPage={postsPerPage} totalPages={posts} paginate={paginate}/>
    </div>
  )
}
export default Blog;