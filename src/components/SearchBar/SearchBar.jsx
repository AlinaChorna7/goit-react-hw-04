import toast from 'react-hot-toast';
import styles from './SearchBar.module.css'
import { useState } from 'react';

export default function SearchBar({onSubmit}){
    const [input, setInput]= useState('');
    const handleSubmit = event =>{
        event.preventDefault();
        if(input.trim()=== ''){
            return toast.error('Please enter a search term.');
        }
        onSubmit(input.trim());
        setInput('');
        
    }
    return(
        <header>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={event => setInput(event.target.value)}
            autoComplete="off"
            placeholder="Search images and photos"
          />
          <button type="submit">Search</button>
        </form>
      </header>
      
    )
    console.log(SearchBar);
}