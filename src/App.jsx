import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { DetailPage } from "./pages/DetailPage";
import { InboxPage } from "./pages/InboxPage";
import { SentPage } from "./pages/SentPage";

function App() {

  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<></>}/>
        <Route path="/details/:emailId" element={<DetailPage />} />
        <Route path="/inbox" element={<InboxPage />}/>
        <Route path="/sent" element={<SentPage />}/>
      </Routes>
    </div>
  )
}

export default App;