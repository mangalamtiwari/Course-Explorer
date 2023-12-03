// App.js
import React, { useState } from 'react';
import CourseList from './components/courseDetails/CourseList';
import CourseDisplay from './components/courseDetails/CourseDisplay';
import SearchBar from './components/courseDetails/SearchBar';

function App() {
  const courseList = CourseList();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="App">
      <SearchBar onSearch={handleSearch} />
      <CourseDisplay courseList={courseList} searchQuery={searchQuery} />
    </div>
  );
}

export default App;
