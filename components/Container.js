import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BLOG from '@/blog.config'
import Head from 'next/head'
import PropTypes from 'prop-types'

const Container = ({ children, siteConfigObj, ...customMeta }) => {
  const meta = {
    title: siteConfigObj['Site Name'],
    description: siteConfigObj['Site Description'],
    link: siteConfigObj['Site Link'],
    type: 'website',
    ...customMeta
  }
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        {/* <meta content={BLOG.darkBackground} name='theme-color' /> */}
        <meta name='robots' content='follow, index' />
        <meta charSet='UTF-8' />
        {BLOG.seo.googleSiteVerification && (
          <meta
            name='google-site-verification'
            content={BLOG.seo.googleSiteVerification}
          />
        )}
        {BLOG.seo.keywords && (
          <meta name='keywords' content={BLOG.seo.keywords.join(', ')} />
        )}
        <meta name='description' content={meta.description} />
        <meta property='og:locale' content={BLOG.lang} />
        <meta property='og:title' content={meta.title} />
        <meta property='og:description' content={meta.description} />
        <meta
          property='og:url'
          content={meta.slug ? `${meta.link}/${meta.slug}` : meta.link}
        />
        {/* <meta
          property='og:image'
          content={`${BLOG.ogImageGenerateURL}/${encodeURIComponent(
            meta.title
          )}.png?theme=light&md=1&siteName=${encodeURIComponent(
            meta.title
          )}%20|%20${encodeURIComponent(
            meta.description
          )}&signature=${encodeURIComponent(
            meta.link
          )}`}
        /> */}
        <meta property='og:type' content={meta.type} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:description' content={meta.description} />
        <meta name='twitter:title' content={meta.title} />
        {/* <meta
          name='twitter:image'
          content={`${BLOG.ogImageGenerateURL}/${encodeURIComponent(
            meta.title
          )}.png?theme=light&md=1&siteName=${encodeURIComponent(
            meta.title
          )}%20|%20${encodeURIComponent(
            meta.description
          )}&signature=${encodeURIComponent(
            meta.link
          )}`}
        /> */}
      </Head>
      <div
        className={`wrapper ${
          BLOG.font === 'serif' ? 'font-serif' : 'font-sans'
        }`}
      >
        <Header navBarTitle={meta.title} siteConfigObj={siteConfigObj} />
        <main className='m-auto flex-grow w-full transition-all max-w-2xl px-4'>
          {children}
        </main>
        <Footer siteConfigObj={siteConfigObj} />
      </div>
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.node
}

export default Container
