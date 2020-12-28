import React from 'react';
import Calendar from './components/Calendar';

const years = Array.from(Array(10).keys()).map(i => 2021 + i);

const App = () => <Calendar years={years} />;

export default App;
