import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

function Briefing() {
  const [content, setContent] = useState('');

  useEffect(() => {

    console.log('Fetching briefing content');
    // Supondo que o arquivo esteja em public/posts/meu-texto.md e isso
    fetch(`${import.meta.env.BASE_URL}arquivos/briefing-sbm.md`)
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <div style={{ padding: '19px' }}>
      <ReactMarkdown>
        {content}
      </ReactMarkdown>
    </div>
  );
}

export default Briefing;