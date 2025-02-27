// src/components/ReactionPicker/ReactionPicker.jsx
import { useState } from 'react';
import { Picker } from 'emoji-mart';
import { Smile } from 'react-icons/feather';

export default function ReactionPicker({ onSelect }) {
  const [showPicker, setShowPicker] = useState(false);

  return (
    <div className="reaction-picker">
      <button 
        onClick={() => setShowPicker(!showPicker)}
        className="emoji-trigger"
      >
        <Smile size={18} />
      </button>
      
      {showPicker && (
        <div className="picker-container">
          <Picker
            onSelect={(emoji) => {
              onSelect(emoji.native);
              setShowPicker(false);
            }}
            theme="dark"
          />
        </div>
      )}
    </div>
  );
}