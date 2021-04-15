import React from 'react';
import { Card } from 'react-bootstrap';

const BlogInfo = ({ blog }) => {
    const { title, img, background } = blog;
    return (
        <div className="col-md-4 col-sm-6 col-12">
            <Card style={{ maxWidth: '21rem', margin: '0 auto' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium sit unde placeat eum pariatur tenetur.
                    </Card.Text>
                    <div className="btn-bg-color">
                        <button className="btn text-white btn-style">LEARN MORE</button>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default BlogInfo;