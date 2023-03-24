import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Dashboard from './pages/Dashboard';
import Search from './pages/Search';
import NoPage from './pages/NoPage';
import './index.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element = {<Layout />}>
          <Route index element = {<Dashboard />} />
          <Route path = "/search" element = {<Search />} />
        </Route>
        <Route path = "*" element = {<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));