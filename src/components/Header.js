import * as React from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

const Header = () => {
    const {setLangugae} = React.useContext(LanguageContext)
    const changeLanguage = (e) => {
        const selectValue = e.target.value
        setLangugae(selectValue)
    }
    return (
        <div className='header relative w-full flex flex-row-reverse p-4 bg-slate-50 drop-shadow-lg'>
            <select
                id="languages"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 w-auto dark:focus:border-blue-500"
                onChange={changeLanguage}
            >
                <option value="English" selected>English</option>
                <option value="Portuguese">Português</option>
                <option value="Persian">فارسی</option>
            </select>
        </div>
    )
}
export default Header;