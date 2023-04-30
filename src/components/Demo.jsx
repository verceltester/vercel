import host from '../config'
import { useState } from 'react'
import {  linkIcon, loader } from '../assets'
import {useQuery} from 'react-query'

const Demo = () => {

  const [article, setArticle] = useState({
    url:'',
    summary:''
  })

  let {data, status, refetch} = useQuery("cacheData", fetchData, {enabled:false})

  async function fetchData() {
    let res = await fetch(`${host}api?url=${article.url}`);
      let text = await res.text();
      // console.log(text)
      return text
  }

  function handleSubmit(e) {
    e.preventDefault()
    // fetch('http://127.0.0.1:3000/')
    //   .then(res => res.text())
    //   .then(text => {
    //     setCacheHtml(text)
    //   }); 
    refetch()
  }

  return (
    <>
    <section className='mt-16 w-full max-w-xl'>
      <div className='flex flex-col w-full gap-2'>
        <form 
          className='relative flex justify-center items-center'          
          onSubmit={handleSubmit}
        >
          <img 
            src={linkIcon}
            alt="link_icon"
            className="absolute left-0 my-2 ml-3 w-5"
          />

          <input 
            type="url"
            placeholder='Enter a URL'
            value={article.url}
            required
            onChange={(e) => setArticle({...article, url:e.target.value})}
            className="url_input peer"
          />

          <button
            type='submit'
            className='submit_btn peer-focus:border-gray-700
            peer-focus:text-gray-700'
          >
            ↵
          </button>
        </form>
        
        {/* Browser URL History */}

      </div> 

      {/* Display Results */}
    </section>
      <div>{status === "loading" && <img src={loader}></img>}</div>
        <iframe className='w-full mt-10' height={1000} srcDoc={data}></iframe>
        </>
  )
}

export default Demo

//sandbox={"allow-same-origin"}