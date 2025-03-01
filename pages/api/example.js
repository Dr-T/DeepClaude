export default async function handler(req, res) {
  try {
    // 您的代码逻辑
    res.status(200).json({ message: '成功' });
  } catch (error) {
    console.error('API错误:', error);
    res.status(500).json({ error: error.message });
  }
} 