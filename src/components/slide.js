import React from 'react';
import Button from './button';

const Slide = ({ eyebrow, headline, description, text, src, width }) => {
    return (
        <div className='carousel-cell slide' style={{ width }}>
            <div className='slide-info-column'>
                <div className='max-wrapper'>
                    <h2 className='eyebrow'>{eyebrow}</h2>
                    <h3 className='headline'>{headline}</h3>
                    <p className='description'>{description}</p>
                    <Button text={text} />
                </div>
            </div>
            <div className='slide-image-column'>
                <div className='image-wrapper'>
                    <img src={src} />
                </div>
            </div>
        </div>
    );
}

export default Slide;