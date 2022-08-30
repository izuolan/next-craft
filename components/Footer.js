const Footer = ({ siteConfigObj }) => {
  return (
    <div className='mt-6 flex-shrink-0 m-auto w-full text-gray-600 dark:text-gray-300 transition-all max-w-2xl'>
      <footer className='max-w-screen-2xl px-4 mx-auto'>
        <div className='text-gray-400 text-xs font-light py-4 border-t dark:border-gray-600'>
          {siteConfigObj['Footer Text']}
          <p className='md:float-right'>
            {siteConfigObj['Copyright Text']}
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Footer
