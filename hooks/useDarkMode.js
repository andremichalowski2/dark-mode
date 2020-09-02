import useLocalStorage from './useLocalStorage';
import { useEffect } from 'react';

export const useDarkMode = (key, initialValue) => {
  const [exValue, setExValue] = useLocalStorage('darkmode')
}