import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';


const useDarkMode = (initialValue) => {

    const [darkMode, setDarkMode] = useLocalStorage('dark-mode', false);

    useEffect(() => {

        const body = document.querySelector('body');

        darkMode
         ? body.classList.add('dark-mode')
        : body.classList.remove('dark-mode');
    }, [darkMode])
    return [darkMode, setDarkMode];
}

export default useDarkMode;