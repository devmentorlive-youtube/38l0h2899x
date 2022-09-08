import { useState } from "react";

export default function Homepage() {
  const choices = ["choice 1", "choice 2", "choice 3", "choice 4"];
  const [selectedChoices, setSelectedChoices] = useState([]);

  function toggle(array, item) {
    return array.includes(item)
      ? array.filter((_item) => _item !== item)
      : [...array, item];
  }

  return (
    <div className="mt-16 container mx-auto">
      <div className="border p-2">{selectedChoices}</div>
      {choices.map((choice) => (
        <div onClick={() => setSelectedChoices((prev) => toggle(prev, choice))}>
          {choice}
        </div>
      ))}
    </div>
  );
}
