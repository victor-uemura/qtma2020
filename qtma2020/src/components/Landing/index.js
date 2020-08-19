import React from 'react';
import { withAuthorization } from '../Session';

function Landing() {
    return (
        <main>
            <div></div>
        </main>
    );
  }
const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(Landing);