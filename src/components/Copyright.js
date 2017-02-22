import React from 'react';
import { Container, Col, Row } from 'reactstrap';

export default class Copyright extends React.Component {
    render() {
        return (
            <div className="copyright">
                <Container>
                    <Row>
                        <Col xs="12">
                            © Copyright Monea AB
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}