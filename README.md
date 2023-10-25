# Microfrontends example

This repository serves as an example of a microfrontends setup using Webpack and the Webpack Module Federation plugin. The project makes several key decisions to optimize microfrontend architecture:

- Each child application knows how to mount itself.
- Seamless communication between child apps and the container is achieved through callbacks that are swapped when the container calls the `mount` function.
- Shared dependencies, such as React and React-DOM, are utilized to reduce the frontend bundle size.


## Challenges and lessons learned

### Application communication

One notable challenge was related to application communication, particularly due to certain React implementation details.

React mounts and renders on the DOM asynchronously, resulting in a delay between when the container calls the child's `mount` function and when the child has subscribed to the provided callbacks. In some cases, if a callback is invoked early, the child application may not have fully subscribed to it.

To address this issue, one potential solution is to implement retryability to ensure successful communication.

Another challenge is the difficulty of extracting functions that originate within a React application and sharing them with the container. This is particularly relevant when the container calls the child's `mount` function and expects a function from the child's React application. To overcome this, it's possible to use options like observables and object mutations to pass functions between applications.

Finally, dealing with callbacks proved to be somewhat cumbersome. With every new message required between apps, I had to create another callback. This approach would become much more complex as communication requirements increased.

In future implementations, I would consider using a message broker system with PubSub functionality and replayability, similar to a Kafka queue, to overcome those issues.

### Dependency sharing and increased bundle size

Although all applications in the project use Material-UI (MUI), sharing MUI as a shared dependency led to an unexpected increase in bundle size. This occurred because including a package in the "shared dependencies" array of module federation creates a vendor bundle for the entire package, even if only a small part of it is used in each child application.

A possible solution for this would be to have another application that served as a component library, which used MUI. The rest of the applications wouldn't need to use MUI directly, but would instead use the component library.

The project's experience suggests that optimizing dependency sharing requires careful consideration of the package's size and the actual parts of the package used by each application. Balancing shared dependencies and duplications is essential for optimizing bundle size.

### Vite module federation plugin

Initially, I used Vite instead of Webpack, but I encountered several issues:

- Vite module federation does not support dev mode due to Vite's bundleless nature. This required additional configuration to simulate development behavior in a production build.
- Sharing dependencies for React and React-DOM caused issues that impacted the website's functionality. There is an [ongoing issue about this on GitHub vite-plugin-federation](https://github.com/originjs/vite-plugin-federation/issues/242).
- I wasn't able to use Vite as the host and Webpack as the remote. There is an [ongoing issue about this on GitHub vite-plugin-federation](https://github.com/originjs/vite-plugin-federation/issues/396).

Ultimately, these issues led to the decision to use Webpack module federation for this project.


## Running the project for development

1. Make sure Node is installed. You can install it at [Node.js](https://nodejs.org/en/download/).
2. Clone the repository and navigate to the project directory.
3. Run `npm install` to install dependencies for all packages.
4. Run `npm run dev-all` to run all packages (concurrently) in development mode.
5. Open a web browser and navigate to [http://localhost:8000](http://localhost:8000) to see the project.


## Known issues

Please note that this project isn't yet complete, and GitHub Actions aren't set up properly. Due to Terraform state locking, the workflows can't run simultaneously. To resolve this, you can consider the following solutions:

Separate the infrastructure into a different package or repository that runs separately from the microfrontend packages.
Have a single workflow instead of three and decide which packages to build within that workflow.

