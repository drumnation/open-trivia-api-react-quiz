import React, { Component } from 'react'
import { Well, Row, Col } from 'react-bootstrap'

class Scorebox extends Component {
    render() {
        return (
            <Well className="scorebox">
                <Row>
                    <Col md={10}>
                        Question <strong>{this.props.current + 1}</strong> out of <strong>{this.props.questions.length}</strong>
                    </Col>
                    <Col md={2}>
                        <strong>Score: </strong><span className="score">{this.props.score}</span>
                    </Col>
                </Row>
            </Well>
        )
    }
}

export default Scorebox