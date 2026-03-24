function fetchPage(request) {
    const { join } = require('path');
    const fs = require('fs');

    const pageNumber = request.query.page;
    const filePath = join(process.cwd(), 'response', 'pages', `${pageNumber}.json`);

    if (!fs.existsSync(filePath)) {
        return {
            statusCode: 404,
            headers: { 'Content-Type': 'application/json' },
            body: { error: `No data found for page ${pageNumber}` }
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