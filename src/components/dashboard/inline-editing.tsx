import React, { useState, ChangeEvent, KeyboardEvent, FocusEvent } from 'react';

interface InlineEditProps {
  value: string;
  setValue: (newValue: string) => void;
}

const InlineEdit: React.FC<InlineEditProps> = ({ value, setValue }) => {
  const [editingValue, setEditingValue] = useState(value);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => setEditingValue(event.target.value);

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' || event.key === 'Escape') {
      event.currentTarget.blur();
    }
  };

  const onBlur = (event: FocusEvent<HTMLInputElement>) => {
    if (event.target.value.trim() === '') {
      setEditingValue(value);
    } else {
      setValue(event.target.value);
    }
  };

  return (
    <input
      type="text"
      aria-label="Field name"
      value={editingValue}
      onChange={onChange}
      onKeyDown={onKeyDown}
      onBlur={onBlur}
    />
  );
};

export default InlineEdit;
