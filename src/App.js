import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import HomePage from './components/HomePage';
import Recommendations from './components/Recommendations';
import EventForm from './components/EventForm';
import EventPricing from './components/EventPricing';
import EventHistoryTable from './components/History';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/recommendations" element={<Recommendations/>} />
        <Route path="/EventForm" element={<EventForm />} />
        <Route path="/eventpricing" element={<EventPricing />} />
        <Route path="/EventHistoryTable" element={<EventHistoryTable />} />
      </Routes>
    </Router>
  );
}
