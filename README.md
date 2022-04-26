# Next-Craft

Using Craft.do API and Next.js to generate a static site, and manage all content in Craft.do.

## Demo

[NextCraft](https://next-craft.vercel.app/)

[My Blog](https://zuolan.me/notes)

## Quick Start

### Create a config page

Create a new page in Craft.do, with a title of your choice (e.g. "Site Configuration"), and make it public, the content of the page should follow this format:

- Post Title 1
    - post-path-1
    - the craft.do page share link (e.g. https://www.craft.do/s/xxxxxxxxx)
- Post Title 2
    - post-path-2
    - the craft.do page share link (e.g. https://www.craft.do/s/ooooooooo)
- ...

Refer to this page for the format: [Demo Config](https://www.craft.do/s/8gQSdBtbuPjpp1), You can use backlinks in the title.

### Deploy

Clone or fork a copy of this repository to your computer or Github, and edit the contents of `blog.config.js`.

Copy the new config page share link above and paste it to `craftConfigShareUrl` in `blog.config.js`.

Replace favicon.svg, and favicon.ico in /public folder with your own

Deploy to Vercel or elsewhere, done.

More details in my blog: [Next Craft Guide](https://zuolan.me/en/next_craft_en)

## License

The MIT License.
