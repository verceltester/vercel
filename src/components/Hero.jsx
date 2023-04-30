import { logo } from '../assets'
const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt="sumz_logo" className='w-28 object-contain'/>
        <button type='button' className="black_btn">Github</button>
      </nav>

      <h1 className='head_text'>
        Access paywalled Articles with <br className='max-md:hidden'/> 
        <span className='orange_gradient'>Paywall Remover</span>
      </h1>
      <h2 className='desc'>
        Simplify your reading with Paywall Remover, a free service that removes paywall and gives you access to articles
      </h2>
    </header>
  )
}

export default Hero