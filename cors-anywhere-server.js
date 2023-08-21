import { createServer } from 'cors-anywhere';

const host = 'localhost'; // 프론트엔드 도메인 (ex: localhost)
const port = 5173; // 프론트엔드 포트

createServer({
  originWhitelist: [], // 모든 도메인 허용
}).listen(port, host, () => {
  console.log(`CORS Anywhere server is running on ${host}:${port}`);
});
