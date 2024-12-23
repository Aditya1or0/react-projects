import React from "react";

const CodeBlock = ({ code, language }) => {
  return (
    <div className="bg-gray-800 text-white p-4 rounded">
      <pre>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
