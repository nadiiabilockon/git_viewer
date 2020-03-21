import React, { useState, useEffect } from "react";
import { getBranches, getCommits } from "../services/APIsersices";
import { Card, Form, Row, Col, Button } from "react-bootstrap";
import Select from 'react-select';
import Commits from "./Commits";
import { Commit } from "../models//interfaces";

interface SelectValue {
    (selected: { value: string }, name: string): void;
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

    const handleSelectChange: SelectValue = (selected, name) => {
        if (name === "firstBranch") {
            setfirstBranch(selected.value);
        } else {
            setsecondBranch(selected.value);
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
        const commits = data.map((e: Commit): Commit => {
            return {
                sha: e.sha,
                'commit': {
                    message: e.commit.message,
                    author: {
                        name: e.commit.author.name,
                        date: e.commit.author.date
                    }
                }
            };
        });
        callback(commits);
    }

    const handleCommits = async () => {
        await getCommits(owner, repo, firstBranch).then(data =>
            setCommits(data.data, setCommitsFirst)
        );
        await getCommits(owner, repo, secondBranch).then(data =>
            setCommits(data.data, setCommitsSecond)
        );
    };

    const selectOptions = branches.map(el => {
        return { value: el, label: el }
    })

    return (
        <Card>
            <Card.Header>
                <Card.Title>Compare</Card.Title>
            </Card.Header>
            <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">
                    Select branches
                </Card.Subtitle>
                <Form>
                    <Row className="justify-content-center">
                        <Col>
                            <Form.Group>
                                <Select
                                    options={selectOptions.filter(el => el.value !== secondBranch)}
                                    onChange={e => handleSelectChange(e, 'firstBranch')}
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Select
                                    options={selectOptions.filter(el => el.value !== firstBranch)}
                                    onChange={e => handleSelectChange(e, 'secondBranch')}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="text-center">
                        <Col>
                            <Button
                                className="btn-round"
                                variant="dark"
                                onClick={handleCommits}
                                disabled={!firstBranch || !secondBranch}
                            >
                                Show difference
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