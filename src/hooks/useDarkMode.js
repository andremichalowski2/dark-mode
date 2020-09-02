import { useLocalStorage } from './useLocalStorage';
import { useEffect } from 'react';

export const useDarkMode = (key, initialValue) => {
  const [newValue, setNewValue] = useLocalStorage('darkmode')
  useEffect(() => {
    if(newValue === true){
        document.body.classList.add('dark-mode')
    } else {
        document.body.classList.remove('dark-mode')
    }
  }, [newValue]);

  return[newValue, setNewValue];
}