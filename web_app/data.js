import axios from 'axios';
import { mongo } from 'mongoose';

const options = {
  method: 'GET',
  url: 'https://indeed12.p.rapidapi.com/jobs/search',
  params: {
    query: 'software',
    page_id: '2'
  },
  headers: {
    'X-RapidAPI-Key': 'ef37b0c58bmsh1269e6e658910f6p107bcejsn6adadc6dc304',
    'X-RapidAPI-Host': 'indeed12.p.rapidapi.com'
  }
};

try {
  const response = await axios.request(options);
  const jobData = response.data; // Assuming the API response contains job data

  // Connect to your database
  const db = connect(/* specify connection details */);

  // Insert each job into the database
  for (const job of jobData) {
    await db.jobs.insertOne(job); // Insert the job data into the database
  }

  console.log('Data stored successfully!');
} catch (error) {
  console.error('Error storing data:', error);
}
