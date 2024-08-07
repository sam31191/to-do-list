import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('To Do');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/tasks', {
          params: { status: filter }
        });
        setTodos(response.data);
      } catch (error) {
        console.error('There was an error fetching the todos!', error);
      }
    };

    fetchTodos();
  }, [filter]);

  const addTodo = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/task', {
        title,
        description,
        status
      });
      setTodos([...todos, response.data]);
      setTitle('');
      setDescription('');
      setStatus('To Do');
    } catch (error) {
      console.error('There was an error adding the todo!', error);
    }
  };

  const updateTodo = async (id, updatedTodo) => {
    try {
      const response = await axios.put(`http://localhost:5000/api/task/${id}`, updatedTodo);
      setTodos(todos.map(todo => (todo._id === id ? response.data : todo)));
    } catch (error) {
      console.error('There was an error updating the todo!', error);
    }
  };

  const deleteTodo = async id => {
    try {
      await axios.delete(`http://localhost:5000/api/task/${id}`);
      setTodos(todos.filter(todo => todo._id !== id));
    } catch (error) {
      console.error('There was an error deleting the todo!', error);
    }
  };

  return (
    <Container className="mt-5">
      <Row className="mb-4">
        <Col>
          <h1 className="text-center">ToDo List</h1>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <InputGroup className="mb-3">
            <Form.Control
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
            />
          </InputGroup>
        </Col>
        <Col>
          <Form.Control
            as="textarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
          />
        </Col>
        <Col>
          <Form.Select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </Form.Select>
        </Col>
        <Col>
          <Button variant="primary" onClick={addTodo}>Add Task</Button>
        </Col>
      </Row>
      <Row className="mb-4">
        <Col>
          <Form.Select value={filter} onChange={(e) => setFilter(e.target.value)}>
            <option value="">All</option>
            <option value="To Do">To Do</option>
            <option value="In Progress">In Progress</option>
            <option value="Done">Done</option>
          </Form.Select>
        </Col>
      </Row>
      <Row>
        <Col>
          <ListGroup>
            {todos.map(todo => (
              <ListGroup.Item key={todo._id}>
                <Card>
                  <Card.Body>
                    <Card.Title>{todo.title}</Card.Title>
                    <Card.Text>{todo.description}</Card.Text>
                    <Card.Text>Status: {todo.status}</Card.Text>
                    <Button variant="info" onClick={() => updateTodo(todo._id, { ...todo, status: 'In Progress' })}>
                      In Progress
                    </Button>{' '}
                    <Button variant="success" onClick={() => updateTodo(todo._id, { ...todo, status: 'Done' })}>
                      Done
                    </Button>{' '}
                    <Button variant="danger" onClick={() => deleteTodo(todo._id)}>Delete</Button>
                  </Card.Body>
                </Card>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
