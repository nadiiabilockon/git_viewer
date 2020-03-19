import React, { useState, useEffect } from "react";
import { getBranches, getCommits } from "../services/APIsersices";
import { Card, Form, Row, Col, Button } from "react-bootstrap";
import Commits from "./Commits"
import { Commit } from "../models//interfaces";

interface SelectValue {
    (event: React.FormEvent<HTMLSelectElement>, name: string): void;
}

export default function BranchesDiff(props: {
    match: { params: { owner: string; repo: string } };
}) {
    const [branches, setNames] = useState<string[]>([]);
    const [firstBranch, setfirstBranch] = useState<string>("");
    const [secondBranch, setsecondBranch] = useState<string>("");
    const [commitsFirst, setCommitsFirst] = useState<string[]>([]);
    const [commitsSecond, setCommitsSecond] = useState<string[]>([]);


    const { owner, repo } = props.match.params;

    useEffect(() => {
        getBranches(owner, repo).then(data => {
            const names = data.data.map(e => {
                return e.name;
            });
            setNames(names);
        });
    }, []);

    const handleSelectChange: SelectValue = (event, name) => {
        const value = event.currentTarget.value;

        if (name === "firstBranch") {
            setfirstBranch(value);
        } else {
            setsecondBranch(value);
        }
    };

    // const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    //     e.preventDefault();
    //     getBranchesDiff(owner, repo, firstBranch, secondBranch)
    //         .then(data => {
    //             console.log(data.data)
    //         })
    // };

    function setCommits(data: any, callback: any) {
        const commits = data.map((e: Commit) => {
            return { "message": e.commit.message, "name": e.commit.author.name, 'date': e.commit.author.date };
        });
        callback(commits)
    }

    const handleCommits = async () => {
        await getCommits(owner, repo, firstBranch)
            .then(data => setCommits(data.data, setCommitsFirst));
        await getCommits(owner, repo, secondBranch)
            .then(data => setCommits(data.data, setCommitsSecond));
    }

    return (
        <Card>
            <Card.Header>
                <Card.Title>Compare branches</Card.Title>
            </Card.Header>
            <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">
                    Select branches
                </Card.Subtitle>
                <Form>
                    <Row className="justify-content-center">
                        <RenderOptions
                            name="firstBranch"
                            branch={secondBranch}
                            options={branches}
                            handleChange={handleSelectChange}
                        />
                        <RenderOptions
                            name="secondBranch"
                            branch={firstBranch}
                            options={branches}
                            handleChange={handleSelectChange}
                        />
                    </Row>
                    <Row>
                        <Col>
                            <Button className="btn-round" variant="dark" onClick={handleCommits}>
                                Show commits difference
                            </Button>
                        </Col>
                    </Row>
                </Form>
                <hr></hr>
                <Row>
                    <Col xs="6">
                        <Commits data={commitsFirst} />
                    </Col>
                    <Col xs="6">
                        <Commits data={commitsSecond} />
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    );
}

const RenderOptions = (props: {
    handleChange: SelectValue;
    name: string;
    options: string[];
    branch: string;
}) => {
    return (
        <Col>
            <Form.Group>
                <select
                    required
                    className="custom-select mr-sm-2"
                    onChange={e => props.handleChange(e, props.name)}
                >
                    {props.options.map((el: string, i: string | number) => {
                        if (el !== props.branch) {
                            return (
                                <option key={i} value={el}>
                                    {el}
                                </option>
                            );
                        }
                    })}
                </select>
            </Form.Group>
        </Col>
    );
};
