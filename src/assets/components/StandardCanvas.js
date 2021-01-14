import Canvas from "../hook/Canvas";

const wave = {
  y: null,
  length: 0.003,
  amplitude: -89,
  frequency: -0.007
}

let increment = wave.frequency;

const draw = (c, f) => {
  const canvas = c.canvas;
  
  c.clearRect(0,0, canvas.width, canvas.height)

  wave.y = canvas.height / 1.9 / window.devicePixelRatio;
  increment += wave.frequency;

  c.beginPath()
  for (let i = -5; i < canvas.width+5; i++) {
    c.lineTo(i, wave.y + Math.sin(i * wave.length + increment) * wave.amplitude)
  }
  c.strokeStyle = "#fff"
  c.lineWidth = 10
  c.stroke();

  c.fillStyle = "#000"
  c.lineTo(canvas.width+5, -5)
  c.lineTo(-5, -5)
  c.fill()

  
};

const StandardCanvas = () => (
  <Canvas
    draw={draw}
    style={{
      width: "100%",
      height: "100%",
      position: "absolute",
      top: 0,
      left: 0,
    }}
  />
);

export default StandardCanvas;
