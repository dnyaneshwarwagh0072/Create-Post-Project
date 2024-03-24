import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CardList from './components/CardList';
import CreatePost from './components/CreatePost';
import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { useState } from 'react';
import { Post_list_store } from './store/Post_list_store';

function App() {
  const [selectedTab, setSelectedTab] = useState("home");

  return (
    <Post_list_store>
      <div className="main-container">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="content">
          <Header />
          {
            selectedTab === 'home' ? <CardList /> : <CreatePost />
          }
          <Footer />
        </div>
      </div>
    </Post_list_store>
  )
}

export default App
