import React from 'react';
import { CodeBlock, dracula } from 'react-code-blocks';

import { useRemembrallContext } from '../context/RemembrallContext';

const Window = () => {
  const { remembralls, currentIndex } = useRemembrallContext();

  return (
    <div className="flex flex-col w-3/5 space-y-4 bg-gray-50">
      <h3 className="text-xl font-thin uppercase">
        {remembralls[currentIndex].title}
      </h3>
      <div className="flex space-x-2">
        {remembralls[currentIndex].tags.map((tag) => (
          <span className="px-4 py-2 text-sm font-bold uppercase rounded-full bg-rose-50">
            {tag}
          </span>
        ))}
      </div>
      <CodeBlock
        text={remembralls[currentIndex].code}
        language={'jsx'}
        theme={dracula}
      />
      {remembralls[1]?.title}
    </div>
  );
};

export default Window;
