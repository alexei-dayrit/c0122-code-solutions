import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      currentImage: 0
    });
    this.handlePrevImage = this.handlePrevImage.bind(this);
    this.handleNextImage = this.handleNextImage.bind(this);
    this.handledDotClicks = this.handledDotClicks.bind(this);
  }

  componentDidMount() {
    this.intervalID = setInterval(this.handleNextImage, 3000);
  }

  handlePrevImage(event) {
    const currentImage = this.state.currentImage;
    if (currentImage === 0) {
      this.setState({ currentImage: 4 });
    } else {
      this.setState({ currentImage: currentImage - 1 });
    }
    clearInterval(this.intervalID);
    this.intervalID = setInterval(this.handleNextImage, 3000);
  }

  handleNextImage(event) {
    const currentImage = this.state.currentImage;
    if (currentImage === this.props.images.length - 1) {
      this.setState({ currentImage: 0 });
    } else {
      this.setState({ currentImage: currentImage + 1 });
    }
    clearInterval(this.intervalID);
    this.intervalID = setInterval(this.handleNextImage, 3000);
  }

  handledDotClicks(id, event) {
    if (id !== this.state.currentImage) {
      this.setState({
        currentImage: id
      });
    }
    clearInterval(this.intervalID);
    this.intervalID = setInterval(this.handleNextImage, 3000);
  }

  render() {
    const images = this.props.images;
    const currentImage = this.state.currentImage;
    return (
      <>
        <div className="row">
          <div className='col-full image-wrapper'>
            <div className="row">
              <div className="col-one-fifth prev-item flex-center">
                <i onClick={this.handlePrevImage} className="fas fa-chevron-left"></i>
              </div>
              <div className="col-three-fifths flex-center">
                <img src={images[currentImage].src} alt={images[currentImage].alt} />
              </div>
              <div className="col-one-fifth next-item flex-center">
                <i onClick={this.handleNextImage} className="fas fa-chevron-right"></i>
              </div>
            </div>
            <div className="row">
              <div className="col-full dot-container flex-center">
                {images.map((image, index) => {
                  return (
                    <React.Fragment key={image.id}>
                    {this.state.currentImage === image.id && (
                      <i key={image.id} onClick={event => this.handledDotClicks(image.id, event)} className="dot fas fa-circle"></i>
                    )}
                    {this.state.currentImage !== image.id && (
                      <i key={image.id} onClick={event => this.handledDotClicks(image.id, event)} className="dot far fa-circle"></i>
                    )}
                    </React.Fragment>);
                })}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export const images = [
  { id: 0, src: './images/004.png', alt: 'Charmander' },
  { id: 1, src: './images/001.png', alt: 'Bulbasaur' },
  { id: 2, src: './images/007.png', alt: 'Squirtle' },
  { id: 3, src: './images/025.png', alt: 'Pikachu' },
  { id: 4, src: './images/039.png', alt: 'Jigglypuff' }
];
