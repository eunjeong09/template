import { Button, Container, Row, Col } from "react-bootstrap";
import { Line, Bar, Radar, Doughnut, Pie, Scatter } from "react-chartjs-2";

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "First dataset",
      data: [33, 53, 85, 41, 44, 65],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
    },
    {
      label: "Second dataset",
      data: [33, 25, 35, 51, 54, 76],
      fill: false,
      borderColor: "#742774",
    },
  ],
};

function Chartjs() {
  return (
    <div className="chartjs">
      <h2>Chart js</h2>
      <div className="bgWhite">
        <Container>
          <Row>
            <Col>
              <h3>Line</h3>
              <p>
                A line chart is a way of plotting data points on a line. Often,
                it is used to show trend data, or the comparison of two data
                sets.
              </p>
              <Line data={data} />
            </Col>
            <Col>
              <h3>Bar</h3>
              <p>
                A bar chart provides a way of showing data values represented as
                vertical bars. It is sometimes used to show trend data, and the
                comparison of multiple data sets side by side.
              </p>
              <Bar data={data} />
            </Col>
          </Row>
          <Row>
            <Col>
              <h3>Radar</h3>
              <p>
                A radar chart is a way of showing multiple data points and the
                variation between them.
              </p>
              <Radar data={data} />
            </Col>
            <Col>
              <h3>Scatter</h3>
              <p>
                Scatter charts are based on basic line charts with the x axis
                changed to a linear axis. To use a scatter chart, data must be
                passed as objects containing X and Y properties.
              </p>
              <Scatter data={data} />
            </Col>
          </Row>
          <Row>
            <h3>Doughnut and Pie</h3>
            <p>
              Pie and doughnut charts are probably the most commonly used
              charts. They are divided into segments, the arc of each segment
              shows the proportional value of each piece of data.
            </p>
            <Col>
              <Pie data={data} />
            </Col>
            <Col>
              <Doughnut data={data} />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Chartjs;
