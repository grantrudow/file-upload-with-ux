import React from 'react';
import logo from './logo.svg';
import './App.css';
import useFileHandlers from './useFileHandlers';

const Input = (props) => (
  <input 
    type="file" 
    name="file-input" 
    multiple 
    {...props} 
  />
)

const App = () => {
  const {
    files,
    pending,
    next,
    uploading,
    uploaded,
    status,
    onSubmit,
    onChange,
  } = useFileHandlers()

  return (
    <div className="container">
      <form className="form" onSubmit={onSubmit}>
        {status === 'FILES_UPLOADED' && (
          <div className="success-container">
            <div>
              <h2>Congratulations!</h2>
              <small>You uploaded your files. Get some rest.</small>
            </div>
          </div>
        )}
        <div>
          <Input onChange={onChange} />
          <button type="submit">Submit</button>
        </div>
        <div>
          {files.map(({ file, src, id }, index) => (
            <div key={`thumbs${index}`} className="thumbnail-wrapper" >
              <img className="thumbnail" src={src} alt ="" />
              <div className="thumbnail-caption">{file.name}</div>
            </div>
          ))}
        </div>
      </form>
    </div>
  )
}

export default App;
