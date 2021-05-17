import PostList from '../PostList'
import PostPage from '../PostPage'
import Sidebar from '../Sidebar'

export default function Post() {
  return (
    <div className="root-grid">
      <Sidebar></Sidebar>
      <main>
        <PostPage title="Bebek" content="wow" image="/thumbnail/example.jpg"/>
      </main>
    </div>
  )
}
