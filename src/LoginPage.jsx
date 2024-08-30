import { Link } from 'react-router-dom';
import introVideo from './component/assets/cinematik.mp4';

function LoginPage() {
  return (
    <div className="w-full h-screen flex justify-center">
      <div className="flex justify-center items-center w-full max-w-[1920px] max-h-[1080px]">
        <div className="w-[45%] h-[70%] flex shadow-2xl relative">
          <div className=" h-full w-[55%] flex justify-center items-center z-10">
            <div className="w-[60%] h-[50%]">
              <div className="w-full h-[20%] flex justify-center items-center">
                <span className="text-3xl font-bold">Login</span>
              </div>
              <div className="mt-5">
                <input
                  className="w-full h-10 border-b-[2px] border-b-gray-200 placeholder:text-xs focus:outline-none"
                  type="email"
                  placeholder="Email Address"
                />
                <input
                  className="w-full h-10 border-b-[2px] border-b-gray-200 placeholder:text-xs focus:outline-none mt-4"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div className="w-full h-[15%] bg-white flex items-center">
                <div className="flex items-center text-gray-300 text-xs">
                  <input type="checkbox" />
                  <span className="ml-3">Remember me</span>
                  <Link to="" className="ml-20 underline text-yellow-600">
                    Forgot password
                  </Link>
                </div>
              </div>
              <div className="flex justify-center items-center mt-6">
                <div className="bg-black flex items-center justify-center text-white w-full h-10">
                  <Link
                    className="bg-black flex items-center justify-center text-white w-full h-10"
                    to="/test-porche/home"
                  >
                    Login
                  </Link>
                </div>
              </div>
              <div className="w-full h-8 flex items-center justify-center text-xs gap-2 mt-4">
                <span>Don't Have An Account?</span>
                <Link to="/test-porche/register" className="underline text-yellow-600">
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-black h-full w-[45%] relative overflow-hidden">
            <video
              className="absolute top-0 left-0 w-full h-full object-cover"
              autoPlay
              loop
              muted
            >
              <source src={introVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
