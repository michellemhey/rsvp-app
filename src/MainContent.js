import React from 'react';
import PropTypes from 'prop-types';

import Counter from './Counter';

const MainContent = props =>
  <div className="main">
    <div>
      <h2>Invitees</h2>
      <label>
        <input type="checkbox" onChange={this.toggleFilter} checked={this.state.isFiltered} /> Hide those who haven't responded
      </label>
    </div>
    <Counter 
      totalInvited={totalInvited} 
      numberAttending={numberAttending}
      numberUnconfirmed={numberUnconfirmed}
    />
    <GuestList 
      guests={this.state.guests}
      toggleConfirmationAt={this.toggleConfirmationAt}
      toggleEditingAt={this.toggleEditingAt}
      setNameAt={this.setNameAt}
      isFiltered={this.state.isFiltered}
      removeGuestAt={this.removeGuestAt}
      pendingGuest={this.state.pendingGuest}
    />
  </div>;