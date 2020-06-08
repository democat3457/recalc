import propTypes from "prop-types";
import React from "react";

import { UnlabeledQtyInput } from "./QtyInput";

export default function TabularInput(props) {
  return (
    <div className="table-container">
      <table className="table is-narrow center-table">
        <thead>
          <tr>
            {props.headers.map((h) => {
              if (h instanceof Array) {
                return (
                  <th key={h[0]}>
                    <span
                      data-tooltip={h[1]}
                      className="has-tooltip-left has-tooltip-multiline has-tooltip-text-left"
                    >
                      {h[0]}
                    </span>
                  </th>
                );
              } else {
                return <th key={h}>{h}</th>;
              }
            })}
          </tr>
        </thead>
        <tbody>
          {props.inputs.map(([input, setInput], i) => {
            return (
              <tr key={`${i}`}>
                <td>{props.labels[i]}</td>
                {Object.keys(input).map((k, j) => {
                  if (k === "enabled") {
                    return (
                      <td key={`${i}_${k}_${props.labels[i]}`}>
                        <label className="checkbox">
                          <input
                            type="checkbox"
                            checked={input[k]}
                            onChange={() => {
                              setInput({
                                ...input,
                                [k]: !input[k],
                              });
                            }}
                          />
                        </label>
                      </td>
                    );
                  } else {
                    return (
                      <td key={`${i}_${k}_${props.labels[i]}`}>
                        <UnlabeledQtyInput
                          stateHook={[
                            input[k],
                            (v) => {
                              setInput({
                                ...input,
                                [k]: v,
                              });
                            },
                          ]}
                          choices={props.choices[j]}
                        />
                      </td>
                    );
                  }
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

TabularInput.propTypes = {
  headers: propTypes.arrayOf(propTypes.string),
  inputs: propTypes.arrayOf(propTypes.arrayOf(propTypes.any, propTypes.func)),
  labels: propTypes.arrayOf(propTypes.string),
  choices: propTypes.arrayOf(propTypes.arrayOf(propTypes.string)),
};
