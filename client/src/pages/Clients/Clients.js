import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getClients, } from '../../actions'
import { Box, TextInput} from 'grommet'
import './Clients.css'

const Clients = ({ getClients, client: { clients } }) => {
  useEffect(() => {
    getClients()
  }, [getClients])

  const [searchData, setSearchData] = useState({
    query: ''
  })

  const { query } = searchData;

  const search = () => {
    console.log('state', searchData)
  }
  
  
  let filteredClients = clients.filter((client) => {
    return client.firstName.toLowerCase().indexOf(query) !== -1 || client.lastName.toLowerCase().indexOf(query.toLowerCase()) !== -1  })
  return (
    <div>
      <Box className="search-container" margin="50px" width="50%">

        <TextInput
        placeholder="search"
        width="50%"
        margin="50px"
        pad="100px"
        value={query}
        onChange={e => setSearchData({ query: e.target.value})}
        onKeyPress={e => {
          if (e.key === 'Enter'){
            search()
          }
        }}
       />
      </Box>
    <div className="clients-container">
    
      {filteredClients.map(client => (
        <Box className="client-cards" key={client._id}>
          <h3>{client.firstName} {client.lastName}</h3>
        </Box>
      ))}
    </div>
    </div>
  )
}

Clients.propTypes = {
  getClients: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  client: state.client
})

export default connect(mapStateToProps, { getClients })(Clients)
