import { h, Component } from 'preact';

class Headroom extends Component {
  state = {
    pinned: true,
    unpinned: false,
    top: 0,
    height: 0,
    scrollY: 0,
    lastScrollY: 0,
  };

  componentDidMount() {
    this.setHeightOffset();
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.setHeightOffset);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.setHeightOffset);
  }

  setHeightOffset = () => {
    const height = this.inner.offsetHeight;
    this.setState({ height });
  };

  handleScroll = () => {
    const scrollY = window.pageYOffset;
    const { lastScrollY, height, pinned, unpinned, top } = this.state;

    if (scrollY < height) {
      this.setState({ top: true, pinned: false, unpinned: false });
    } else if (scrollY > lastScrollY && !unpinned) {
      this.setState({ top: false, pinned: false, unpinned: true });
    } else if (scrollY < lastScrollY && !pinned) {
      this.setState({ top: false, pinned: true, unpinned: false });
    }

    this.setState({ scrollY, lastScrollY: scrollY });
  };

  render({ children }, { pinned, unpinned, top }) {
    const style = {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1,
      transform: !top && (pinned ? 'translateY(0)' : 'translateY(-100%)'),
      transition: 'all .2s ease-in-out'
    };

    return (
      <div style={style} ref={el => this.inner = el}>
        {children}
      </div>
    );
  }
}

export default Headroom;
