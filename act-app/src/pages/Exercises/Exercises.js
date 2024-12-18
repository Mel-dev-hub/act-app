import MenuBar from "../../components/MenuBar/MenuBar";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import YoutubeEmbed from '../../components/YoutubeEmbed/YoutubeEmbed';
import "./Exercises.css";

function Exercises() {
    
    return (
      <div className="blue-background">
        <MenuBar/>
        <Container fluid="md" className="col-xl-6 col-lg-12 col-md-12 col-sm-12 col-12">
          <Row className="mx-2 mt-5 mb-1">
            <Col><h4 className="white-text">Mindfulness exercises</h4></Col>
          </Row>
          <Row className="mx-2 mb-3">
            <Col><p className="white-text instructions">Follow any of these mindfulness exercises when you are feeling overwelmed or whenever you would like to calm down.</p></Col>
          </Row>
          <Row className="mx-2 mb-3 mt-1">
            <Col><YoutubeEmbed videoId="1" embedId="V-CselVKuzI" /></Col>
          </Row>
          <Row className="mx-2 mb-3 mt-1">
            <Col><YoutubeEmbed videoId="2" embedId="XpPDP_f-TS8" /></Col>
          </Row>
          <Row className="mx-2 mb-3 mt-1">
            <Col><YoutubeEmbed videoId="3" embedId="afS3wfTG4LA" /></Col>
          </Row>
          <Row className="mx-2 mb-3 mt-1">
            <Col><YoutubeEmbed videoId="4" embedId="1yQX1y7zMAg" /></Col>
          </Row>
          <Row className="mx-2 mb-3 mt-1">
            <Col><YoutubeEmbed videoId="5" embedId="Et8v6FhoYBA" /></Col>
          </Row>
          <Row className="mx-2 mt-5">
            <Col><h4 className="white-text">Learning material</h4></Col>
          </Row>
          <Row className="mx-2 mb-3">
            <Col><p className="white-text instructions">Watch these videos if you need more information about values and goal setting or if you'd simply like to learn more about ACT.</p></Col>
          </Row>
          <Row className="mx-2 mb-3 mt-1">
            <Col><YoutubeEmbed videoId="6" embedId="ScwXgqO_d7Y" /></Col>
          </Row>
          <Row className="mx-2 mb-3 mt-1">
            <Col><YoutubeEmbed videoId="7" embedId="v-t1Z5-oPtU" /></Col>
          </Row>
          <Row className="mx-2 mb-3 mt-1">
            <Col><YoutubeEmbed videoId="8" embedId="T-lRbuy4XtA" /></Col>
          </Row>
          <Row className="mx-2 mb-3 mt-1">
            <Col><YoutubeEmbed videoId="9" embedId="fPYHNPf5XpA" /></Col>
          </Row>
          <Row className="mx-2 mb-5 mt-1">
            <Col><YoutubeEmbed videoId="10" embedId="xxKS3LCtNQo" /></Col>
          </Row>
        </Container>
      </div>
    );
}
  
export default Exercises;