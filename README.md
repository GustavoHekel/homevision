# Homevision

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ **This workspace has been generated by [Nx, Smart Monorepos · Fast CI.](https://nx.dev)** ✨

### Install dependencies

Run `npm install` to ensure you can run the app.

### Make sure your .env file is in place

Just copy the .env.example or rename it to .env

### Start the application

Run `npx nx dev homevision` to start the development server.

### Check the Design System

Run `npx nx storybook ui` to start storybook.

### Explore the project graph

Run `npx nx graph` to show the graph of the workspace.

### Build for production

Run `npx nx build homevision` to build the application.

## Notes

### Implementation
* Since we're consuming the data from a flaky API, it's important to not break the UX
* For that, I've added a "retry" method in case of failure (max. 5 retries)
* In the case of failure the app will try to fetch the data again, until the 5th time, if it's still failing, then a button with the label "Load more houses" will be presented to the user

### Improvements
* For image optimization, I'd use the next/image component, but that requires devs to know all domains from which the images will be served, in this case I don't have that information. In a production app I'd host the images in a S3 bucket and serve them through a CDN
* For large lists I'd try to use a virtualization approach (just keeping a set of records big enough to populate the viewport) as it will improve performance when loading hundreds of lines in the DOM, this might be more suitable for tables and grids, but in catalogs It'd be better to have a pagination method, as it'll make it easier to narrow results and bookmark them
* Some unit tests are missing due to the complexity of the components, in those cases I think it's better to implement integration tests

### Time spent
* ~9hs
