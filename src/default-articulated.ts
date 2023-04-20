import Articulated from "Objects/articulated";
import Node from "Objects/node";
import Animation from "Objects/animation";
import Lambda from "Objects/lambda";
import AnimationType from "Types/animation-type";
import generateDefaultArrayOfFace from "Main/default-array-of-face";

function generateDefaultArticulated(): Articulated {
  return new Articulated(
    new Node(
      "root",
      [
        new Node(
          "point-between-feet",
          [
            new Node(
              "waist",
              [
                new Node(
                  "torso",
                  [
                    new Node(
                      "neck",
                      [
                        new Node(
                          "head",
                          [],
                          generateDefaultArrayOfFace(),
                          0,
                          -50,
                          0,
                          0,
                          0,
                          0,
                          1,
                          1,
                          1
                        ),
                      ],
                      generateDefaultArrayOfFace(),
                      0,
                      -50,
                      0,
                      0,
                      0,
                      0,
                      1,
                      1,
                      1
                    ),
                    new Node(
                      "left-arm",
                      [
                        new Node(
                          "left-forearm",
                          [
                            new Node(
                              "left-hand",
                              [],
                              generateDefaultArrayOfFace(),
                              -50,
                              0,
                              0,
                              0,
                              0,
                              0,
                              1,
                              1,
                              1
                            ),
                          ],
                          generateDefaultArrayOfFace(),
                          -50,
                          0,
                          0,
                          0,
                          0,
                          0,
                          1,
                          1,
                          1
                        ),
                      ],
                      generateDefaultArrayOfFace(),
                      -50,
                      0,
                      0,
                      0,
                      0,
                      0,
                      1,
                      1,
                      1
                    ),
                    new Node(
                      "right-arm",
                      [
                        new Node(
                          "right-forearm",
                          [
                            new Node(
                              "right-hand",
                              [],
                              generateDefaultArrayOfFace(),
                              50,
                              0,
                              0,
                              0,
                              0,
                              0,
                              1,
                              1,
                              1
                            ),
                          ],
                          generateDefaultArrayOfFace(),
                          50,
                          0,
                          0,
                          0,
                          0,
                          0,
                          1,
                          1,
                          1
                        ),
                      ],
                      generateDefaultArrayOfFace(),
                      50,
                      0,
                      0,
                      0,
                      0,
                      0,
                      1,
                      1,
                      1
                    ),
                  ],
                  generateDefaultArrayOfFace(),
                  0,
                  -100,
                  0,
                  0,
                  0,
                  0,
                  1,
                  1,
                  1
                ),
                new Node(
                  "left-leg",
                  [
                    new Node(
                      "left-calf",
                      [
                        new Node(
                          "left-foot",
                          [],
                          generateDefaultArrayOfFace(),
                          0,
                          50,
                          0,
                          0,
                          0,
                          0,
                          1,
                          1,
                          1
                        ),
                      ],
                      generateDefaultArrayOfFace(),
                      0,
                      50,
                      0,
                      0,
                      0,
                      0,
                      1,
                      1,
                      1
                    ),
                  ],
                  generateDefaultArrayOfFace(),
                  -50,
                  50,
                  0,
                  0,
                  0,
                  0,
                  1,
                  1,
                  1
                ),
                new Node(
                  "right-leg",
                  [
                    new Node(
                      "right-calf",
                      [
                        new Node(
                          "right-foot",
                          [],
                          generateDefaultArrayOfFace(),
                          0,
                          50,
                          0,
                          0,
                          0,
                          0,
                          1,
                          1,
                          1
                        ),
                      ],
                      generateDefaultArrayOfFace(),
                      0,
                      50,
                      0,
                      0,
                      0,
                      0,
                      1,
                      1,
                      1
                    ),
                  ],
                  generateDefaultArrayOfFace(),
                  50,
                  50,
                  0,
                  0,
                  0,
                  0,
                  1,
                  1,
                  1
                ),
              ],
              generateDefaultArrayOfFace(),
              0,
              -150,
              0,
              0,
              0,
              0,
              1,
              1,
              1
            ),
          ],
          [],
          0,
          0,
          0,
          0,
          0,
          0,
          1,
          1,
          1
        ),
      ],
      [],
      0,
      0,
      0,
      0,
      0,
      0,
      1,
      1,
      1
    ),
    [
      new Animation(
        "point-between-feet",
        AnimationType.MOVE_Y,
        new Lambda("(c) => -50 * Math.abs(Math.sin(c))")
      ),
      new Animation(
        "left-leg",
        AnimationType.ROTATE_X,
        new Lambda("(c) => Math.sin(c)")
      ),
      new Animation(
        "right-leg",
        AnimationType.ROTATE_X,
        new Lambda("(c) => -Math.sin(c)")
      ),
      new Animation(
        "left-calf",
        AnimationType.ROTATE_X,
        new Lambda("(c) => -Math.sin(c + 0.1) * 0.4")
      ),
      new Animation(
        "right-calf",
        AnimationType.ROTATE_X,
        new Lambda("(c) => Math.sin(c + 0.1) * 0.4")
      ),
      new Animation(
        "left-foot",
        AnimationType.ROTATE_X,
        new Lambda("(c) => -Math.sin(c + 0.1) * 0.4")
      ),
      new Animation(
        "right-foot",
        AnimationType.ROTATE_X,
        new Lambda("(c) => Math.sin(c + 0.1) * 0.4")
      ),
      new Animation(
        "left-arm",
        AnimationType.ROTATE_Z,
        new Lambda("(c) => Math.sin(c) * 0.4")
      ),
      new Animation(
        "right-arm",
        AnimationType.ROTATE_Z,
        new Lambda("(c) => Math.sin(c) * 0.4")
      ),
      new Animation(
        "left-forearm",
        AnimationType.ROTATE_Z,
        new Lambda("(c) => Math.sin(c + 0.1) * 0.4")
      ),
      new Animation(
        "right-forearm",
        AnimationType.ROTATE_Z,
        new Lambda("(c) => Math.sin(c + 0.1) * 0.4")
      ),
      new Animation(
        "left-hand",
        AnimationType.ROTATE_Z,
        new Lambda("(c) => Math.sin(c - 0.1) * 0.4")
      ),
      new Animation(
        "right-hand",
        AnimationType.ROTATE_Z,
        new Lambda("(c) => Math.sin(c - 0.1) * 0.4")
      ),
      new Animation(
        "waist",
        AnimationType.ROTATE_Y,
        new Lambda("(c) => Math.sin(c) * 0.4")
      ),
      new Animation(
        "torso",
        AnimationType.ROTATE_Y,
        new Lambda("(c) => Math.sin(c) * 0.4")
      ),
      new Animation(
        "neck",
        AnimationType.ROTATE_Y,
        new Lambda("(c) => Math.sin(c + 0.25) * 0.4")
      ),
      new Animation(
        "head",
        AnimationType.ROTATE_X,
        new Lambda("(c) => Math.sin(c * 2) * 0.2")
      ),
      new Animation(
        "head",
        AnimationType.ROTATE_Y,
        new Lambda("(c) => Math.sin(c + 0.5) * 0.4")
      ),
    ]
  );
}

export default generateDefaultArticulated;
