import Canvas from "../hook/Canvas";

const wave = {
  y: null,
  length: 0.0048,
  amplitude: 76,
  frequency: -0.012
}

let increment = wave.frequency;

const draw = (c, f) => {
  const canvas = c.canvas;
  
  wave.x = canvas.width / 2 / window.devicePixelRatio;

  
  c.clearRect(0,0, canvas.width, canvas.height)

  increment += wave.frequency

  c.beginPath()
  for (let i = -5; i < canvas.height+5; i++) {
    c.lineTo(wave.x + Math.sin(i * wave.length + increment) * wave.amplitude, i)
  }
  c.strokeStyle = "#fff"
  c.lineWidth = 10
  c.stroke();

  c.fillStyle = "#000"
  c.lineTo(-5, canvas.height+5)
  c.lineTo(-5, -5)
  c.fill()

  
};

const ProjectsCanvas = () => (
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

export default ProjectsCanvas;
