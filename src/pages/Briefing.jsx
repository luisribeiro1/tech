import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import Menu1 from '../components/Menu1';

function Briefing() {
  const [content, setContent] = useState('');

  useEffect(() => {

    console.log('Fetching briefing content');
    // Supondo que o arquivo esteja em public/posts/meu-texto.md e isso
    fetch(`${import.meta.env.BASE_URL}arquivos/briefing-moburb2.md`)
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <div>
      <div className="row">
        <div className="col-md-3">
          <Menu1 />
        </div>
        <div className="col-md-9 px-4">
          <ReactMarkdown>
            {content}
          </ReactMarkdown>
        </div>
      </div>
    </div>

  );
}

export default Briefing;