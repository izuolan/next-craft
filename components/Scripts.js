import Script from 'next/script'
import BLOG from '@/blog.config'

const Scripts = () => (
  <>
    {BLOG.analytics.provider === 'umami' && (
      <Script
        src={BLOG.analytics.umamiConfig.scriptUrl}
        strategy='afterInteractive'
        data-website-id={BLOG.analytics.umamiConfig.websiteId}
      />
    )}
    {/* {BLOG.autoCollapsedNavBar === true && (
      <Script strategy='lazyOnload'>
        {`var windowTop=0;
          function scrollTrigger(){
              let scrollS = window.scrollY;
              let nav = document.querySelector('.sticky-nav');
              if(scrollS >= windowTop){
                  nav.style.opacity = 0;
                  windowTop = scrollS;
              }else{
                  nav.style.opacity = 1;
                  windowTop = scrollS;
              }
          };
          window.addEventListener('scroll',scrollTrigger);`}
      </Script>
    )} */}
  </>
)

export default Scripts
