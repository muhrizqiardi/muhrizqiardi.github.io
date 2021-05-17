import PostList from './PostList'
import Sidebar from './Sidebar'

export default function Home() {
  return (
    <div className="root-grid">
      <Sidebar></Sidebar>
      <main>
        <PostList></PostList>
      </main>
    </div>
  )
}
