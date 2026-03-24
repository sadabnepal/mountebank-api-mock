function fetchUser(request) {
    const { join } = require('path');
    const fs = require('fs');

    const userId = request.path.split('/').pop();
    const filePath = join(process.cwd(), 'response', 'users', `${userId}.json`);

    if (!fs.existsSync(filePath)) {
        return {
            statusCode: 404,
            headers: { 'Content-Type': 'application/json' },
            body: { error: `No data found for user ${userId}` }
        };
    }

    const data = fs.readFileSync(filePath, { encoding: 'utf8' });

    const response = {
        "statusCode": 200,
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.parse(data)
    };

    return response;
}