/**
 * @providesModule RCTActivityIndicatorView
 * @flow
 */
import RCTView from "RCTView";
import CustomElement from "CustomElement";
import ColorArrayFromHexARGB from "ColorArrayFromHexARGB";

// adapted from https://github.com/necolas/react-native-web/blob/master/src/components/ActivityIndicator/index.js
const INDICATOR_SVG = `
<svg height="100%" viewBox="0 0 32 32" width="100%">
  <circle cx="16" cy="16" fill="none" r="14" stroke-width="4" style="stroke: currentColor; opacity: 0.2;"></circle>
  <circle cx="16" cy="16" fill="none" r="14" stroke-width="4" style="stroke: currentColor; stroke-dasharray: 80px; stroke-dashoffset: 60px;"></circle>
</svg>
`;

@CustomElement("rct-activity-indicator-view")
class RCTActivityIndicatorView extends RCTView {
  animationContainer: HTMLElement;
  animation: Animation;
  _animating: boolean;
  _hidesWhenStopped: boolean;

  constructor(bridge: RCTBridge) {
    super(bridge);

    this.animationContainer = this.constructAnimationContainer();
    this.childContainer.appendChild(this.animationContainer);

    this.animation = this.constructAnimation();
    this.color = "rgb(25, 118, 210)";
    this.animating = true;
    this.hidesWhenStopped = true;
  }

  constructAnimationContainer() {
    const container = document.createElement("div");
    Object.assign(container.style, {
      position: "absolute",
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      willChange: "transform"
    });
    return container;
  }

  constructAnimation() {
    return this.animationContainer.animate(
      [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
      {
        duration: 750,
        iterations: Infinity,
        easing: "linear"
      }
    );
  }

  updateView() {
    if ((!this._hidesWhenStopped && !this._animating) || this._animating) {
      this.animationContainer.innerHTML = INDICATOR_SVG;
    } else {
      this.animationContainer.innerHTML = "";
    }

    if (this._animating) {
      this.animation.play();
    } else {
      this.animation.pause();
    }
  }

  set color(value: number | string) {
    if (typeof value === "number") {
      const [a, r, g, b] = ColorArrayFromHexARGB(value);
      const stringValue = `rgba(${r},${g},${b},${a})`;
      this.style.color = stringValue;
    } else {
      this.style.color = value;
    }
  }

  set animating(value: boolean) {
    this._animating = value;
    this.updateView();
  }

  set hidesWhenStopped(value: boolean) {
    this._hidesWhenStopped = value;
    this.updateView();
  }
}

export default RCTActivityIndicatorView;
