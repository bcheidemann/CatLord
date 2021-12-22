import React from 'react';

function levelToColor(level) {
  switch (level) {
    case 'warning':
      return 'yellow';
    case 'error':
      return 'red';
    default:
      return level;
  }
}

export default ({ value }) => {
  if (!value || !value.level) {
    return null;
  }

  return (
    <div style={{
      backgroundColor: levelToColor(value.level),
      borderRadius: '16px',
      padding: '1px 16px',
    }}>
      <h4>
        Info Box
      </h4>
      {/* TODO: display content */}
    </div>
  );
};
