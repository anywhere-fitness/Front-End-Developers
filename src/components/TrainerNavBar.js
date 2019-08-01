import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Input, Menu } from 'semantic-ui-react'

export default class Nav extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu >
          <Menu.Menu position='left'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
          </Menu.Menu>
          <Menu.Menu position='right'>
            <Link to="/trainerDashboard"><Menu.Item
              name='Home'
              active={activeItem === 'logout'}
              onClick={this.handleItemClick}
            /></Link>
            <Link to="/Team"><Menu.Item
              name='Team'
              active={activeItem === 'logout'}
              onClick={this.handleItemClick}
            /></Link>
            <Link to="/"><Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              onClick={this.handleItemClick}
            /></Link>
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}