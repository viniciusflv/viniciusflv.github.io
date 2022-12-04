import { useReducer } from 'react';

export const DemoButton = () => {
  const [active, toggleActive] = useReducer((prev) => {
    return !prev;
  }, false);

  return (
    <button
      className={`
      cursor-pointer
      py-5
      px-10
      w-full
      max-w-64
      rounded
      truncate
      text-white
      ${active ? 'bg-dracula-comment' : 'bg-dracula-currentLine'}
      `}
      onClick={toggleActive}
    >
      DemoButton
    </button>
  );
};
