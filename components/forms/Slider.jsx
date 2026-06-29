import React from "react";

const css = `
.om-slider { display: flex; flex-direction: column; gap: 9px; font-family: var(--font-body); }
.om-slider__top { display: flex; align-items: baseline; gap: 10px; }
.om-slider__label { font-size: var(--fs-body-sm); font-weight: var(--fw-medium); color: var(--text-secondary); }
.om-slider__value {
  margin-left: auto; font-family: var(--font-mono); font-size: var(--fs-body-sm);
  color: var(--text-primary); font-variant-numeric: tabular-nums;
}
.om-slider__input {
  -webkit-appearance: none; appearance: none; width: 100%; height: 6px; margin: 6px 0; cursor: pointer;
  background: linear-gradient(var(--accent), var(--accent)) 0 / var(--_pct, 0%) 100% no-repeat, var(--surface-sunken);
  border: var(--hairline) solid var(--border-default); border-radius: var(--radius-pill);
  transition: box-shadow var(--dur-base) var(--ease-out);
}
.om-slider__input:focus-visible { outline: none; box-shadow: 0 0 0 3px var(--accent-soft); }
.om-slider__input[disabled] { opacity: 0.5; cursor: not-allowed; }
.om-slider__input::-webkit-slider-thumb {
  -webkit-appearance: none; appearance: none; width: 18px; height: 18px; border-radius: 50%;
  background: #fff; border: var(--hairline) solid var(--border-strong);
  box-shadow: var(--shadow-sm), var(--glow-accent);
  transition: transform var(--dur-fast) var(--ease-spring);
}
.om-slider__input::-webkit-slider-thumb:active { transform: scale(1.18); }
.om-slider__input::-moz-range-thumb {
  width: 18px; height: 18px; border-radius: 50%; background: #fff;
  border: var(--hairline) solid var(--border-strong); box-shadow: var(--shadow-sm), var(--glow-accent);
}
.om-slider__ticks { display: flex; justify-content: space-between; font-family: var(--font-mono); font-size: var(--fs-micro); color: var(--text-disabled); }
`;
if (typeof document !== "undefined" && !document.getElementById("om-slider-css")) {
  const s = document.createElement("style");
  s.id = "om-slider-css";
  s.textContent = css;
  document.head.appendChild(s);
}

export function Slider({
  label,
  min = 0,
  max = 100,
  step = 1,
  value,
  defaultValue,
  onChange,
  showValue = true,
  formatValue,
  ticks,
  disabled = false,
  id,
  ...rest
}) {
  const [internal, setInternal] = React.useState(defaultValue != null ? defaultValue : min);
  const val = value != null ? value : internal;
  const pct = ((val - min) / (max - min)) * 100;
  const fieldId = id || (label ? `om-${String(label).replace(/\s+/g, "-").toLowerCase()}` : undefined);
  const handle = (e) => { const v = Number(e.target.value); if (value == null) setInternal(v); onChange && onChange(v, e); };
  const fmt = (v) => (formatValue ? formatValue(v) : v);
  return (
    <div className="om-slider">
      {(label || showValue) && (
        <div className="om-slider__top">
          {label && <label className="om-slider__label" htmlFor={fieldId}>{label}</label>}
          {showValue && <span className="om-slider__value">{fmt(val)}</span>}
        </div>
      )}
      <input
        id={fieldId}
        type="range"
        className="om-slider__input"
        min={min}
        max={max}
        step={step}
        value={val}
        onChange={handle}
        disabled={disabled}
        style={{ "--_pct": pct + "%" }}
        {...rest}
      />
      {ticks && ticks.length > 0 && (
        <div className="om-slider__ticks">
          {ticks.map((t, i) => <span key={i}>{t}</span>)}
        </div>
      )}
    </div>
  );
}
