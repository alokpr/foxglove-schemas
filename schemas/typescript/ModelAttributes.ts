// Generated by https://github.com/foxglove/schemas

import { Color } from "./Color";
import { Pose } from "./Pose";
import { Vector3 } from "./Vector3";

/** Data specifying the visual appearance of a 3D model */
export type ModelAttributes = {
  /** Origin of model relative to reference frame */
  pose: Pose;

  /** Scale factor to apply to the model along each axis */
  scale: Vector3;

  /** Solid color to use for the whole model. If `use_embedded_materials` is true, this color is blended on top of the embedded material color. */
  color: Color;
};
