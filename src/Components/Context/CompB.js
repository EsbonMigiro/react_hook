import React from 'react';
import { UserContext, ChannelContext } from '../../App';

function CompB() {
  return (
    <div>
      <UserContext.Consumer>
        {user => (
          <ChannelContext.Consumer>
            {channel => (
              <div>
                {user} {channel}
              </div>
            )}
          </ChannelContext.Consumer>
        )}
      </UserContext.Consumer>
    </div>
  );
}

export default CompB;
