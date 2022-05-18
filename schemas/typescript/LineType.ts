// Generated from LineType by @foxglove/schemas

/** An enumeration indicating how input points should be interpreted to create lines */
export enum LineType {
  /** 0-1, 1-2, ..., (n-1)-n */
  LINE_STRIP = 0,

  /** 0-1, 1-2, ..., (n-1)-n, n-0 */
  LINE_LOOP = 1,

  /** 0-1, 2-3, 4-5, ... */
  LINE_LIST = 2,
}
