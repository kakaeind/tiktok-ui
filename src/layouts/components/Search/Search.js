import {
    faCircleXmark,
    faSpinner,
    
} from "@fortawesome/free-solid-svg-icons";
import HeadlessTippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import AccountItem from "~/components/Accountitem";
import {  SearchIcon } from "~/components/Icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";

import * as searchService from '~/services/searchServices'
import styles from './Search.module.scss'
import { useDebounce } from "~/hooks";
import {  useEffect, useState, useRef } from "react";



const cx = classNames.bind(styles)
function Search() {
  const [searchValue,setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState([]);
  const [showResult,setShowResult] = useState(false)
  const [loading,setLoading] = useState(false)
  // 1: ' lần 1 debounced là chuỗi rỗng'
  // 2: ''
  const debouncedValue = useDebounce(searchValue,500)

  const inputRef = useRef()
  useEffect(() => {
    if(!debouncedValue.trim()){
      setSearchResult([])
      return;
    }
    
   const fetchApi = async ()=>{
setLoading(true)

    const result = await searchService.search(debouncedValue);
    setSearchResult(result);

    
setLoading(false)
   }


    fetchApi()

    
  
  }, [debouncedValue]); // nó đưa vào debounced ở đây

  const handleClear =()=>{
    setSearchValue('')
    setSearchResult([])
    inputRef.current.focus()
  }

  const handleHideResult =()=>{
setShowResult(false)
  }  
  
  const handleChange = (e) =>{
const searchValue = e.target.value
if (!searchValue.startsWith(' ')) {
  setSearchValue(searchValue);
};
  }

    
    return (  
      //Using a wrapper <div> tag around the reference element solves 
      // this by creating a new parentNode context. 
        <div>
          <HeadlessTippy
            interactive
            
            visible={showResult && searchResult.length > 0}
            render={attrs =>
              <div className={cx("search-result")} tabIndex="-1" {...attrs}>
                <PopperWrapper>
                  <h4 className={cx("search-title")}>Account</h4>
                  {searchResult.map((result) =>(
                    <AccountItem key={result.id} data ={result}  />
                  ))}
              
                </PopperWrapper>
              </div>}
         onClickOutside={handleHideResult}
          >
            <div className={cx("search")}>
              <input
              ref={inputRef}
              value={searchValue} 
              placeholder="Search account and videos" spellCheck={false} 
              onChange={handleChange} 
              onFocus={() => setShowResult(true) }
              />
             
              {!!searchValue && !loading &&(
  
              <button className={cx("clear")} 
              onClick={handleClear}>
                <FontAwesomeIcon icon={faCircleXmark} />
              </button>
              )}
             { loading && <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />}
  
              <button className={cx("search-btn")} onMouseDown={e => e.preventDefault()}>
                <SearchIcon/>
              </button>
            </div>
          </HeadlessTippy>
        </div>);
}

export default Search;