import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm= ({onInputChange, onButtonSubmit}) => {
    return(
      <div>
          <p className='f3'>
          {'This Magic Brain will detect faces in the pictures.'}
          </p>

          <div className='center'>
              <div className='center form pa4 br3 shadow-5'>
                <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange} />
                {/* onClick event lisents for the onButtonSubmit */}
                <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-blue' 
                onClick={onButtonSubmit}>Detecte</button>
              </div>
          </div>
          
      </div>

      

     
    );
}

export default ImageLinkForm;