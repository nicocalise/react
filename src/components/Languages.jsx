import React, { useContext} from 'react'
import ListItemsLanguages from './ListItemsLanguages'
import { LanguageContext } from '../context/LanguageContext'

//const formValueDefault = {
//    lang: 'es'
//  };

const Languages = () => {
    //const [formValue, setFormValue] = useState(formValueDefault);
    const { lang , setLang } = useContext(LanguageContext)
    

  const handleSelect = (ev) => {
    debugger
    const language = ev.target.value;
    setLang(lang === language ? 'es' : 'en')
    console.log(lang)
    }

  return (
    <div>
        <form>
            <label>
               Language:
              <select value = {lang} onChange={handleSelect}>
                <option value="es">Spanish</option>
                <option value="en">English</option>
              </select>
            </label>
          <ListItemsLanguages value={lang}/>
        </form>
    </div>
  )
}

export default Languages
