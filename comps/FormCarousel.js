import React, { useEffect, useState, useRef } from 'react';

const FormCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [formValues, setFormValues] = useState({});
  const [displayForm, setDisplayForm] = useState(false);
  const [editing, setEditing] = useState(null);

  const formElements = [
    {
      type: 'text',
      name: 'category',
      label: 'Category'
    },
    {
      type: 'text',
      name: 'diagnosis',
      label: 'Diagnosis'
    },
    {
      type: 'text',
      name: 'patient',
      label: 'Patient'
    },
    {
        type: 'text',
        name: 'story',
        label: 'Story'
      }
  ];

  useEffect(() => { console.log(formValues) }, [formValues])

  const handleChange = event => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    setDisplayForm(true);
  };

  const handleNext = () => {
    if (currentIndex <= formElements.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleUpdate = (event, index) => {
    event.preventDefault();
    setEditing(index);
  };

  const reset = () => {
    setFormValues({}); setCurrentIndex(0); setDisplayForm(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !displayForm) {
        handleNext();
      console.log('Enter key was pressed');
    }
  };

  if (displayForm) {
    return (
      <div>
        {formElements.map((formElement, index) => (
          <div key={formElement.name}>
            <label>{formElement.label}: </label>
            {editing === index ? (
              <input
                type={formElement.type}
                name={formElement.name}
                value={formValues[formElement.name] || ''}
                onChange={handleChange}
                onBlur={() => setEditing(null)}
              />
            ) : (
              <span onClick={event => handleUpdate(event, index)}>{formValues[formElement.name] || ''}</span>
            )}
          </div>
        ))}
        <button onClick={(e) => {e.preventDefault(); if (window.confirm('ready to post?')){ reset() };}} className='p-2 border-[1px] mt-2 min-w-[100px] border-white rounded-md'>Ready to submit?</button>
      </div>
    );
  } else {
    return (
      <form onKeyDown={handleKeyDown} className='flex flex-col' onSubmit={handleSubmit}>
        {formElements.map((formElement, index) => (
          <div key={formElement.name} className={`${index === currentIndex ? 'flex' : 'hidden'}`}>
            <label className={`font-thin self-center uppercase tracking-widest`}>{formElement.label}</label>
            <input
              type={formElement.type}
              name={formElement.name}
              value={formValues[formElement.name] || ''}
              onChange={handleChange}
              className={`rounded-md self-center p-2`}
              autoComplete={'off'}
            />
          </div>
        ))}
        <div className='flex items-center justify-center gap-2'>
        {currentIndex > 0 && (
          <button type="button" className='p-2 border-[1px] mt-2 min-w-[100px] border-white rounded-md' onClick={handlePrev}>
            Previous
          </button>
        )}
        {  currentIndex < formElements.length - 1 && (
    <button type="button" className='p-2 border-[1px] mt-2 min-w-[100px] border-white rounded-md' onClick={handleNext}>
      Next
    </button>
  )}
  {currentIndex === formElements.length - 1 && (
    <button type="submit" className='p-2 border-[1px] mt-2 min-w-[100px] border-white rounded-md'>Submit</button>
  )}
  </div>
</form>
  );
}
};

export default FormCarousel;

