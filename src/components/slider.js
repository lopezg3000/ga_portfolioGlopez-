import React, { Component } from 'react';
import Slide from './slide';
import SliderNav from './sliderNav';
import ImmuneBuilder from '../assets/homepageImages/immuneBuilder.jpg';
import CleanBlends from '../assets/homepageImages/cleanBlends.jpg';
import FiveDollarFriday from '../assets/homepageImages/fiveDollarFriday.jpg';
import './slider.css';

//improvements: 
// 1. stop swipe when trying to scroll up
// 2. drag slide to preview next or see past
// 3. Refactor code
// 4. make count change with state
// 5. bug with pressing button since on-pointer events set to none


class Slider extends Component {
    state = {
        width: 0,
        activeIndex: 0,
        xInitial: '',
        sliderItems: 3
    }

    componentDidMount() {
        this.updateDimensions();
        window.addEventListener('resize', this.updateDimensions);
    };

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    };

    updateDimensions = () => {
        const width = this.slider.clientWidth;
        this.setState({ width })
    };

    immuneBuilderHeadline() {
        return (
            <React.Fragment>
                <span>Immune Builder</span>
                <sup><i className="far fa-registered"></i></sup>
                <span>&nbsp; Veggie Superfood</span>
            </React.Fragment>
        );
    };

    immuneBuilderDescription() {
        return (
            <React.Fragment>
                <span>
                    Rich in antioxidants, each smoothie is
                    blended with more than 800% of your daily vitamin C,
                    plus zinc,iron and calcium to support a healthier
                    immune system.
                </span>
            </React.Fragment>
        );
    };

    cleanBlendsDescription() {
        return (
            <React.Fragment>
                <span>It’s our commitment to blend a more nutritious Smoothie.</span>
                <br />
                <span>From the bottom of the cup up.</span>
            </React.Fragment>
        );
    };

    handlePrevClick = () => {
        if (this.state.activeIndex > 0) {
            this.setState({ activeIndex: this.state.activeIndex - 1 });
        } else {
            this.setState({ activeIndex: 2 })
        }
    };

    handleNextClick = () => {
        if (this.state.activeIndex < 2) {
            this.setState({ activeIndex: this.state.activeIndex + 1 });
        } else {
            this.setState({ activeIndex: 0 })
        }
    };

    unify(e) {
        return e.changedTouches ? e.changedTouches[0] : e;
    };

    lock(e) {
        const xInitial = this.unify(e).clientX;
        this.setState({ xInitial });
    };

    move(e) {
        const sliderItems = this.state.sliderItems;
        const xInitial = this.state.xInitial;
        let activeIndex = this.state.activeIndex;
        if (xInitial || xInitial === 0) {
            let deltaX = this.unify(e).clientX - xInitial, s = Math.sign(deltaX);

            if ((activeIndex > 0 || s < 0) && (activeIndex < sliderItems - 1 || s > 0)) {
                activeIndex -= s;
                this.setState({ activeIndex });
            }

            this.setState({ xInitial: '' });
        }
    }

    handleTouchStart = e => {
        this.lock(e);
    };

    handleMouseUp = e => {
        this.lock(e);
    };

    handleTouchEnd = e => {
        this.move(e);
    };

    handleMouseDown = e => {
        this.move(e);
    };

    formatActiveSlide() {
        const activeIndex = this.state.activeIndex;
        return `0${activeIndex + 1}`;
    }


    render() {
        const { width, sliderItems } = this.state;
        let sliderStyle = {
            transform: `translateX(${this.state.activeIndex * -33.3}%)`,
            transition: '0.5s'
        }

        return (
            <React.Fragment>
                <div
                    className='slider-container'
                    ref={(slider) => { this.slider = slider }}
                    onTouchStart={this.handleTouchStart}
                    onMouseUp={this.handleMouseUp}
                    onMouseDown={this.handleMouseDown}
                    onTouchEnd={this.handleTouchEnd}
                >
                    <div className='slider-items' style={sliderStyle}>
                        <Slide
                            eyebrow='New flavor. Same benefits.'
                            headline={this.immuneBuilderHeadline()}
                            description={this.immuneBuilderDescription()}
                            src={ImmuneBuilder}
                            text='Show me more'
                            width={width}
                        />
                        <Slide
                            eyebrow='Our Promise'
                            headline='Clean Blends'
                            description={this.cleanBlendsDescription()}
                            src={CleanBlends}
                            text='Get the Clean Blends Detail'
                            width={width}
                        />
                        <Slide
                            eyebrow='Is it Friday?'
                            headline='Get Yours For Just $5'
                            description='Every Friday, any regular 32 oz. Smoothie is just $5.'
                            src={FiveDollarFriday}
                            text='How do you Friday?'
                            width={width}
                        />
                    </div>
                </div>
                <SliderNav
                    onPrevClick={this.handlePrevClick}
                    onNextClick={this.handleNextClick}
                    activeSlide={this.formatActiveSlide()}
                    sliderItems={`0${sliderItems}`}

                />
            </React.Fragment>
        );
    }
}

export default Slider;