import React, { useState } from 'react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import '../App.css';


export function MyClasses() {

  return (
      <div className="ClassesContainer">
          <h2>Schedule</h2>
          <div>
                <Table celled>
                    <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Class Name</Table.HeaderCell>
                        <Table.HeaderCell>Date & time</Table.HeaderCell>
                        <Table.HeaderCell>Location</Table.HeaderCell>
                    </Table.Row>
                    </Table.Header>

                    <Table.Body>
                    <Table.Row>
                        <Table.Cell>Yoga</Table.Cell>
                        <Table.Cell>01/02/03 at 12:00 PM</Table.Cell>
                        <Table.Cell>Park</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Cycling</Table.Cell>
                        <Table.Cell>04/05/06 at 1:00 PM</Table.Cell>
                        <Table.Cell>Gym</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Boxing</Table.Cell>
                        <Table.Cell>07/08/09 at 2:00 PM</Table.Cell>
                        <Table.Cell>Club</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Core</Table.Cell>
                        <Table.Cell>10/11/12 at 3:00 PM</Table.Cell>
                        <Table.Cell>Park</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Karate</Table.Cell>
                        <Table.Cell>12/14/15 at 4:00 PM</Table.Cell>
                        <Table.Cell>Dojo</Table.Cell>
                    </Table.Row>
                    </Table.Body>

                    <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='3'>
                        <Menu floated='right' pagination>
                            <Menu.Item as='a' icon>
                            <Icon name='chevron left' />
                            </Menu.Item>
                            <Menu.Item as='a'>1</Menu.Item>
                            <Menu.Item as='a'>2</Menu.Item>
                            <Menu.Item as='a'>3</Menu.Item>
                            <Menu.Item as='a'>4</Menu.Item>
                            <Menu.Item as='a' icon>
                            <Icon name='chevron right' />
                            </Menu.Item>
                        </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                    </Table.Footer>
                </Table>
          </div>
      </div>
  );
}