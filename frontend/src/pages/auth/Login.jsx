import { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, User } from 'lucide-react';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-black to-green-900 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="bg-green-900 text-white p-6 rounded-2xl shadow-xl w-full border border-green-500 relative overflow-hidden sm:p-8">
          <div className="absolute inset-0 bg-green-500 opacity-10 rounded-2xl animate-pulse"></div>
          <div className="flex flex-col gap-5 relative z-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-center">
              เข้าสู่ระบบ
            </h2>
            <p className="text-xs sm:text-sm text-center text-gray-300">
              ยินดีต้อนรับ! กรุณาใส่ข้อมูลของคุณ
            </p>
            <div className="relative">
              <User className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="ชื่อผู้ใช้"
                className="w-full pl-10 bg-green-800 text-white placeholder-gray-300 border border-green-600 focus:ring-2 focus:ring-green-400 rounded-lg py-2 px-3 text-sm sm:text-base"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
              <input
                type="password"
                placeholder="รหัสผ่าน"
                className="w-full pl-10 bg-green-800 text-white placeholder-gray-300 border border-green-600 focus:ring-2 focus:ring-green-400 rounded-lg py-2 px-3 text-sm sm:text-base"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex flex-col sm:flex-row justify-between text-xs sm:text-sm text-gray-300 gap-2 sm:gap-0">
              <label className="flex items-center gap-1">
                <input type="checkbox" className="accent-green-500" /> จดจำฉัน
              </label>
              <a href="#" className="text-green-400 hover:underline">
                ลืมรหัสผ่าน?
              </a>
            </div>
            <button className="bg-green-600 hover:bg-green-700 text-white w-full py-2 rounded-xl font-bold text-base sm:text-lg shadow-md">
              เข้าสู่ระบบ
            </button>
            <p className="text-center text-xs sm:text-sm text-gray-300 mt-2">
              ยังไม่มีบัญชี?{' '}
              <a href="/register" className="text-green-400 hover:underline">
                สมัครสมาชิก
              </a>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;
