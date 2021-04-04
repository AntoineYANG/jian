/*
 * @Author: Kanata You 
 * @Date: 2021-04-02 21:20:47 
 * @Last Modified by: Kanata You
 * @Last Modified time: 2021-04-02 23:12:08
 */

import React, { useState, useCallback } from "react";
import ShadowElement from "./ShadowElement";


export type JianMode = (
  "number" | "letter" | "advanced"
);

export interface JianProps {
  allModes:   [JianMode, ...JianMode[]];
  mode?:      JianMode;
  style?:     React.CSSProperties;
  children?:  undefined;
};

const Jian: React.FC<JianProps> = props => {
  // 确定 mode
  const defaultMode = (
    props.mode && props.allModes.includes(props.mode)
  ) ? props.mode : props.allModes[0];
  let [curMode, setMode] = useState<JianMode>(props.allModes[0]);
  let mode: JianMode = curMode;
  useCallback(() => {
    // 如果根据 props 的规则，mode 改变，则优先根据 props 确定；反之，由 state 控制.
    if (defaultMode !== mode) {
      curMode = defaultMode;
    }
  }, [defaultMode]);

  return (
    <ShadowElement>
      <style>
        {
          `
          main {
            display:    block;
            position:   fixed;
            top:        0px;
            left:       0px;
            bottom:     0px;
            right:      0px;
            width:      100vw;
            height:     100vh;
            background: white;
            z-index:    32766;
          }
          div.jian {
            margin:     auto;
            border:     1px solid black;
            min-width:  20px;
            min-height: 20px;
            height:     max-content;
            opacity:    0.6;
            filter:     blur(1px);
          }
          @media screen and (orientation: portrait) {
            div.jian {
              position:   fixed;
              top:        auto;
              right:      0px;
              bottom:     0px;
              left:       0px;
              width:      auto;
              margin:     16px;
              max-width:  calc(100vw - 34px);
              max-height: calc(100vh - 34px);
            }
          }
          @media screen and (orientation: landscape) {
            div.jian {
              position:   fixed;
              top:        auto;
              right:      auto;
              bottom:     0px;
              left:       auto;
              margin:     16px;
              width:      max-content;
              max-width:  calc(100vw - 34px);
              max-height: calc(100vh - 34px);
            }
          }
          `
        }
      </style>
      <main>
        <div className="jian" >
          
        </div>
      </main>
    </ShadowElement>
  );
};


export default Jian;
