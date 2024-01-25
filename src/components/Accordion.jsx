import React from 'react';
import { useState } from 'react';
import './accordion.css';

const Accordion = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    setSelected((prevSelected) => (prevSelected === i ? null : i));
  };

  return (
    <div className="accordion">
      {data.map((obj, i) => (
        <div>
          <div className="accordion-section" key={i} onClick={() => toggle(i)}>
            <div className="title">
              {selected === i ? (
                <p style={{ color: '#1E1F36', fontWeight: 700 }}>{obj.title}</p>
              ) : (
                <p>{obj.title}</p>
              )}

              {selected === i ? (
                <img src="public\Path 2.png" alt="" style={{ rotate: '180deg' }} />
              ) : (
                <img src="public\Path 2.png" alt="" />
              )}
            </div>

            {selected === i && (
              <div className="content">
                <p>{obj.text}</p>
              </div>
            )}
          </div>
          <div className="line"></div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;

const data = [
  {
    title: 'How many team members can I invite?',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit Voluptas.',
  },
  {
    title: 'What is the maximum file upload size?',
    text: 'No more than 2GB. All files in your account must fit your allotted storage space.',
  },
  {
    title: 'How do I reset my password?',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit Voluptas.',
  },
  {
    title: 'Can I cancel my subscription?',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit Voluptas.',
  },
  {
    title: 'Do you provide additional support?',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit Voluptas.',
  },
];