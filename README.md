# React-Headroom Preact Webpack App

This project implements a React-Headroom component using Preact and Webpack. It provides a header that hides when scrolling down and reappears when scrolling up, improving the user experience for long-scrolling pages.

## Features

- Implements React-Headroom functionality with Preact
- Uses Webpack for bundling and optimization
- Supports hot module replacement for faster development
- Fully responsive design

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/react-headroom-preact.git
   cd react-headroom-preact
   ```

2. Install dependencies:
   ```
   npm install
   ```

## Usage

To start the development server:

```
npm start
```

This will open the application in your default browser at `http://localhost:3000`.

To build the application for production:

```
npm run build
```

This will create a `dist` folder with the bundled and optimized files ready for deployment.

## Implementing the Headroom Component

The `Headroom` component can be used to wrap any header or fixed-position element that you want to hide/show based on scroll direction.

Example usage:

```jsx
import { h } from 'preact';
import Headroom from './Headroom';

const App = () => {
  return (
    <div>
      <Headroom>
        <header>
          <h1>Your Site Title</h1>
          <nav>
            {/* Your navigation items */}
          </nav>
        </header>
      </Headroom>
      <main>
        {/* Your main content */}
      </main>
    </div>
  );
};

export default App;
```

## Customization

You can customize the behavior and appearance of the Headroom component by modifying the `Headroom.js` file. The main properties you might want to adjust are:

- `height`: The height threshold for when the header should start pinning/unpinning.
- `pinStart`: The scroll position at which the header should start pinning.
- `translateY`: The amount of vertical translation applied when hiding/showing the header.

You can also modify the CSS in `styles.css` to change the visual appearance of the header and other elements.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the [MIT License](LICENSE).
