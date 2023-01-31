import React, { useContext} from 'react'
import { LanguageContext } from '../context/LanguageContext'
import ListItemsLanguages from './ListItemsLanguages'

const Languages = () => {

    const { lang , setLang } = useContext(LanguageContext)
  
  const handleSelect = (ev) => {
    const language = ev.target.value;
    setLang(language === 'es' ? 'es' : 'en')
    console.log(lang)
    }

  return (
    <div>
        <form>
            <label>
               Language:
              <select value = {lang} onChange = {handleSelect}>
                <option value="es">Spanish</option>
                <option value="en">English</option>
              </select>
            </label>
        </form>
        <ListItemsLanguages value = {lang} />
    </div>
  )
}

export default Languages
