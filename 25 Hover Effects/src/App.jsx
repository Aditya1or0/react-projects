import React from "react";
import { useState } from "react";
import CodeBlock from "./assets/CodeBlock.jsx";

const hoverEffects = [
  {
    name: "Scale",
    className: "transform hover:scale-110 transition-transform",
    code: '<div className="transform hover:scale-110 transition-transform">Scale</div>',
  },
  {
    name: "Rotate",
    className: "hover:rotate-12 transition-transform",
    code: '<div className="hover:rotate-12 transition-transform">Rotate</div>',
  },
  {
    name: "Skew",
    className: "hover:skew-x-12 transition-transform",
    code: '<div className="hover:skew-x-12 transition-transform">Skew</div>',
  },
  {
    name: "Translate",
    className: "hover:-translate-y-2 transition-transform",
    code: '<div className="hover:-translate-y-2 transition-transform">Translate</div>',
  },
  {
    name: "Shadow",
    className: "hover:shadow-lg transition-shadow",
    code: '<div className="hover:shadow-lg transition-shadow">Shadow</div>',
  },
  {
    name: "Color Change",
    className: "hover:text-blue-500 transition-colors",
    code: '<div className="hover:text-blue-500 transition-colors">Color Change</div>',
  },
  {
    name: "Background Color",
    className: "hover:bg-yellow-200 transition-colors",
    code: '<div className="hover:bg-yellow-200 transition-colors">Background Color</div>',
  },
  {
    name: "Border",
    className: "hover:border-2 hover:border-red-500 transition-all",
    code: '<div className="hover:border-2 hover:border-red-500 transition-all">Border</div>',
  },
  {
    name: "Opacity",
    className: "hover:opacity-50 transition-opacity",
    code: '<div className="hover:opacity-50 transition-opacity">Opacity</div>',
  },
  {
    name: "Blur",
    className: "hover:blur-sm transition-all",
    code: '<div className="hover:blur-sm transition-all">Blur</div>',
  },
  {
    name: "Grayscale",
    className: "hover:grayscale transition-all",
    code: '<div className="hover:grayscale transition-all">Grayscale</div>',
  },
  {
    name: "Invert",
    className: "hover:invert transition-all",
    code: '<div className="hover:invert transition-all">Invert</div>',
  },
  {
    name: "Sepia",
    className: "hover:sepia transition-all",
    code: '<div className="hover:sepia transition-all">Sepia</div>',
  },
  {
    name: "Saturate",
    className: "hover:saturate-200 transition-all",
    code: '<div className="hover:saturate-200 transition-all">Saturate</div>',
  },
  {
    name: "Contrast",
    className: "hover:contrast-200 transition-all",
    code: '<div className="hover:contrast-200 transition-all">Contrast</div>',
  },
  {
    name: "Hue Rotate",
    className: "hover:hue-rotate-90 transition-all",
    code: '<div className="hover:hue-rotate-90 transition-all">Hue Rotate</div>',
  },
  {
    name: "Text Decoration",
    className: "hover:underline transition-all",
    code: '<div className="hover:underline transition-all">Text Decoration</div>',
  },
  {
    name: "Text Transform",
    className: "hover:uppercase transition-all",
    code: '<div className="hover:uppercase transition-all">Text Transform</div>',
  },
  {
    name: "Letter Spacing",
    className: "hover:tracking-widest transition-all",
    code: '<div className="hover:tracking-widest transition-all">Letter Spacing</div>',
  },
  {
    name: "Font Weight",
    className: "hover:font-bold transition-all",
    code: '<div className="hover:font-bold transition-all">Font Weight</div>',
  },
  {
    name: "Outline",
    className:
      "hover:outline hover:outline-2 hover:outline-blue-500 transition-all",
    code: '<div className="hover:outline hover:outline-2 hover:outline-blue-500 transition-all">Outline</div>',
  },
  {
    name: "Ring",
    className: "hover:ring-2 hover:ring-purple-500 transition-all",
    code: '<div className="hover:ring-2 hover:ring-purple-500 transition-all">Ring</div>',
  },
  {
    name: "Backdrop Blur",
    className: "hover:backdrop-blur-sm transition-all",
    code: '<div className="hover:backdrop-blur-sm transition-all">Backdrop Blur</div>',
  },
  {
    name: "Mix Blend",
    className: "hover:mix-blend-multiply transition-all",
    code: '<div className="hover:mix-blend-multiply transition-all">Mix Blend</div>',
  },
  {
    name: "Gradient",
    className:
      "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 transition-all",
    code: '<div className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 transition-all">Gradient</div>',
  },
];

const App = () => {
  const [selectedEffect, setSelectedEffect] = useState(null);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {hoverEffects.map((effect) => (
        <div key={effect.name} className="relative">
          <div
            className={`p-4 border rounded ${effect.className} cursor-pointer`}
            onClick={() => setSelectedEffect(effect.name)}
          >
            {effect.name}
          </div>
          {selectedEffect === effect.name && (
            <CodeBlock code={effect.code} language="html" />
          )}
        </div>
      ))}
    </div>
  );
};

export default App;
