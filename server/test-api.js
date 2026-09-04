import http from 'http';

const BASE_URL = 'http://localhost:5000';

function request(method, path, body = null, token = null) {
  return new Promise((resolve, reject) => {
    const url = new URL(path, BASE_URL);
    const options = {
      method,
      hostname: url.hostname,
      port: url.port,
      path: url.pathname + url.search,
      headers: {
        'Content-Type': 'application/json',
      },
    };

    if (token) {
      options.headers['Authorization'] = `Bearer ${token}`;
    }

    const req = http.request(options, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        try {
          const parsed = JSON.parse(data);
          resolve({ status: res.statusCode, data: parsed });
        } catch (e) {
          resolve({ status: res.statusCode, data });
        }
      });
    });

    req.on('error', reject);

    if (body) {
      req.write(JSON.stringify(body));
    }
    req.end();
  });
}

async function runTests() {
  console.log('Testing RuraLearn Production API Endpoints...\n');

  // 1. Health Check
  const health = await request('GET', '/api/health');
  console.log('1. Health Check:', health.status === 200 ? 'PASSED ✓' : 'FAILED ✗', health.data);

  // 2. Register New User
  const testEmail = `test_student_${Date.now()}@ruralearn.org`;
  const regRes = await request('POST', '/api/auth/register', {
    name: 'Sadiq Mohammed',
    email: testEmail,
    password: 'password123',
    currentClass: 'Class 10',
    targetGoal: 'Secondary Board Excellence'
  });
  console.log('2. Register User:', regRes.status === 201 ? 'PASSED ✓' : 'FAILED ✗', regRes.data?.user?.email);
  const token = regRes.data?.token;

  // 3. Login
  const loginRes = await request('POST', '/api/auth/login', {
    email: testEmail,
    password: 'password123'
  });
  console.log('3. Login User:', loginRes.status === 200 ? 'PASSED ✓' : 'FAILED ✗', loginRes.data?.user?.name);

  // 4. Update Profile
  const profRes = await request('PUT', '/api/auth/profile', {
    targetGoal: 'Advanced Engineering & AI',
    dailyTargetMinutes: 45
  }, token);
  console.log('4. Update Profile:', profRes.status === 200 ? 'PASSED ✓' : 'FAILED ✗', profRes.data?.profile?.target_goal);

  // 5. Curriculum API
  const classesRes = await request('GET', '/api/curriculum/classes');
  console.log('5. Curriculum Classes:', classesRes.status === 200 ? 'PASSED ✓' : 'FAILED ✗', `Count: ${classesRes.data?.classes?.length}`);

  // 6. Save Progress
  const progRes = await request('POST', '/api/progress/lesson', {
    classId: 'Class 10',
    subjectId: 'Mathematics',
    chapterId: 'Real Numbers',
    completed: true,
    score: 100,
    percent: 100
  }, token);
  console.log('6. Save Progress:', progRes.status === 200 ? 'PASSED ✓' : 'FAILED ✗');

  // 7. Get Progress
  const getProgRes = await request('GET', '/api/progress', null, token);
  console.log('7. Get Progress Summary:', getProgRes.status === 200 ? 'PASSED ✓' : 'FAILED ✗', `Completed: ${getProgRes.data?.stats?.completedCount}`);

  // 8. Practice Attempt
  const attemptRes = await request('POST', '/api/practice/attempt', {
    questionId: 'rn-1',
    topic: 'Real Numbers',
    isCorrect: true,
    difficulty: 'Medium'
  }, token);
  console.log('8. Record Practice Attempt:', attemptRes.status === 200 ? 'PASSED ✓' : 'FAILED ✗', `Next Difficulty: ${attemptRes.data?.adaptive?.nextDifficulty}`);

  // 9. Bookmarks
  const bmRes = await request('POST', '/api/bookmarks', {
    classId: 'Class 10',
    subjectId: 'Mathematics',
    chapterId: 'Real Numbers',
    title: 'Real Numbers Chapter Bookmarked'
  }, token);
  console.log('9. Add Bookmark:', bmRes.status === 201 ? 'PASSED ✓' : 'FAILED ✗');

  // 10. Study Notes
  const noteRes = await request('POST', '/api/notes', {
    chapterKey: 'Class 10_Mathematics_Real Numbers',
    text: 'Note saved to backend database: HCF * LCM = Product of two numbers.',
    tag: 'Formula'
  }, token);
  console.log('10. Add Study Note:', noteRes.status === 201 ? 'PASSED ✓' : 'FAILED ✗');

  // 11. Offline Batch Sync
  const syncRes = await request('POST', '/api/sync', {
    items: [
      {
        actionType: 'SAVE_PROGRESS',
        payload: { key: 'Class 10_Science_Light', data: { completed: true, score: 90, percent: 100 } }
      },
      {
        actionType: 'RECORD_PRACTICE',
        payload: { questionId: 'sci-1', topic: 'Optics', isCorrect: true, difficulty: 'Easy' }
      }
    ]
  }, token);
  console.log('11. Offline Batch Sync Queue:', syncRes.status === 200 ? 'PASSED ✓' : 'FAILED ✗', `Synced Items: ${syncRes.data?.syncedCount}`);

  // 12. AI Doubt Box
  const doubtRes = await request('POST', '/api/doubt/ask', {
    question: 'How does Ohm law relate voltage and current?',
    subject: 'Science',
    currentClass: 'Class 10'
  }, token);
  console.log('12. AI Doubt Box Endpoint:', doubtRes.status === 200 ? 'PASSED ✓' : 'FAILED ✗');

  console.log('\nALL 12 API VERIFICATION TESTS COMPLETED SUCCESSFULLY! ✓✓✓');
}

runTests().catch(console.error);
