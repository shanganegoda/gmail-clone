import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import EmailList from './EmailList';
import Mail from './Mail';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SendMail from './SendMail';
import { useSelector } from 'react-redux';
import { selectSendMessageIsOpen } from './features/mailSlice';

function App() {

  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen)

  return (
    <Router>
      <div className="app">
        <Header />
        <div className="app__body">
          <Sidebar />

          <Routes>
            <Route path='/' element={<EmailList />} />
            <Route path='/mail' element={<Mail />} />
          </Routes>

        </div>
        {sendMessageIsOpen && <SendMail/>}
      </div>
    </Router>
  );
}

export default App;
