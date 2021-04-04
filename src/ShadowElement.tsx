/*
 * @Author: Kanata You 
 * @Date: 2021-04-02 22:34:39 
 * @Last Modified by: Kanata You
 * @Last Modified time: 2021-04-02 23:00:58
 */

import React, { useState } from "react";
import { createPortal } from "react-dom";


const ShadowElement: React.FC = ({ children }) => {
  const [root, setRoot] = useState<ShadowRoot|null>(null);

  return (children && (
    <div
      ref={
        e => {
          if (!e || root) {
            return;
          }
          const shadowRoot = e.attachShadow({ mode: 'closed' });
          setRoot(shadowRoot);
        }
      } >
        {
          root && createPortal(children, root as unknown as HTMLDivElement)
        }
    </div>
  )) || null;
};


export default ShadowElement;
