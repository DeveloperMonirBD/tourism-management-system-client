import { Link } from 'react-router-dom'

const Slide = ({ image, text }) => {
  return (
    <div
      className='w-full bg-center bg-cover h-[38rem]'
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className='flex items-center justify-center w-full h-full bg-gray-800/70'>
        <div className='text-center'>
          <h1 className='text-3xl font-semibold text-white md:text-4xl lg:text-7xl mb-4 md:mb-6 px-10 lg:w-2/3 mx-auto'>
            {text}
          </h1>
          <br />
          <Link
            to='/allBooks'
            className='w-full btn btn-ghost md:w-52 px-5 text-sm font-medium text-white underline'
          >
            Let's Get Started ...
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Slide
