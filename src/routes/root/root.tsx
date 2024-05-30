import React from 'react';
import JobCards from 'routes/jobs/jobCards';
import { Router } from '@gatsbyjs/reach-router'
import App from 'App';


const Root = () => {
  return (
      <Router>
        <App path="/">
          <JobCards path="/appliedJobs" />
          {/* <User path="users/:userId" /> */}
        </App>
      </Router>,
  );
}

export default Root;
