const PITCH = 28;
const RADIUS = 16;
const TILE_COUNT = 24;
const TILE_W = TILE_COUNT * PITCH;
const ROW_DY = 10;
const HEIGHT = RADIUS + ROW_DY * 2 + RADIUS;
const TRACK_W = TILE_W * 2;

const ROWS = [
  { fill: "#d8f8fc", offsetX: 0, cy: RADIUS },
  { fill: "#b0e8ec", offsetX: PITCH / 2, cy: RADIUS + ROW_DY },
  { fill: "#94d8e0", offsetX: 0, cy: RADIUS + ROW_DY * 2 },
  { fill: "#ffffff", offsetX: PITCH / 2, cy: RADIUS + ROW_DY * 3 },
];

export function ScallopWave() {
  return (
    <div
      className="scallop-wrap -mx-5 mt-0.5 mb-0 bg-paper"
      style={{ height: HEIGHT }}
      aria-hidden="true"
    >
      <div
        className="scallop-track"
        style={{ width: TRACK_W, height: HEIGHT }}
      >
        <svg
          width={TRACK_W}
          height={HEIGHT}
          shapeRendering="geometricPrecision"
        >
          {ROWS.map((row, ri) =>
            Array.from({ length: TILE_COUNT * 2 }, (_, i) => (
              <circle
                key={`${ri}-${i}`}
                cx={row.offsetX + i * PITCH}
                cy={row.cy}
                r={RADIUS}
                fill={row.fill}
              />
            )),
          )}
        </svg>
      </div>
    </div>
  );
}
