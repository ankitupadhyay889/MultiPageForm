import React, { useState } from 'react';
import {Form , Button , Jumbotron , Container} from "react-bootstrap";

const MainForm = () => {

    const [step, setstep] = useState(0)
    const [user, setuser] = useState([
        {email:"" , username:"" , work:""}
    ])

    let name , value;
    const inO = (e) => {
        name = e.target.name;
        value = e.target.value;

        setuser({...user , [name] : value});
    } 
    console.log(user);
    
    const next = () => {
        setstep(cur => cur + 1);
    }

    const rendButton = () => {
        if(step > 2) {
            return undefined;
        }else{
            return(
                <Button onClick={next}>Next Step</Button>
            )
        }
    }

    return (
        <div>
            <Form className="container mt-5">
                {
                    step === 0 && (
                        <section>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" name="email" value={user.email} onChange={inO} placeholder="Enter email" />
                            </Form.Group>
                        </section>
                    )
                }
                {
                    step === 1 && (
                        <section>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" name="username" value={user.username} onChange={inO} placeholder="Name" />
                            </Form.Group>
                        </section>
                    )
                }
                {
                    step === 2 && (
                        <section>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Work</Form.Label>
                                <Form.Control type="text" name="work" value={user.work} onChange={inO} placeholder="Work" />
                            </Form.Group>
                        </section>
                    )
                }
                {
                    step === 3 && (
                        <section>
                            <Jumbotron fluid>
                                <Container>
                                    <h1>Congratulations!</h1>
                                </Container>
                            </Jumbotron>
                        </section>
                    )
                }
                {
                    rendButton()
                }
            </Form> 
        </div>
    );
};

export default MainForm;