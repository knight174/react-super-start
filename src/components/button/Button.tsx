import * as React from 'react';
import './button.css';

function Button({ children, handleClick }) {
  console.log('Button re-render', children);

  return (
    <div className="button" onClick={handleClick}>
      {children}
    </div>
  );
}

// React.memo(Button) 缓存了 Button 组件，如果它所依赖的 props 未发生变化，那么就不会重新渲染
export default React.memo(Button);
