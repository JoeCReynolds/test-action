const core = require('@actions/core');
const github = require('@actions/github');

try {
  // `environment` input defined in action metadata file
  const environment = core.getInput('environment');
  console.log(`The environment: ${environment}!`);
  const status = 'Success!';
  core.setOutput("status", time);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}